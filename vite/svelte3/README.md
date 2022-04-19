# Svelte + Vite

Sevelte Vite Template 설정 정리

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## yarn berry 설치

```bash
node < 16
npm i -g corepack
corepack enable

node >= 16
corepack enable

yarn set version stable
```

## svelte 설정

```bash
yarn create vite@latest
yarn create vite my-vue-app -- --template svelte

yarn add -D svelte-check
```

## editconfig 설정

```bash
# EditorConfig is awesome: https://EditorConfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```



## prettier 설치

```bash
yarn add -D prettier-plugin-svelte prettier
```
.prettierrc 설정

```json
{
  "plugins": ["prettier-plugin-svelte"],
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5"
}

```

package.json 설정

```json
{
  "scripts": {
    "format:check": "prettier --check --ignore-path .gitignore --plugin-search-dir=. ./**/*.{json,css,js,cjs,svelte}",
    "format:fix": "prettier --write --ignore-path .gitignore --plugin-search-dir=. ./**/*.{json,css,js,cjs,svelte}"
  }
}

```

## eslint 설정

```bash
yarn add -D eslint eslint-config-prettier eslint-plugin-svelte3
```

.eslintrc.js 설정 파일
```js
module.exports = {
 env: {
   browser: true,
   es2021: true,
   node: true,
 },
 extends: [
   'airbnb-base',
 ],
 parserOptions: {
   ecmaVersion: 13,
   sourceType: 'module',
 },
 plugins: [
   'svelte3',
 ],
 rules: {
 },
  overrides: [
   {
     files: ['*.svelte'],
     processor: 'svelte3/svelte3',
   },
 ],
};
```

vite-plugin-eslint vite.config.js 설정

```json
 defineConfig({
    plugins: [
     eslintPlugin({ fix: true })
    ],
 })
```


vscode 설정

```json
{
  "eslint.validate": [
    "svelte"
  ]
}
```

## stylelint 설정
```bash
yarn add -D stylelint stylelint-config-standard postcss-html stylelint-config-html stylelint-config-recess-order stylelint-config-prettier vite-plugin-stylelint
```

.stylelintrc 설정
```json
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-html",
    "stylelint-config-prettier"
  ]
}
```

vscode setting 설정

```json
{
  "stylelint.validate": [
    "css",
    "postcss",
    "svelte"
  ]
}
```

vite-plugin-stylelint vite.config.js 설정

```json
 defineConfig({
    plugins: [
      StylelintPlugin({
        fix: true,
        quite: true,
      })
    ],
 })
```


## postcss 설정
```bash
 yarn add -D postcss autoprefixer 
```

postcss.config.js 설정
```js
module.exports = {
  plugins: {
    autoprefixer: {},
  },
}
```


## lint-staged 설치

아래처럼 설치하면 lint-stage 기본 설정이 같이 된다

```bash
yarn mrm@2 lint-staged
yarn dlx mrm@2 lint-staged

```

package.json 설정


```json
  "lint-staged": {
    "*.(js,css,svelte)": "npm run fix:all"
  }
```

## npm run all 설치

npm run 다중 실행 설정

```bash
yarn add -D npm-run-all
```

package.json 설정

```json
   "lint:all": "run-s lint:eslint lint:stylelint lint:prettier",
   "fix:all": "run-s fix:eslint fix:stylelint fix:prettier",
```

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.
  `vite dev` and `vite build` wouldn't work in a SvelteKit environment, for example.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
