---
name: Commit
description: Automatically enforce atomic commits (one logic=one commit) and conventional commit formatting for all git operations in the project
---
# Commit
## Instructions
When performing git commits, the AI agent must always follow these rules to ensure consistent, high-quality commit messages:
- **Atomic Commits**: Each commit must contain only one logical change. If staged changes include multiple logical changes, create separate commits for each. Avoid bundling unrelated changes together.
- **Task Analysis**: If the current task involves multiple logical changes, the AI agent must perform separate commits for each logical change, ensuring atomicity even if the user did not specify separate commits.
- **Conventional Commits Standard**: Must follow the conventional commits specification at https://www.conventionalcommits.org/en/v1.0.0/
- **Custom Format**:
  ```
  type(scope): description

  body

  optional footer(s)
  ```
- **Required Fields**:
  - `type`: Must be accurate and follow conventional types (e.g., `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`)
  - `scope`: Required, must be accurate and enclosed in parentheses, representing the affected component or module
  - `description`: Must be clear, concise, limited to 72 characters maximum, and start with a lowercase letter
- **Body**: Required and must be narrative explanation detailing:
  - What the change accomplishes
  - Why the change is necessary
  - Any relevant context or implications
- **Footer**: Optional, used for:
  - Breaking changes: `BREAKING CHANGE: description`
  - Issue references: `Closes #123`, `Fixes #456`
  - Other metadata as needed
## Usage
This skill should be activated automatically for tasks that involve git operations, especially when multiple changes are possible, to enforce atomic commits and conventional commit formatting.
## Steps
1. Analyze the staged changes to understand the logical scope and impact
2. Determine the appropriate `type` based on the nature of changes
3. Identify the correct `scope` representing the affected component
4. Craft a clear `description` within 72 characters
5. Write a detailed `body` explaining what and why
6. Add `footer` entries if applicable (breaking changes, issue references)
7. Execute the commit with the properly formatted message
8. Execute the commit using multiple -m flags for multiline messages in Windows cmd.exe: git commit -m "type[scope]: description" -m "" -m "body content" -m "additional body lines if needed" -m "footer"
## Reminder
`You must strictly adhere to this skill and never create commits that violate these rules.`