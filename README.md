# AInstructor Template Repository

This repository serves as a template for projects designed to work seamlessly with Cline, an AI-powered coding assistant. It comes pre-configured with tools and practices to ensure high-quality, atomic conventional commits.

## Features

- **Atomic Conventional Commits**: Enforces the principle of one logical change per commit, maintaining a clean and understandable project history.
- **Commitlint**: Automatically validates commit messages against the conventional commit format to ensure consistency.
- **Husky**: Runs Git hooks to enforce commit standards before commits are allowed.
- **Cline Integration**: Includes a specialized Commit skill that handle the atomic commit process automatically.

## Commit Skill VS AI Model Benchmark

| AI Model       | Lost in Middle | Instruction Fatigue | Alignment/Drift | Consistency | Determinism | Overall   |
|----------------|----------------|---------------------|-----------------|-------------|-------------|-----------|
| Claude         | 92             | 95                  | 88              | 94          | 89          | 91.6      |
| ChatGPT        | 96             | 97                  | 98              | 95          | 96          | 96.4      |
| Copilot        | 94             | 91                  | 92              | 90          | 95          | 92.4      |
| Deepseek       | 70             | 65                  | 75              | 85          | 60          | 71.0      |
| Devstral       | 70             | 75                  | 85              | 90          | 80          | 80.0      |
| Gemini         | 88             | 92                  | 95              | 90          | 94          | 91.8      |
| Grok           | 85             | 92                  | 95              | 98          | 96          | 93.2      |
| Kat Coder Pro  | 65             | 71                  | 78              | 85          | 82          | 76.2      |
| Qwen           | 85             | 45                  | 70              | 80          | 75          | 71.0      |
| Z              | 85             | 75                  | 92              | 98          | 82          | 86.4      |

Higher: Better

## Setup

1. Clone this repository as a template for your new project.
2. Run `npm install` to install the necessary dependencies, including commitlint and husky.
3. Husky will be automatically prepared via the `prepare` script in `package.json`.

## Usage

### Committing Changes

Use Cline's Commit skill to create commits that adhere to atomic principles. The skill provides a structured 5-step workflow:

1. **Discover**: Review changes with `git status` and `git diff`.
2. **Group**: Identify logical units for separate commits.
3. **Stage**: Use `git add -p` for precise staging.
4. **Commit**: Follow the format `type(scope): description` with required body and optional footer.
5. **Repeat**: Continue for remaining changes.

### Commit Message Format

Commit messages must follow the conventional format:

```
type(scope): description

Body: Detailed explanation of what this change accomplishes and why it's necessary.

Footer: Optional references to issues or breaking changes.
```

- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Scope**: Required. Component or module name (e.g., `auth`, `api`, `ui`)
- **Description**: Max 72 characters, lowercase start, imperative mood
- **Body**: Required. Explains what and why
- **Footer**: For breaking changes or issue references

### Configuration

- `.commitlintrc.js`: Defines strict rules for conventional commits, including required scope, body, and length limits.
- `.husky/commit-msg`: Runs commitlint on commit messages.
- `.husky/pre-commit`: Can be customized for additional pre-commit checks.

## Project Structure

- `.cline/skills/Commit/SKILL.md`: Documentation for the Commit skill used with Cline.
- `.cline/skills/Commit/Docs/Cheatsheet.md`: Quick reference guide for commit formats and best practices.
- `package.json`: Includes dependencies and husky prepare script.
- `.gitignore`: Standard Node.js gitignore.
- `LICENSE`: MIT license.

## Disclaimer

The content in `.cline/skills/Commit/SKILL.md` is the result of discussions using Cline, Roo, Claude, Gemini, Copilot, and Z. I (the user) acted only as a moderator. 😂

## Contributing

When contributing to this template or projects using it:

1. Follow the atomic commit principles.
2. Use Cline's Commit skill for all commits.
3. Ensure commit messages pass commitlint validation.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes in each release.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
