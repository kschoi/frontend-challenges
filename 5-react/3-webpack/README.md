# my first webpack

## install

[공식문서](https://webpack.js.org/guides/getting-started/)를 참고하여 패키지와 파일을 추가합니다.

```
yarn init
```

```
yarn add react react-dom
```

```
yarn add webpack webpack-cli
```

## scripts

외부 라이브러리를 script 태그로 관리할 때 야기되는 문제점을 코드를 통해 살펴보고, webpack으로 번들링할 때의 이점을 생각해볼 수 있어요.

```
yarn build
```

```
yarn clean
```

## webpack.config.js

프로젝트 루트에 webpack.config.js 파일을 생성하고, webpack 설정을 파일로 관리할 수 있습니다.

```
webpack --config webpack.config.js
// webpack은 webpack.config.js 파일이 존재한다면 기본 설정 파일로 사용하므로 --config는 생략될 수 있습니다.
```
