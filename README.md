<div align="center">
  <img src="https://oclka.dev/images/logo.svg" alt="Logo" width="100" />
  <h1>Node Starter</h1>
  <p>Fast TS starter for Node.js libraries and CLI tools.</p>
</div>

[![Quality gate status](https://sonarcloud.io/api/project_badges/measure?project=oclkadev_node-starter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=oclkadev_node-starter)
[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Foclkadev%2Fnode-starter%2Fmain)](https://dashboard.stryker-mutator.io/reports/github.com/oclkadev/node-starter/main)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=oclkadev_node-starter&metric=coverage)](https://sonarcloud.io/summary/new_code?id=oclkadev_node-starter)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=oclkadev_node-starter&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=oclkadev_node-starter)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=oclkadev_node-starter&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=oclkadev_node-starter)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=oclkadev_node-starter&metric=bugs)](https://sonarcloud.io/summary/new_code?id=oclkadev_node-starter)
![CI](https://github.com/oclkadev/node-starter/actions/workflows/ci.yml/badge.svg)
![Release](https://github.com/oclkadev/node-starter/actions/workflows/release.yml/badge.svg)

## Features

- **TypeScript** — strict mode with advanced flags (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`)
- **Dual build** — CJS + ESM output with type declarations via [tsup](https://tsup.egoist.dev/)
- **Linting** — [ESLint](https://eslint.org/) flat config with [typescript-eslint](https://typescript-eslint.io/), [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn), [sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs), [perfectionist](https://perfectionist.dev/), [tsdoc](https://github.com/microsoft/tsdoc)
- **Formatting** — [Prettier](https://prettier.io/) with eslint-config-prettier integration
- **Spell check** — [cspell](https://cspell.org/) for TS, MD, JSON, YAML files
- **Markdown lint** — [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)
- **Dead code detection** — [Knip](https://knip.dev/)
- **Secret scanning** — [gitleaks](https://github.com/gitleaks/gitleaks)
- **Size limits** — [size-limit](https://github.com/ai/size-limit) with esbuild preset
- **Publish checks** — [publint](https://publint.dev/) + [@arethetypeswrong/cli](https://github.com/arethetypeswrong/cli)
- **Git hooks** — [husky](https://typicode.github.io/husky/) with [lint-staged](https://github.com/lint-staged/lint-staged)
- **Commit conventions** — [commitlint](https://commitlint.js.org/) + [commitizen](https://commitizen-tools.github.io/cz-cli/)
- **Versioning** — [Changesets](https://github.com/changesets/changesets) for automated versioning and changelogs
- **API docs** — [TypeDoc](https://typedoc.org/) for TSDoc-based API documentation generation
- **CLI** — [Commander](https://github.com/tj/commander.js) with shared options (quiet, verbose, dry-run), centralized I/O layer ([picocolors](https://github.com/nicktomlin/picocolors), [figures](https://github.com/sindresorhus/figures), [text-table](https://github.com/substack/text-table)), and typed error handling (`AppError` with error codes)

## CI/CD

| Workflow                          | Description                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **CI** (`ci.yml`)                 | Type checking, linting, unit tests with coverage, secrets scanning, build, E2E tests, size limit, and mutation testing |
| **Release** (`release.yml`)       | Automated versioning and publishing via Changesets with provenance                                                     |
| **CodeQL** (`codeql.yml`)         | Static security analysis with weekly scheduled scans                                                                   |
| **Docs** (`docs.yml`)             | TypeDoc API documentation generation and deployment to GitHub Pages                                                    |
| **Stale** (`stale.yml`)           | Auto-close inactive issues and PRs after 30 days                                                                       |
| **Size Limit** (`size-limit.yml`) | Bundle size diff comment on pull requests                                                                              |
| **Dependabot** (`dependabot.yml`) | Weekly dependency updates for npm and GitHub Actions with grouped PRs                                                  |

## Prerequisites

- [Node.js](https://nodejs.org/) >= 24
- [pnpm](https://pnpm.io/) >= 11

## Getting started

```bash
# Clone the repository
git clone https://github.com/oclkadev/node-starter.git
cd node-starter

# Install dependencies
pnpm install

# Set up git hooks
pnpm prepare
```

## Usage

### Development

```bash
# Run in development mode with tsx
pnpm dev

# Build for production
pnpm build
```

### CLI

```bash
# Run the CLI
pnpm dev

# Run a specific command
pnpm dev test

# Verbose output
pnpm dev test -V

# Quiet mode (suppress all output except errors)
pnpm dev test -q

# Dry-run mode
pnpm dev test -n

# Show version
pnpm dev -v
```

### Quality checks

```bash
# Run all checks (types, lint, spell, md, secrets, build, size, publint)
pnpm check:all

# Run fast checks only (types, lint, knip)
pnpm check:fast

# Type checking
pnpm check:types

# Linting
pnpm lint
pnpm lint:fix

# Spell check
pnpm check:spell

# Secret scanning
pnpm check:secrets

# Build verification (publint + attw)
pnpm check:build

# Size check
pnpm check:size
```

### Testing

```bash
# Run all tests with coverage
pnpm test:coverage

# Run e2e tests only
pnpm test:e2e

# Run mutation testing with Stryker
pnpm test:mutate

# Focus on a single file (coverage + mutation)
pnpm test:focus commands/test/handler

# Watch mode
pnpm test:watch
```

### Formatting

```bash
# Format all files with Prettier
pnpm format
```

### Committing

```bash
# Interactive conventional commit via commitizen
pnpm commit

# Or use the cc skill for AI-generated commit messages
```

### Versioning

```bash
# Create a changeset
pnpm changeset

# Version bump based on changesets
pnpm changeset version
```

### API documentation

```bash
# Generate API docs from TSDoc comments
pnpm gen:docs
```

Output is generated in `docs/api/`.

## Project structure

```text
node-starter/
├── .changeset/          # Changesets configuration and entries
├── .github/             # GitHub templates and workflows
├── .husky/              # Git hooks (pre-commit, commit-msg, pre-push)
├── docs/                # Documentation
├── scripts/             # Utility scripts (test-focus)
├── src/
│   ├── commands/        # CLI commands (Commander)
│   │   ├── index.ts     # Root command and runCli()
│   │   ├── options.ts   # Shared option definitions
│   │   └── test/        # Test command
│   ├── core/            # Core utilities
│   │   ├── errors/      # AppError, ErrorCode, error helpers
│   │   └── helpers/     # String helpers
│   ├── ui/              # I/O layer (io singleton)
│   └── index.ts         # Entry point
├── tests/               # Test setup, helpers, and fixtures
│   ├── e2e/             # E2E test helpers (run-cli)
│   ├── unit/            # Unit test helpers (mock-tty)
│   └── setup.ts         # Global test setup (console mocks)
├── .editorconfig        # Editor configuration
├── .gitignore
├── .markdownlint.json   # Markdownlint configuration
├── .npmrc               # npm configuration
├── .nvmrc               # Node version
├── .prettierignore      # Prettier ignore patterns
├── .prettierrc          # Prettier configuration
├── .size-limit.json     # Size limit configuration
├── commitlint.config.mjs # Commitlint configuration
├── cspell.config.mjs    # Spell check configuration
├── eslint.config.mjs    # ESLint flat config
├── ignores.mjs          # Shared ignore patterns for ESLint
├── knip.config.mjs      # Knip configuration
├── package.json
├── pnpm-workspace.yaml  # pnpm workspace configuration
├── stryker.config.mjs   # Stryker mutation testing config
├── test-exclude.mjs     # Shared test exclusion patterns
├── tsconfig.json        # TypeScript configuration
├── tsup.config.ts       # tsup build configuration
├── typedoc.json         # TypeDoc configuration
└── vitest.config.mjs    # Vitest configuration
```

## Scripts

| Script               | Description                            |
| -------------------- | -------------------------------------- |
| `pnpm build`         | Build with tsup (CJS + ESM + types)    |
| `pnpm dev`           | Run with tsx in development mode       |
| `pnpm lint`          | Lint with ESLint                       |
| `pnpm lint:fix`      | Lint and auto-fix with ESLint          |
| `pnpm lint:md`       | Lint and fix Markdown files            |
| `pnpm format`        | Format all files with Prettier         |
| `pnpm check:all`     | Run all quality checks                 |
| `pnpm check:fast`    | Run types + lint + knip                |
| `pnpm check:types`   | Type check with tsc                    |
| `pnpm check:spell`   | Spell check with cspell                |
| `pnpm check:secrets` | Secret scan with gitleaks              |
| `pnpm check:build`   | Build verification with publint + attw |
| `pnpm check:size`    | Size check with size-limit             |
| `pnpm test:coverage` | Run all tests with V8 coverage         |
| `pnpm test:e2e`      | Run e2e tests only                     |
| `pnpm test:mutate`   | Run Stryker mutation testing           |
| `pnpm test:focus`    | Focus coverage + mutation on a file    |
| `pnpm test:watch`    | Run tests in watch mode                |
| `pnpm knip`          | Dead code detection                    |
| `pnpm gen:docs`      | Generate API docs with TypeDoc         |
| `pnpm commit`        | Interactive commit with commitizen     |

## License

[MIT](./LICENSE)
