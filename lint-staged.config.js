module.exports = {
  'package/**/*.{js,jsx,ts,tsx}': [
    (fileNames) => `npm run spellcheck ${fileNames.join(' ')}`,
    (fileNames) => `npm run lint --workspace=@astral/utils -- ${fileNames}`,
    () => 'npm run lint:types --workspace=@astral/utils',
  ],

  'pack/**/*.{js}': ['npm run lint --workspace=@astral/pack'],

  'PRTitleLinter/**/*.{js}': ['npm run lint --workspace=@astral/PRTitleLinter'],
};
