## 🌟 Project setup 🚀
## 1. create next app
### 1-1. yarn install *インストールしていない場合
    npm install --global yarn
    yarn --version
### 1-2.  create-next-app
    npx create-next-app .
#### Node.js version 10.13以降が必要です。 -> ターミナル `node -v`でver確認出来ます。
### 1-3.  Redux toolkit のインストール
    yarn add @reduxjs/toolkit react-redux
    yarn add -D @types/react-redux
### 1-4.  各種moduleのインストール
    yarn add firebase universal-cookie @heroicons/react
    yarn add react-query react-query-devtools graphql graphql-request
### 1-5.  prettierの設定 : settingsでRequire Config + Format On Saveにチェック
    touch .prettierrc
~~~
{
    "singleQuote": true,
    "semi": false
}
~~~ 
## 2. TypeScript の導入
https://nextjs.org/learn/excel/typescript/create-tsconfig
### 2-1. 空のtsconfig.json作成
    touch tsconfig.json
### 2-2. 必要moduleのインストール
    yarn add -D typescript @types/react @types/node
### 2-3. 開発server起動
    yarn dev
### 2-4. _app.js, index.js -> tsx へ拡張子変更
### 2-5. AppProps型追記
~~~
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
~~~

## 3. Tailwind CSS の導入
https://tailwindcss.com/docs/guides/nextjs
### 3-1. 必要moduleのインストール
    yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
### 3-2. tailwind.config.js, postcss.config.jsの生成
    npx tailwindcss init -p
### 3-3. tailwind.config.jsのpurge設定追加
~~~
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {opacity: ["disabled"]},
    },
    plugins: [],
}
~~~
### 3-4. globals.cssの編集
~~~
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~