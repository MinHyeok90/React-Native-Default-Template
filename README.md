# 리액트 네이티브 기본 틀 추가하기
리액트 네이티브 개발시 기본적으로 수정, 추가하는 파일들을 넣어둔 폴더입니다.

변경되는 내용들은 다음과 같습니다.
- tsconfig.json
- bable.config.js
- index.js
- App.tsx
- 기본 Home 컴포넌트


적용될 개발환경은 다음과 같습니다.
- 운영체제: Window 
- React Native 버전: 0.63.4


아래 작업들이 선행되어야 합니다.
1. https://reactnative.dev/docs/environment-setup 에서 필요로 하는 내용은 모두 작업합니다.
2. Android Studio, SDK, NDK 설정도 미리 해두세요
3. `npx react-native init <프로젝트 이름>` 으로 기본 틀을 세워주세요
4. git 은 설정되어있다고 가정합니다.


위 작업이 끝난 뒤, 이 프로젝트를 덮어씁니다.

    TARGET_PROJECT_NAME=<프로젝트 이름>
    git clone https://github.com/MinHyeok90/React-Native-Default-Template.git
    cp -fr React-Native-Default-Template/* $TARGET_PROJECT_NAME/
        * 여기서 덮어쓰기가 안되면 다음 명령어들로 시도해봅시다
        \cp -fr
        yes | cp -fr
    rm -rf React-Native-Default-Template
    rm -rf $TARGET_PROJECT_NAME/App.js
    rm -rf $TARGET_PROJECT_NAME/README.md
    cd $TARGET_PROJECT_NAME

이후 package.json의 name 부분을 원하는 이름으로 변경한 뒤

    npm install

이후 개발을 진행합니다.
