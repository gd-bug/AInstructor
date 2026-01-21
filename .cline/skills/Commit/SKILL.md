---
name: Commit
description: Enforce atomic commits and conventional commit formatting. Use when staging changes or committing. Decomposes multi-logical changes into separate atomic commits automatically. All commits must follow conventional commit standard.
---

# Commit

**ONE logical change = ONE commit. Always.**

---

## The 5-Step Workflow

### 1. Discover
```bash
git status && git diff
```
Map all changes and identify logical boundaries.

### 2. Group
Each logical unit = one commit. Examples:
- UI fix ≠ backend refactor
- New feature ≠ related bugfix
- Styling ≠ functionality

### 3. Stage (First Unit Only)
```bash
git add -p          # Interactive, recommended
# OR
git add <specific-files>
```

### 4. Commit
```bash
git commit -m "type(scope): description" \
  -m "" \
  -m "What this accomplishes and why it's necessary"
```

**Types**: feat | fix | docs | style | refactor | test | chore

**Scope**: Required. Component/module affected.

**Description**:
- Max 72 characters
- Lowercase start
- Imperative mood (add, fix, refactor—not added, fixed, refactored)

**Body**: Required. Answer: What & Why?

### 5. Repeat
Remaining changes → back to Step 2.

---

## Examples

```bash
# Fix
git commit -m "fix(navbar): correct mobile margin spacing" \
  -m "" \
  -m "Fixed margin overflow on mobile. Changed from 16px to 8px per design spec."

# Feature
git commit -m "feat(auth): add JWT authentication" \
  -m "" \
  -m "Users can now authenticate with tokens. Enables secure API access."

# Refactor
git commit -m "refactor(database): simplify connection pooling" \
  -m "" \
  -m "Reduced overhead and improved error handling. Backward compatible."
```

---

## Absolute Rules

- ✅ Split every logical change into separate commits
- ✅ Use imperative mood in descriptions
- ❌ NEVER bundle feat + fix together
- ❌ NEVER override atomicity, even if user says "commit all"
- Priority: Commit quality & history granularity > speed