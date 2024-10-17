# Contributing to ZeroByte

Thank you for considering contributing to **ZeroByte**! We welcome all types of contributions, whether it's reporting bugs, suggesting new features, improving documentation, or writing code.

Please follow the guidelines outlined in this document to ensure a smooth collaboration process.

## Table of Contents
1. [How to Contribute](#how-to-contribute)
2. [Bug Reports & Feature Requests](#bug-reports--feature-requests)
3. [Development Workflow](#development-workflow)
   - [Fork & Clone the Repository](#fork--clone-the-repository)
   - [Working on Issues](#working-on-issues)
   - [Commit Guidelines](#commit-guidelines)
   - [Pull Request Guidelines](#pull-request-guidelines)
4. [Style Guidelines](#style-guidelines)

## How to Contribute

There are many ways to contribute to this project:
- Report bugs or suggest features by creating issues.
- Submit pull requests to fix bugs or add new features.
- Help improve the documentation.
- Review pull requests from other contributors.

If you're new to contributing, check out these helpful resources:
- [Open Source Guide](https://opensource.guide/how-to-contribute/)
- [First Timers Only](https://www.firsttimersonly.com/)


## Bug Reports & Feature Requests

### Reporting Bugs
If you discover a bug, create an issue and include:
- A clear and concise description of the bug.
- Steps to reproduce the bug.
- The expected behavior.
- Screenshots or logs, if possible.
  
### Suggesting Features
If you have a feature request:
- Provide a detailed description of the feature.
- Explain the problem it solves and how it benefits the project.

## Development Workflow

### Fork & Clone the Repository

1. Fork the repository to your GitHub account.
2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/zr0byte/zerobyte.git
   ```

3. Navigate into the project directory:

   ```bash
   cd 0byte
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

### Working on Issues

1. Check the open issues and assign yourself to one you want to work on.
2. Create a new branch for your work. Use a descriptive branch name:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes, and test them locally.

### Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) to keep a consistent git history.

Format your commit messages as follows:

- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation changes.
- **style**: Code style changes (formatting, missing semi-colons, etc.).
- **refactor**: Refactoring code without changing functionality.
- **test**: Adding or correcting tests.
- **chore**: Miscellaneous tasks such as updating build tools.

Example:

```bash
git commit -m "feat: add user login functionality"
```

### Pull Request Guidelines

1. Push your branch to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

2. Submit a pull request from your branch to the main repository's `main` branch.
3. In your pull request, provide a clear and concise description of your changes.
4. Wait for the project maintainers to review your code. Be open to feedback and make changes as requested.

## Style Guidelines

To maintain consistency across the codebase, please follow these style guidelines:

- **JavaScript/TypeScript**: We use [ESLint](https://eslint.org/) for linting. Run `npm run lint` to check your code.
- **CSS**: Follow [BEM methodology](http://getbem.com/) for class naming if you're writing pure CSS.
- **Commits**: Use [Conventional Commits](https://www.conventionalcommits.org/) format as explained above.

If you're unsure about a style or coding convention, check the existing code for examples.