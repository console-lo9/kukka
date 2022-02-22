<h1 align="center"> 꾸까 클론 과제 </h1>

<h3 align="center"> 서비스 링크: </h3>

<p align="center"><img width="500" src="https://bit.ly/3HyINHE" /></p>

<br/>

## 👏 프로젝트 소개

> 리액트없이 바닐라 자바스크립트로 꾸까(https://kukka.kr/) 웹 페이지를 구현하는 과제로 <br/>
> IE8 크로스 브라우징을 대응하여 제작한 프로젝트입니다.

<br/>

## 🙋‍♀️🙋‍♂️ 팀원

|                                           프로필                                           |                    이름                     | 담당 기능     |
| :----------------------------------------------------------------------------------------: | :-----------------------------------------: | :------------ |
| <img src="https://avatars.githubusercontent.com/Ubermensch0608" width="100" height="100"/> | [우종원](https://github.com/Ubermensch0608) | 푸터          |
|  <img src="https://avatars.githubusercontent.com/crucial-sub" width="100" height="100"/>   |  [박중섭](https://github.com/crucial-sub)   | GNB           |
|    <img src="https://avatars.githubusercontent.com/ttaerrim" width="100" height="100"/>    |    [이태림](https://github.com/ttaerrim)    | 동영상, 배너  |
|   <img src="https://avatars.githubusercontent.com/penguin311" width="100" height="100"/>   |   [임수영](https://github.com/penguin311)   | 플라워 클래스 |

<br/>

## 🚀 스택


<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Jquery-0769AD?style=flat-square&logo=jquery&logoColor=white"> 
<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white"> 
<img src="https://img.shields.io/badge/Babel-F9DC3E?style=flat-square&logo=babel&logoColor=black"> 
<img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white"> 

<br/>

## ⚠️ 규칙

- css class명은 [BEM 네이밍 규칙](https://padak-padak.tistory.com/entry/CSS-Naming-Conventions-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EA%B7%9C%EC%B9%99)을 준수한다

- Git Team Ground Rule - Git Flow, 모든 팀원이 체크 후 마지막 체크한 팀원이 머지한다. 

<br/>

## ✨ 구현 사항

사용 기술 

- [x] Vanilla JS 사용
- [x] jQuery 사용 가능
- [x] 반응형 

GNB

- [ ] 스크롤 이동 시 상단 고정
- [ ] 메뉴 hover 시 글자 하단에 밑줄
  - text-decoration 사용 금지
- [ ] GNB 하단 영역에 그림자 효과 - (z-index)
- [ ] 메뉴 아이템 두 가지: 동영상, 플라워클래스
- [ ] 클릭 시 해당 영역으로 스크롤 이동
- [ ] 애니메이션 효과 적용
  - scroll-behavior: smooth 사용 금지

동영상

- [ ] iFrame 사용하여 Youtube 영역 구현
- [ ] 캡션 삽입 & 동영상 제목 클릭 시 링크 이동

플라워클래스

- [x] 이미지 hover 시 줌 효과
- [x] 화살표 버튼 클릭 시 1, 2, 3 이미지 돌아가며 교체

배너 영역

- [x] Bootstrap4 사용해 두 개의 다른 영역 레이아웃 구성
- [x] 이미지 위에 단색 그라데이션
- [ ] hover 시 이미지 확대
- [ ] 배너 내부 반응형

푸터 영역

- [ ] css로 레이아웃 구현 (IE8)
- [ ] SNS 아이콘 클릭 시 링크 이동

팝업

- [ ] 들어가면 팝업 이미지를 띄움
- [ ] 클릭하면 외부 사이트로 이동

## 🗺 구현 기능

1. 첫 번째 기능

   <img width="500" src="https://bit.ly/3HyINHE" />

2. 두 번째 기능

   <img width="500" src="https://bit.ly/3HyINHE" />

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/console-lo9/kukka.git

# install modules
$ cd kukka
$ npm ci || yarn

# start
$ Live server

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

## 🔗 의존성

```
  "dependencies": {
    "axios": "^0.25.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.4"
  },
```

## 📂 파일 구조

> 작성 후 삭제
> 참고 (https://www.lesstif.com/lpt/linux-tree-54952142.html)
>
> ```
> $ tree -N -L 2 -d -I "node_modules"
> ```
>
> 또는 vscode File-tree-generator extension 사용

## 💡 과제 후기

### **우종원** 🍀

### **박중섭** ✨

### **이태림** 🐯

### **임수영** 🐧
프레임워크 없이 Vanilla JS로 컴포넌트를 나눠 작업하는 것을 경험해 볼 수있는 좋은 과제였던 것 같습니다. 
또한 IE8 크로스 브라우징을 위해 JS에서 map 이 아닌 for 문을 사용하는 등의 코드 구현으로 크로스 브라우징 방법을 알게 되었습니다. 
