# Commit: Quick Reference

## 🤖 AI Templates
For automated commit message generation:
- **Type Detection**: Auto-analyze diff for type (e.g., adds new code → "feat"; fixes code → "fix"; changes style → "style").
- **Scope Inference**: Pull from file paths (e.g., `src/api/` → scope "api"; `components/ui/` → "ui").
- **Description Auto-Generation**: Create imperative phrase from change summary (e.g., "add user auth" from added auth function).
- **Body Enhancement**: Append "What & Why" based on diff context (e.g., "Implements secure login to prevent unauthorized access").
- **Batch Mode**: For multi-changes, apply templates sequentially.

Example AI-Generated Commit:
```bash
git commit -m "feat(auth): add secure login" \
  -m "" \
  -m "Body: Implements OAuth2 flow for user authentication, enhancing security."
```

## Type Options
```
feat      - New feature
fix       - Bug fix
docs      - Documentation
style     - Formatting, whitespace
refactor  - Code reorganization (no behavior change)
test      - Add/modify tests
chore     - Build, dependencies, tooling
```

---

## Basic Format Template
```bash
git commit -m "type(scope): description" \
  -m "" \
  -m "Body: what and why"
```

---

## Full Format (with footer)
```bash
git commit -m "type(scope): description" \
  -m "" \
  -m "Body: what this accomplishes and why it's necessary" \
  -m "" \
  -m "Closes #123"
```

---

## Common Scopes
```
auth          - Authentication module
api           - API endpoints
database      - Database operations
navbar        - Navigation bar
modal         - Modal dialogs
form          - Form components
config        - Configuration files
docs          - Documentation
tests         - Test files
ui            - UI components
ci            - CI/CD pipeline
build         - Build process
```

## Dynamic Scopes
AI can dynamically infer scopes from project structure:
- Scan file paths (e.g., `lib/auth/` → "auth"; `src/components/` → "ui").
- Analyze package.json for modules (e.g., dependencies related to "database" → "database").
- Team-customizable: Add project-specific scopes via config (e.g., for monorepos).
Example: For file `packages/api/src/routes.js`, infer scope "api".

---

## Breaking Changes

### Method 1: ! Syntax
```bash
git commit -m "feat(auth)!: redesign login endpoint"
```

### Method 2: Footer
```bash
git commit -m "feat(api): change endpoint structure" \
  -m "" \
  -m "Endpoint moved for consistency." \
  -m "" \
  -m "BREAKING CHANGE: Old /auth endpoint removed"
```

---

## Issue References
```
Closes #123      - Closes the issue
Fixes #456       - Fixes the issue
Refs #789        - References the issue
```

---

## Imperative Mood Examples

✅ **Correct**:
- add feature
- fix bug
- refactor logic
- update styles
- remove duplicates

❌ **Incorrect**:
- added feature
- fixed bug
- refactored logic
- updated styles
- removed duplicates

---

## Description Rules

- **Max 72 characters**
- **Lowercase start**: `add feature` (not `Add feature`)
- **No period at end**: `add auth` (not `add auth.`)
- **Imperative mood**: `add` (not `adds` or `added`)

---

## Multi-Commit Workflow Checklist

For each logical change:

- [ ] Run `git status && git diff` (discover)
- [ ] Identify logical unit (group)
- [ ] Stage ONLY this unit: `git add -p` (stage)
- [ ] Commit with proper format (commit)
- [ ] Repeat with remaining changes (repeat)

---

## Common Patterns

### Fix + Feature = TWO commits
```bash
# Commit 1: Fix existing bug
git commit -m "fix(navbar): correct spacing"

# Commit 2: Add new feature
git commit -m "feat(navbar): add dark mode toggle"
```

### Refactor + Tests = TWO commits
```bash
# Commit 1: Refactor code
git commit -m "refactor(database): simplify queries"

# Commit 2: Add tests for changes
git commit -m "test(database): add integration tests"
```

### Breaking Change + Migration = TWO commits
```bash
# Commit 1: Breaking change
git commit -m "feat(api)!: redesign endpoint" \
  -m "" \
  -m "BREAKING CHANGE: endpoint structure changed"

# Commit 2: Update docs
git commit -m "docs(api): update endpoint documentation"
```

---

## Quick Validation

Before committing, ask yourself:

1. ✅ Is this ONE logical change?
2. ✅ Does description use imperative mood?
3. ✅ Is description under 72 characters?
4. ✅ Does body explain what & why?
5. ✅ Are breaking changes marked?
6. ✅ Are issue references included (if applicable)?

---

## Troubleshooting

**"I already bundled changes together"**
- Use `git reset HEAD~1` to undo last commit
- Run `git add -p` to separate changes
- Recommit each logical unit separately

**"I forgot to include issue reference"**
- Use `git commit --amend` to edit last commit
- Add the issue reference

**"I'm unsure if changes are logical units"**
- Ask: Can I describe this change in one sentence?
- If yes: one commit
- If no: multiple commits needed

---

## Related Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Add Patch](https://git-scm.com/docs/git-add#patch-mode)
- [Writing Better Commit Messages](https://chris.beams.io/posts/git-commit/)
