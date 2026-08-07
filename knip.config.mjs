const knipConfig = {
  $schema: 'https://unpkg.com/knip@6/schema.json',
  ignore: ['commitlint.config.mjs'],
  ignoreBinaries: ['gitleaks'],
  ignoreDependencies: ['@commitlint/config-conventional', 'gitleaks'],
  tags: ['-lintignore'],
};

export default knipConfig;
