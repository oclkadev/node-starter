<div align="center">
  <img src="https://oclka.dev/images/logo.svg" alt="Logo" width="100" />
  <h1>Node Starter</h1>
  <p>Fast TS starter for Node.js libraries and CLI tools.</p>
</div>

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
├── src/
│   └── index.ts         # Entry point
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
├── tsconfig.json        # TypeScript configuration
├── tsup.config.ts       # tsup build configuration
└── typedoc.json         # TypeDoc configuration
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
| `pnpm knip`          | Dead code detection                    |
| `pnpm gen:docs`      | Generate API docs with TypeDoc         |
| `pnpm commit`        | Interactive commit with commitizen     |

## License

[MIT](./LICENSE)
