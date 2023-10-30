# icons-library

공통 아이콘 라이브러리입니다.

## Install

```bash
yarn add @lookatourdesignsystem/icons-library // 최신버전 설치
yarn add @lookatourdesignsystem/icons-library@1.0.6 // 특정버전 설치
```

## Command

combine/packages/icons-library 위치에서  
`yarn build` : rollup 빌드  
`yarn build-component` : src/icons 경로에 아이콘 컴포넌트를 자동생성 후 index.ts파일 작성

## Directory

```
├── dist                         // 빌드파일
├── src
│   ├── assets
│   │     └── icons
│   │           ├── image_icon   // 이미지 아이콘
│   │           └── system_icon  // 시스템 아이콘
│   └── icons                    // assets 기준으로 생성된 아이콘 컴포넌트들
├── .gitignore                   // git push 안되도록 하는 목록
├── build-component.cjs           // 아이콘 컴포넌트 생성 스크립트
├── package.json                 // dependencies
├── rollup.config.js             // rollup 설정파일
├── tsconfig.json                // Typescript 설정파일
```
