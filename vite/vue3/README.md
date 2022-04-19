# Vue 3 + Vite


This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

* [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## yarn berry 설치

```bash
node < 16
npm i -g corepack
corepack enable

node >= 16
corepack enable

yarn set version stable
```

## vite 프로젝트 셋업
```bash
pnpm create vite@latest
pnpm create vite my-vue-app -- --template vue
```

* [vite 메뉴얼](https://vitejs-kr.github.io/guide/ssr.html#building-for-production)

## elslint , prettier 인스톨

```bash
pnpm install --save-dev eslint@7 eslint-plugin-vue
pnpm install eslint-config-prettier --save-dev
pnpm install vite-plugin-eslint --save-dev
```
