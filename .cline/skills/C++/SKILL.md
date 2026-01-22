---
name: C++
description: C++ coding guidelines enforcing C++23 standard, Google C++ Style Guide, clean maintainable code without inline comments, and auto-scaling for project size.
---

# C++

**STANDARD & FEATURES**: Use C++23 standard and features. Prefer modern C++ idioms.

**CODING STYLE**: Strictly follow Google C++ Style Guide (https://google.github.io/styleguide/cppguide.html). Use clang-format with Google style.

**CODING PRINCIPLES**:
- Code must be clean, concise, human-readable, and maintainable.
- No inline comments allowed. Explain code changes in commit messages only.
- Use `using` declarations, `namespace` aliases, `void` parameters explicitly for readability without namespace pollution.
- Auto-scale: For small projects, avoid overkill/overengineering. Use simple solutions unless complexity is justified.

**DETERMINISTIC APPLICATION**:
- Always apply Google style rules first.
- For conflicts between principles, prioritize maintainability and readability.
- Structure code with clear separation of concerns, minimal dependencies.

## Usage

Activate this skill when writing, modifying, or reviewing C++ code. Ensures consistent, high-quality C++ development adhering to specified standards and principles.

## Steps

1. **Set Standard**: Compile with C++23 (`-std=c++23`). Use C++23 features like modules, concepts, ranges when beneficial.
2. **Apply Style**: Format code with clang-format using Google style. Follow naming conventions (e.g., `CamelCase` for types, `snake_case` for variables).
3. **Code Principles**: Write clean, concise code. Avoid inline comments; document via commits. Use `using namespace std::literals;` for literals, `namespace fs = std::filesystem;` for aliases.
4. **Auto-Scale**: For small projects (<1000 LOC), use simple structs/classes. For larger, consider design patterns but avoid premature abstraction.
5. **Verify**: Ensure code compiles cleanly, passes style checks, and is readable without comments.
