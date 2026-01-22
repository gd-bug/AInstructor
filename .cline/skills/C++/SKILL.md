---
name: C++
description: C++23 with deterministic rules. Auto-scales by project size. No inline comments.
---
**CORE PRINCIPLE: Code should explain itself. One logical concern per unit.**
## 🎯 EXECUTION FLOW (AI Follow Exactly)
1. **SIZE →** Detect project: `Tiny`(<500), `Small`(<5K), `Large`(5K+)
2. **PATTERN →** Apply matching code pattern below
3. **VALIDATE →** Check 4-point list before output
## 🔢 SIZE DETECTION (Deterministic)
- **Tiny**: Single file OR <500 lines total
- **Small**: 2-5 files OR 500-5000 lines
- **Large**: 6+ files OR 5000+ lines
## 📦 CODE PATTERNS (Pick ONE Based on Size)
### PATTERN A: TINY PROJECTS
```cpp
#include <iostream>
#include <string_view>

// Simple struct, no classes needed
struct User {
  std::string name;
  int age;
};

// Free functions only
auto greet(std::string_view name) -> void {
  std::cout << "Hello, " << name << "!\n";
}

auto create_user(std::string_view n, int a) -> User {
  return User{.name = std::string{n}, .age = a};
}
```
### PATTERN B: SMALL PROJECTS
```cpp
#include <memory>
#include <optional>
#include <string_view>

// Single-responsibility class
class UserService {
 public:
  explicit UserService(std::string db_path);

  auto add_user(std::string_view name, int age) -> bool;
  auto find_user(int id) -> std::optional<User>;

 private:
  class Impl;
  std::unique_ptr<Impl> impl_;  // PIMPL for abstraction
};

// Helper functions in namespace
namespace utils {
auto validate_age(int age) -> bool;
auto normalize_name(std::string_view name) -> std::string;
}
```
### PATTERN C: LARGE PROJECTS
```cpp
#include <concepts>
#include <expected>
#include <string_view>

// Concept for compile-time safety
template<typename T>
concept Serializable = requires(T t) {
  { t.serialize() } -> std::convertible_to<std::string>;
};

// Interface + implementation
class IUserRepository {
 public:
  virtual ~IUserRepository() = default;
  virtual auto save(const User& user) -> std::expected<void, Error> = 0;
  virtual auto load(int id) -> std::expected<User, Error> = 0;
};

// Service with dependency injection
class UserManager {
 public:
  explicit UserManager(std::unique_ptr<IUserRepository> repo);
  auto register_user(UserRegistration data) -> Result<User, Error>;

 private:
  std::unique_ptr<IUserRepository> repository_;
};
```
## 📋 4-POINT VALIDATION (Check ALL)
```markdown
[ ] 1. **SINGLE CONCERN**: Each function/class does ONE thing
[ ] 2. **MODERN C++**: Uses C++23 features appropriately for size
[ ] 3. **NO COMMENTS**: Zero inline comments (explain in commit)
[ ] 4. **CLEAN NAMES**: Follow naming table below
```
## 📛 NAMING TABLE (Deterministic)
| What | Format | Example | Rule |
|------|--------|---------|------|
| Class/Struct | `PascalCase` | `UserService` | Always |
| Function | `snake_case` | `get_user()` | Always |
| Variable | `snake_case` | `user_count` | Always |
| Constant | `SCREAMING_SNAKE` | `MAX_USERS` | Always |
| Private Member | `snake_case_` | `cache_` | Classes only |
| Namespace | `snake_case` | `database` | Lowercase |
| Template Param | `T` or `PascalCase` | `typename T` | Simple types: `T`, complex: `ValueType` |
## ⚡ QUICK RULES (Do/Don't)
### ✅ ALWAYS DO
- Use `const` by default
- `[[nodiscard]]` for important returns
- `std::unique_ptr` for ownership
- `enum class` not `enum`
- `std::string_view` for read-only strings
- `auto` return with trailing type
### ❌ NEVER DO
- Raw `new`/`delete` (use smart pointers)
- C-style casts (use `static_cast` etc.)
- `#define` constants (use `constexpr`)
- Global variables
- Functions >50 lines
- Inline comments
### 🚨 STOP & SPLIT (Red Flags)
- File >500 lines → Split into multiple files
- Function >50 lines → Extract helper functions
- Class >10 methods → Split responsibilities
- Deep inheritance (>2 levels) → Use composition
## 🛠️ ERROR HANDLING BY SIZE
```cpp
// TINY: Simple returns
auto find(int id) -> std::optional<User>;

// SMALL: Expected type
auto find(int id) -> std::expected<User, Error>;

// LARGE: Result monad
class Result<User, Error> { /* ... */ };
```
## 🎲 REAL EXAMPLES
### Example 1: File Reader (Detected: Tiny)
```cpp
#include <fstream>
#include <string>
#include <vector>

auto read_lines(std::string_view path) -> std::vector<std::string> {
  auto file = std::ifstream(path.data());
  auto lines = std::vector<std::string>{};

  for (std::string line; std::getline(file, line); ) {
    lines.push_back(std::move(line));
  }

  return lines;
}
```
### Example 2: Cache System (Detected: Small)
```cpp
#include <unordered_map>
#include <optional>
#include <mutex>

template<typename Key, typename Value>
class ThreadSafeCache {
 public:
  auto get(const Key& key) -> std::optional<Value> {
    std::lock_guard lock(mutex_);
    if (auto it = cache_.find(key); it != cache_.end()) {
      return it->second;
    }
    return std::nullopt;
  }

  auto set(const Key& key, Value value) -> void {
    std::lock_guard lock(mutex_);
    cache_[key] = std::move(value);
  }

 private:
  std::unordered_map<Key, Value> cache_;
  mutable std::mutex mutex_;
};
```
### Example 3: Plugin System (Detected: Large)
```cpp
#include <concepts>
#include <memory>
#include <vector>

template<typename T>
concept Plugin = requires(T plugin) {
  { plugin.name() } -> std::convertible_to<std::string>;
  { plugin.initialize() } -> std::same_as<bool>;
  { plugin.execute() } -> std::same_as<void>;
};

class PluginManager {
 public:
  template<Plugin P>
  auto register_plugin(std::unique_ptr<P> plugin) -> void {
    plugins_.push_back(std::move(plugin));
  }

  auto initialize_all() -> bool {
    return std::ranges::all_of(plugins_, [](auto& p) { return p->initialize(); });
  }

 private:
  std::vector<std::unique_ptr<IPlugin>> plugins_;
};
```
## 🔄 AUTO-FIX PROTOCOL
If violation found:
1. **Identify**: Which of 4 validation points failed?
2. **Apply**: Use matching pattern from above
3. **Verify**: Re-check validation
## 📏 FORMATTING RULES
1. **Always**: `clang-format -style=Google`
2. **Indent**: 2 spaces
3. **Line limit**: 80 characters
4. **Braces**: Same line for functions/classes
5. **Includes**: Group with blank lines: system → project → local
## 🏁 FINAL CHECK BEFORE OUTPUT
```
✓ Size detected correctly (Tiny/Small/Large)
✓ Matching pattern applied
✓ 4 validation points passed
✓ Formatted with Google style
✓ No inline comments present
```
---
**AI EXECUTION SUMMARY**: Pick size → Apply pattern → Validate 4 points → Output