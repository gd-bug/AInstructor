# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-01-22

### Added
- **C++ Skill**: Brought in a brand new skill to help with clean, modern C++ development on Windows, sticking to native APIs and no external libs – perfect for generating code that's ready to commit.
- **Troubleshooter Skill**: Added a handy skill that guides you through fixing build and runtime errors with a solid 6-step process, keeping things native and integrated with commits.
- **Skill Benchmarks Table**: Added a table in the README benchmarking our Cline skills on lost in the middle and instruction fatigue to show their effectiveness.
- **Comprehensive Project Docs**: Expanded the README to naturally explain the project and dive into all the Cline skills available.
- **Enhanced Gitignore**: Beefed up the .gitignore to cover more ground for Node.js projects.

### Changed
- **README Updates**: Made the whole README more conversational and added descriptions for all Cline skills, plus updated the Cline Integration section.
- **Commit Skill Refinements**: Polished the commit skill docs with AI-optimized modes, better workflows, and dynamic scopes.
- **Commitlint Enhancements**: Tightened up the commitlint rules for even stricter validation to keep commits in line.
- **C++ Skill Tweaks**: Updated the C++ skill with specific Windows architect guidelines for better code generation.

### Fixed
- **Test Script Issue**: Fixed the test script to avoid any hiccups with husky hooks during setup.

## [1.0.0] - 2026-01-21

### Added

- Initial project setup with husky and commitlint for enforcing atomic conventional commits
- Comprehensive Commit skill documentation for Cline, including 5-step workflow, absolute rules, troubleshooting guide, and quick reference checklist
- Cheatsheet with commit message formats, type options, common scopes, breaking change methods, and validation examples
- Strict commitlint configuration requiring scope, detailed body, and proper header patterns
- Project template structure including README, LICENSE, .gitignore, and package.json with necessary dependencies