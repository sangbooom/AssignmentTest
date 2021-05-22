# 🧾 프리윌린 과제테스트
[![Netlify Status](https://api.netlify.com/api/v1/badges/da2c20f3-0fcf-4a9e-b26d-96f6d749497e/deploy-status)](https://app.netlify.com/sites/mathflat-clone/deploys)
## ⚙ 패키지 관리
- npm
## 📚 사용 기술 스택
- react (typescript, 함수형 컴포넌트)
- emotion.js
- redux
- axios

## 👩🏻‍💻 동작 실행
처음에 store에서 initialState를 가져온다.(index.tsx)    
그 후에 ProblemLayout과 SimilarLayout을 렌더링한다. (App.tsx)   
작성한 API 요청을 비동기 통신을 통해 데이터를 주고받는다.(ProblemLayout/index.tsx , SimilarLayout/index.tsx)   
각각 Layout에서 axios로 받아온 json 데이터를 dispatch를 통해 store에 갱신한다.   
갱신 되면 useSelector로 store의 값들을 지켜보고 있던 컴포넌트들이 리렌더링 되고 값이 갱신된다.    
Layout들이 다시 갱신되고 list - listItem 순으로 렌더링이 된다.   

## 💭나 혼자 고민한 리팩토링 이슈

### 반응형

480px 576px 768px 일 떄도 반응형을 고려해야 하나 많은 고민을 했다.
사실 페이지 자체가 스마트폰으로 보지 않는 페이지인 것 같기 때문이다.
그래서 간단하게만 처리해주었다.

이미지는 비율을 유지하면서 작아지면 너무 안 보여서 따로 css 속성을 주지 않았다. 

### 비동기 통신

json을 로컬에서 AJAX를 통해 가져오는데 Layout 컴포넌트에서 받아오는 게 거슬렸다.    
컴포넌트는 view에 관한 것을 가져오고 화면에 보여주는 역할만 하고 사이드이펙트가 있는 비동기 통신은 redux-saga가 담당하도록 관심사 분리를 하려고 했다.   
사실 json을 통해 더미데이터로 간단히 가져오는 것이라서 딱히 비동기 미들웨어를 사용할 이유가 없어 보여 적용하지 않았다.    
굳이 있다면 요청과 응답사이에 로딩화면을 보여줄 수 있다?    
작은 프로젝트에서 redux-saga 쓰기에 성능상의 이점보다 개발자 경험이 떨어지는 것이 더 큰 것 같아 사용하지 않고, 각 Layout 컴포넌트에서 데이터를 주고받았다.
___
SWR을 도입하면 성능상의 이점이 있을까? 전혀 없을 것 같다.
___
경로를 숨기기 위해 Config 파일을 생성하려 했지만 큰 이슈가 아닌 것 같아 적용하지 않았다.

### CSS

css 속성 기술 순서는 NHN 코딩컨벤션을 따랐다.
![image](https://user-images.githubusercontent.com/43921054/119236369-fcafa480-bb71-11eb-8230-49201cc3741a.png)
> 출차 : https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf

css 방법론 중 하나인 BEM 방식을 선호하는데 styled-component에 적용하려면 스네이크 케이스와 파스칼 케이스를 혼합해서 써야했다.  
그러기엔 가독성이 안 좋고 유지보수 하기 안 좋고 eslint에서 에러를 냈기에 그냥 파스칼 케이스로 styled-component를 작성했다.

### 최적화

react profiler를 통해 렌더링하는 빈도를 측정하고 React.memo()를 이용해 컴포넌트를 감쌌지만, 최적화에 별 도움이 되지 않는 것 같아 삭제했다.

만약 학습지, 교체/추가 할 문제가 백 문제가 넘는다면?? lazy-loading 이나 react-virtualized로 최적화 해주는 게 좋을 것 같다.
이미지는 용량을 많이 차지하고 성능이 느려질 수 있기 때문이다. 그래서 사용자 화면에 보이는 이미지만 요청하고 사용자가 스크롤을 내려서 다른 이미지가 보여야 할 때 
이미지를 요청해서 리소스 요청을 줄이면 성능이 최적화될 것이라 생각한다.

불필요한 태그나 스타일이 없어야 브라우저가 css를 그리는 시간이 조금이나마 단축 될 것이고 이는 성능 최적화로 이어질 것이다.
하지만 나의 css에 있어서는 아직 물음표가 많다. 상황에 적절한 속성인지.. 시맨틱 태그에 익숙하지 않아서 잘 썼는지 확신이 안 선다. 면접을 보게 된다면 여쭤보려고 한다.
