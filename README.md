# 디자인 시스템 : global-designsystem

## 프로젝트 소개

- 이 프로젝트는 개인 포트폴리오 용도로 개발된 [@lookatourdesignsystem](https://github.com/lookatourdesignsystem) 의 프로젝트입니다.
- 디자인 시스템을 사용해 프로덕트를 개발함으로써 개발 생산성을 높이기 위한 목적으로 개발되었습니다.
- 스토리북 : https://lookatourdesignsystem.github.io/global-designsystem

<img width="1422" alt="image" src="https://github.com/lookatourdesignsystem/global-designsystem/assets/39401563/c34e4385-5c6f-4892-8056-d78f0ce921a6">

## 개발 환경

### Front

React, emotion, styled-component, yarn, yarn workspace, lerna, rollup, cypress, github-action

### Design

Figma

## 컴포넌트 소개

### Action

사용자의 액션이 들어가는 컴포넌트입니다.

- Accordion
- Button
- ButtonGroup
- Chip
- Link
- ListButton
- Tabs

### Overlay

화면에서 z축 기준 상단으로 올라오게 되는 컴포넌트입니다.

- Backdrop
- BottomSheet
- Drawer
- Menu
- Modal
- Snackbar

### Layout

컴포넌트들의 포지셔닝 및 컨터이너 역할을 도와주는 컴포넌트입니다.

- Box
- Container
- Divider
- Spacer
- Stack
- Grid

### Data Display

이미지, 숫자 등 데이터들이 표현되는 것이 목적인 컴포넌트입니다.

- Avatar
- Badge
- Table

### Input

사용자의 입력을 받는 컴포넌트 입니다.

- Checkbox
- Radio
- Select
- SelectField
- Switch
- TextField
- Textarea

### Loading

진행중 상태를 나타내는 컴포넌트입니다.

- InlineLoading
- Loading
- ProgressBar
- Skeleton

### Foundation

컬러, 폰트, 아이콘 등 디자인 관련 컴포넌트와 테마입니다.

- Icon
- OverlayScrollbar
- Color
- Spacing
- Typography

### Util

image, video, audio 어셋을 표현하는 컴포넌트와 기타 컴포넌트들입니다.

- Audio
- Image
- Video
- Transition
- ClickAwayListener
- FormControlLabel

### Hook

컴포넌트와 함께 사용하기위한 커스텀 훅입니다.

- useBreakpoints
- useContainerModal
- useIntersection
- useLoading
- useModal
- useNumberField
- useScrollIntoView
- useSerialField
- useSnackbar
- useTextField
- useTextarea
- useTheme
