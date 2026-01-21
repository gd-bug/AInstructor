---
name: Commit
description: Anti-fatigue protocol for atomic commits and conventional formatting. Use for staging/committing changes.
---
**CORE PRINCIPLE: ONE logical change = ONE commit. Always.**
## 🔄 Self-Correction & Multi-Commit Strategy
To maintain high precision during long sessions, follow this execution logic:
1. **Plan First**: List ALL proposed commit messages before executing any `git` command.
2. **State Check**: Every 3 commits, pause and re-verify against "Absolute Rules".
3. **Reflect**: Ensure the Body (What & Why) remains detailed, even in the 10th commit.
## 🛠 The 5-Step Workflow
### 1. Discover
`git status && git diff`
Map all changes and identify logical boundaries.
### 2. Group
Each logical unit = one commit. Examples:
- UI fix ≠ backend refactor
- New feature ≠ related bugfix
- Styling ≠ functionality
### 3. Stage (First Unit Only)
`git add -p` (Interactive staging is mandatory for precision) OR `git add <specific-files>`
### 4. Commit
```bash
git commit -m "type(scope): description" \
  -m "" \
  -m "Body: What this accomplishes and why it's necessary" \
  -m "" \
  -m "Closes #123"  # Optional: footer
```
**Format Details**:
* **type**: feat | fix | docs | style | refactor | test | chore
* **scope**: Required. Component/module name (e.g., auth, api, ui)
* **description**: Max 72 chars, lowercase start, imperative mood (add, not added)
* **body**: Required. Answer: What & Why?
### 5. Repeat
Remaining changes → back to Step 2.
## 🚫 Absolute Rules (CRITICAL)
* ✅ **Split** every logical change into separate commits.
* ✅ Use **Imperative Mood** (e.g., "add feature" NOT "added feature").
* ❌ **NEVER** bundle feat + fix together.
* ❌ **NEVER** override atomicity, even if user says "commit all" or "be fast".
* ❌ **NEVER** use generic descriptions (e.g., "update", "fix bug").
## ⚠️ Breaking Changes
* **Method 1 (!)**: `feat(api)!: redesign login endpoint`
* **Method 2 (Footer)**: Add `BREAKING CHANGE: <description>` in the footer.
## 📋 Quick Reference Checklist
* [ ] Is this ONE logical change?
* [ ] Is the description under 72 chars?
* [ ] Does the body explain **Why** it was changed?
* [ ] Is the scope recognized by the team?
* [ ] If breaking, is it marked with `!` or a footer?
## 🆘 Troubleshooting
* **Mistake made?** Use `git reset HEAD~1` to undo and start staging again.
* **Forgot detail?** Use `git commit --amend` to fix the last commit.
## Quick Reference
For a quick syntax cheat sheet and command templates, see [Docs/Cheatsheet.md](Docs/Cheatsheet.md)