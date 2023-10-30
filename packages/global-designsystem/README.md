# global-designsystem

프로덕트의 베이스가 되는 컴포넌트 라이브러리입니다.  
프로덕트별 디자인 시스템은 이 디자인 시스템을 상속받아 작업하게 됩니다.

## Install

```bash
yarn add @lookatourdesignsystem/global-designsystem              // 최신버전 인스톨
yarn add @lookatourdesignsystem/global-designsystem@0.2.0        // 특정버전 인스톨
```

## Command

combine/packages/global-designsystem 위치에서  
`yarn build` : rollup 빌드  
`yarn cy:open` : cypress 테스트 화면 오픈  
`yarn test` : cypress 테스트  
`yarn storybook` : storybook 오픈  
`yarn build-component` : index-origin.ts 기반으로 index.ts의 내용 자동생성

## Directory

```text
├── .storybook                          // storybook 설정 폴더
│    ├── main.js                        // storybook main 스트립트
│    ├── manager.js                     // storybook manager 영역 스트립트
│    ├── preview-body.html              // storybook 실행전 html 영역 커스텀 스트립트
│    └── preview.js                     // storybook 실행 전  스트립트
│
├── cypress                             // cypress 설명 폴더
│    ├── download
│    ├── fixtures
│    ├── integration
│    └── ...
│
├── src
│    ├── assets                         // assets 폴더
│    │     ├── fonts
│    │     ├── icons
│    │     └── images
│    │
│    ├── hooks
│    │  ├── components                  // 컴포넌트 별 hook
│    │  ├── useBreakpoints              // breakpoints hook
│    │  └── useTheme                    // theme 관련 hook
│    │
│    ├── modules                        // foundation modules
│    │     ├── animation.ts
│    │     ├── breakpoints.ts
│    │     └── ...
│    │
│    ├── providers                      // Context api 관련 Provider
│    │     ├── ContainerModal
│    │     ├── Progress
│    │     └── ...
│    │
│    ├── stories
│    │     ├── components               // 컴포넌트 폴더
│    │     │       ├── Accordion
│    │     │       └── ...
│    │     └── foundation               // foundation 컴포넌트
│    │            ├── Color
│    │            └── ...
│    ├── types
│    │      └── index.ts // type 모음
│    │
│    │
│    ├── custom.d.ts                    // Typescript 커스텀 파일
│    ├── index-origin.ts                // index.ts 베이스 파일
│    ├── index.css
│    ├── index.ts
│    └── react-app-env.d.ts             // index.ts 베이스 파일
│
├── .gitignore                          // Git 제외 규칙 설정 파일
├── .prettierignore                     // Prettier 제외 규칙 설정 파일
├── .prettierrc                         // Prettier 설정 파일
├── build-component.js                  // index.ts의 내용 자동생성을 위한 스크립트
├── craco.config.js                     // cra 설정 파일
├── cypress.json                        // cypress 설정 파일
├── package.json                        // 프로젝트 정보 및 의존성 관리 파일
├── postcss.config.js                   // postcss 설정 파일
├── rollup.config.js                    // rollup 설정 파일
├── tsconfig.json                       // Typescript 설정 파일
└── yarn.lock                           // 패키지 잠금 파일
```
