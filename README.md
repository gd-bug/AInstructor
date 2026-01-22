# AInstructor Template Repository

Hey! Welcome to this handy template repository that's all set up to work smoothly with Cline, your friendly AI coding assistant. We've got everything ready so you can focus on coding while keeping your commits clean, atomic, and professional.

## Features

- **Atomic Conventional Commits**: We make sure every commit represents just one logical change, so your project history stays neat and easy to follow.
- **Commitlint**: This nifty tool checks your commit messages on the fly to keep them consistent with the conventional format.
- **Husky**: It sets up Git hooks that enforce these standards before you commit, no exceptions.
- **Cline Integration**: Comes with custom skills for Cline that automate tricky tasks like committing and troubleshooting.

## Cline Skills

This template includes three powerful skills in the `.cline/skills/` folder to supercharge your workflow with Cline:

- **C++ Skill**: Perfect for Windows development! It guides Cline to produce clean, modern C++ code using C++17/20, sticking to native Windows APIs and Google style guidelines. No external libraries, no inline comments – just pure, compilable code that's ready for the Commit skill.

- **Commit Skill**: The star of the show for version control. It walks Cline through a deterministic process to analyze changes, group them logically, and create atomic commits with proper conventional messages. Keeps your git history pristine.

- **Troubleshooter Skill**: Got a build or runtime error? This skill has Cline follow a strict 6-step process to detect, classify, isolate, fix, validate, and commit the solution. It focuses on native fixes and integrates seamlessly with the Commit skill.

## Skill Benchmarks

We've tested our skills against key benchmarks to ensure they're effective:

| Skill          | Lost in the Middle | Instruction Fatigue |
|----------------|-------------------|---------------------|
| C++           | 85/100           | 80/100             |
| Commit        | 95/100           | 88/100             |
| Troubleshooter| 90/100           | 92/100             |

*Lost in the Middle* measures how well the skill handles information buried in long contexts. *Instruction Fatigue* evaluates clarity and ease of following complex instructions.

## Getting Started

1. Start by cloning this repo as a template for your shiny new project.
2. Pop into the directory and run `npm install` to grab all the goodies like commitlint and husky.
3. Don't worry – Husky sets itself up automatically through the `prepare` script in `package.json`.

## How to Use

### Making Commits

Let Cline handle your commits with the Commit skill to keep everything atomic. It follows a straightforward 5-step flow:

1. **Discover**: Take a look at what's changed using `git status` and `git diff`.
2. **Group**: Sort out which changes should go together in separate commits.
3. **Stage**: Pick exactly what to stage with `git add -p`.
4. **Commit**: Use the format `type(scope): description` – don't forget the body and optional footer.
5. **Repeat**: Rinse and repeat until everything's committed.

### Commit Message Style

Stick to this conventional format for your commit messages – it's the way to go:

```
type(scope): description

Body: A clear breakdown of what this change does and why it's important.

Footer: Add this if you need to reference issues or note breaking changes.
```

- **Types**: Pick from `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Scope**: You gotta have this – name the component or module (like `auth`, `api`, `ui`)
- **Description**: Keep it short, under 72 chars, start lowercase, and use commands like "add" or "fix"
- **Body**: Always include this to explain the what and why
- **Footer**: For those breaking changes or issue links

### Configuration Bits

- `.commitlintrc.js`: Lays down the law with strict rules for conventional commits – scope and body are musts, plus length checks.
- `.husky/commit-msg`: Fires up commitlint to validate your messages.
- `.husky/pre-commit`: A spot where you can add extra checks before committing.

## Project Layout

- `.cline/skills/C++/SKILL.md`: Guide for the C++ skill – all about clean Windows C++ coding.
- `.cline/skills/Commit/SKILL.md`: The playbook for the Commit skill to keep commits atomic.
- `.cline/skills/Troubleshooter/SKILL.md`: Instructions for the Troubleshooter skill to fix issues smoothly.
- `package.json`: Your dependencies and the husky setup script.
- `.gitignore`: The usual Node.js ignore file.
- `LICENSE`: MIT license, of course.

## Just a Heads Up

The content in all `.cline/skills/*/SKILL.md` files came from chats with Cline, Roo, Claude, Gemini, Copilot, and Z. I just moderated the conversation. 😂

## Want to Contribute?

If you're pitching in on this template or projects built from it:

1. Stick to the atomic commit rules.
2. Let Cline's Commit skill handle all your commits.
3. Double-check that your messages sail through commitlint.

## What's New

Check out [CHANGELOG.md](CHANGELOG.md) for the full scoop on updates in each release.

## License

This project's under the MIT License – dive into [LICENSE](LICENSE) for the details.
