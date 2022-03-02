<h1 align="center"> 꾸까 클론 과제 </h1>

<h3 align="center"> 서비스 링크: https://console-lo9-kukka.netlify.app/ </h3>

<p align="center"><img width="500" src="https://bit.ly/3HbbMA8" /></p>

<br/>

## 👏 프로젝트 소개

> 리액트없이 바닐라 자바스크립트로 꾸까(https://kukka.kr/) 웹 페이지를 구현하는 과제로 <br/>
> 크로스 브라우징에 대한 고민을 바탕으로 제작한 프로젝트입니다.

<br/>

## 🙋‍♀️🙋‍♂️ 팀원

|                                           프로필                                           |                    이름                     | 담당 기능     |
| :----------------------------------------------------------------------------------------: | :-----------------------------------------: | :------------ |
| <img src="https://avatars.githubusercontent.com/Ubermensch0608" width="100" height="100"/> | [우종원](https://github.com/Ubermensch0608) | 푸터, 팝업 창 |
|  <img src="https://avatars.githubusercontent.com/crucial-sub" width="100" height="100"/>   |  [박중섭](https://github.com/crucial-sub)   | GNB           |
|    <img src="https://avatars.githubusercontent.com/ttaerrim" width="100" height="100"/>    |    [이태림](https://github.com/ttaerrim)    | 동영상, 배너  |
|   <img src="https://avatars.githubusercontent.com/penguin311" width="100" height="100"/>   |   [임수영](https://github.com/penguin311)   | 플라워 클래스 |

<br/>

## 🚀 스택

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Jquery-0769AD?style=flat-square&logo=jquery&logoColor=white">
<img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white">

<br/>

## ⚠️ 규칙

- CSS class명은 [BEM 네이밍 규칙](https://padak-padak.tistory.com/entry/CSS-Naming-Conventions-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EA%B7%9C%EC%B9%99)을 준수한다

- Git Team Ground Rule - Git Flow, 모든 팀원이 체크 후 마지막으로 체크한 팀원이 머지한다.

<br/>

## ✨ 구현 사항

사용 기술

- [x] Vanilla JS 사용
- [x] jQuery 사용 가능
- [x] 반응형

GNB

- [x] 스크롤 이동 시 상단 고정
- [x] 메뉴 hover 시 글자 하단에 밑줄
  - text-decoration 사용 금지
- [x] GNB 하단 영역에 그림자 효과 - (z-index)
- [x] 메뉴 아이템 두 가지: 동영상, 플라워클래스
- [x] 클릭 시 해당 영역으로 스크롤 이동
- [x] 애니메이션 효과 적용
  - scroll-behavior: smooth 사용 금지

동영상

- [x] iFrame 사용하여 Youtube 영역 구현
- [x] 캡션 삽입 & 동영상 제목 클릭 시 링크 이동

플라워클래스

- [x] 이미지 hover 시 줌 효과
- [x] 화살표 버튼 클릭 시 1, 2, 3 이미지 돌아가며 교체

배너 영역

- [x] Bootstrap4 사용해 두 개의 다른 영역 레이아웃 구성
- [x] 이미지 위에 단색 그라데이션
- [x] hover 시 이미지 확대
- [x] 배너 내부 반응형

푸터 영역

- [x] css로 레이아웃 구현 (IE8)
- [x] SNS 아이콘 클릭 시 링크 이동

팝업

- [x] 들어가면 팝업 이미지를 띄움
- [x] 클릭하면 외부 사이트로 이동

## 🗺 구현 Preivew

   <img width="500" src="https://user-images.githubusercontent.com/28384562/155220275-654b912d-fc34-4e09-8312-9173fc1043d5.gif" />

## 🗒 프로젝트 진행 과정 및 구현 사항

> [위키 링크](https://github.com/console-lo9/kukka/wiki/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A7%84%ED%96%89-%EA%B3%BC%EC%A0%95%EA%B3%BC-%EA%B3%A0%EB%AF%BC)

<br/>

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/console-lo9/kukka.git

# install modules
$ cd kukka
$ npm install || yarn

# start with live server

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:5500/
⠀
```

## 🔗 의존성

```
  "dependencies": {
    "babel-loader": "^8.2.3",
    "node-sass": "^7.0.1",
    "vanilla-framework": "^3.1.0",
    "webpack": "^5.69.1",
    "webpack-cli": "^4.9.2"
  },
```

## 📂 파일 구조

        ├── public
        │   └── scripts
        └── src
            ├── assets
            ├── components
            └── styles

## 💡 과제 후기

### **우종원** 🍀

리액트에 더 익숙해져 있는 이 시점에 많은 생각을 할 수 있었던 프로젝트였습니다. CRA세팅으로 모든 것이 한 번에 마법처럼 준비되던 것의 이면에는 사실 수 많은 것들이 들어 있었다는 것을 체감할 수 있었습니다. babel 그리고 webpack에 대해 관심을 갖고 공부할 수 있었으며, 크로스브라우징을 고려하는 개발이 쉽지 않지만, 다양한 사용자를 고려하는 것이 필수인 개발자에개는 언젠가는 맞닥드릴 운명같은 것이 아닐가 생각했습니다.

### **박중섭** ✨


오랜만에 리액트 없이 바닐라 자바스크립트와 HTML, CSS로 개발을 하면서 기본기를 되돌아보는 시간이었습니다. 이번 프로젝트에선 평소에 고려하지 않았던 IE8 브라우저 호환성을 직접 맞추려 시도하면서 많은 시행착오를 겪었고, 그 과정에서 크로스 브라우징 처리에 대한 방법과 Babel과 같은 컴파일러나 webpack과 같은 번들러의 중요성을 다시금 깨달을 수 있었습니다.

### **이태림** 🐯

IE8까지 크로스 브라우징 처리하는 것이 생각보다 쉬운 일이 아니라는 걸 알고 가는 프로젝트였습니다. babel과 webpack이 어떤 일을 하는지 명확히 알고 있지 못했는데, 프로젝트에 반영은 하지 않았지만 직접 사용해 보며 프로젝트에서 어떤 역할을 하는 도구들인지 알게 되었습니다.

### **임수영** 🐧

프레임워크 없이 Vanilla JS로 컴포넌트를 나눠 작업하는 것을 경험해 볼 수있는 좋은 과제였던 것 같습니다.
또한 IE8 크로스 브라우징을 위해 JS에서 map 이 아닌 for 문을 사용하는 등의 코드 구현으로 크로스 브라우징 방법을 알게 되었습니다.

