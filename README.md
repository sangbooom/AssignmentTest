# 🧾 프리윌린 과제테스트

[![Netlify Status](https://api.netlify.com/api/v1/badges/da2c20f3-0fcf-4a9e-b26d-96f6d749497e/deploy-status)](https://app.netlify.com/sites/mathflat-clone/deploys)

## ⚙ 패키지 관리

- node.js
- npm

## ✨ 실행
1. github에서 프로젝트를 클론 한다.   
```
$ git clone https://github.com/sangbooom/AssignmentTest
```

2. 프로젝트 디렉토리에 들어간다.   
```
$ cd AssignmentTest
```

3. 의존성 모듈을 설치한다.   
```
$ npm install
```

4. 실행한다.   
```
$ npm run start
```

## 📚 사용 기술 스택

- react (typescript, 함수형 컴포넌트)
- emotion.js
- redux
- axios

## 👩🏻‍💻 동작 흐름 순서

처음에 store에서 initialState를 가져온다.`index.tsx`  
그 후에 ProblemLayout과 SimilarLayout을 렌더링한다. `App.tsx`  
작성한 API 요청을 비동기 통신을 통해 데이터를 주고받는다.`ProblemLayout/index.tsx`, `SimilarLayout/index.tsx`  
각각 Layout에서 axios로 받아온 json 데이터를 dispatch를 통해 store에 갱신한다.  
갱신 되면 useSelector로 store의 값들을 지켜보고 있던 컴포넌트들이 리렌더링 되고 값이 갱신된다.  
Layout들이 다시 갱신되고 list - listItem 순으로 렌더링이 된다.

## 기능 구현

### 유사문항 버튼 active

유사문항 버튼을 눌렀을 때 onClickSimilarCardButton이 실행된다.

```js
const onClickSimilarCardButton = useCallback(() => {
  dispatch(changeValue({ key: "isButtonClicked", value: true }));
  dispatch(changeValue({ key: "activeIndex", value: targetIndex }));
}, [dispatch, targetIndex]);
```

**targetIndex**는 List컴포넌트에서 map으로 받아온 index값을 index-1로 초기화했고, 내가 **누른 버튼의 index**를 저장한 변수이다.   
dispatch를 통해 isButtonClicked를 true로 바꿔주고, SimilarLayout의 useSelector가 감지를 하고 바뀐 값으로 리렌더링을 한다.   
**activeIndex**는 **현재 active 되어있는 index**를 나타낸다.   

### 삭제

삭제 버튼을 눌렀을 때 onClickDeleteButton이 실행된다.

```js
const onClickDeleteButton = useCallback(() => {
  dispatch(deleteProblem(targetIndex));
  if (activeIndex === targetIndex) {
    dispatch(changeValue({ key: "isButtonClicked", value: false }));
    dispatch(changeValue({ key: "activeIndex", value: -1 }));
  } else if (activeIndex > targetIndex) {
    dispatch(changeValue({ key: "activeIndex", value: activeIndex - 1 }));
  }
}, [dispatch, activeIndex, targetIndex]);
```

삭제를 누른 index를 dispatch로 넘기고 reducer에서 targetIndex에 해당하는 문제를 삭제한다.   
만약, activeIndex(현재 active 되어있는 index)와 targetIndex(클릭 이벤트를 발생시킨 버튼의 index)가 같다면 activeIndex를 초기화 시키고 유사문항 리스트를 보여주지 않으면 된다.   
그리고 activeIndex가 targetIndex보다 크다면 삭제를 했을 때 index가 한칸씩 내려오기 때문에 activeIndex에 -1을 해주었다.   

### 추가

추가 버튼을 눌렀을 때 onClickAddButton이 실행된다.

```js
const onClickAddButton = useCallback(() => {
  dispatch(addProblem(targetIndex));
}, [dispatch, targetIndex]);
```

클릭 이벤트를 발생시킨 버튼의 index를 dispatch를 통해 store의 reducer에 넘겨주고 아래 방식을 실행시켜 바꿔준다.

```js
// reducer
switch (action.type) {
  ...
  case ADD_PROBLEM:
    draft.problemData.splice(
      draft.activeIndex + 1,
      0,
      draft.similarData[action.data]
    );
    // 학습지 리스트에 현재 active 되어있는 index + 1에 유사문제 리스트[추가 버튼을 누른 index]를 추가
    draft.similarData.splice(action.data, 1);
    // 유사문제 리스트[추가 버튼을 누른 index] 삭제
    break;
  ...
}
```

마찬가지로 `ProblemLayout/index.tsx` 와 `SimilarLayout/index.tsx`에서 각각 problemData와 similarData 값이 변경 된 것을 감지하고 컴포넌트를 리렌더링 한다.

### 교체

교체 버튼을 눌렀을 때 onClickSwapButton이 실행된다.

```js
const onClickSwapButton = useCallback(() => {
  dispatch(swapSimilar(targetIndex));
}, [dispatch, targetIndex]);
```

클릭 이벤트를 발생시킨 버튼의 index를 dispatch를 통해 store의 reducer에 넘겨주고 아래 방식을 실행시켜 바꿔준다.   

교체 버튼을 누른 문제를 학습지 리스트의 active된 문제 아래에 추가한다.  
교체 버튼을 누른 문제를 유사문제 리스트에서 삭제한다.   
학습지 리스트에서 active 상태 문제를 유사문제 리스트에서 삭제한 index에 추가한다.    
학습지 리스트에서 active 상태 문제를 학습지 리스트에서 삭제한다.  
마치 교체가 된 것처럼 보이도록 연산을 했다.  

```js
// reducer
switch (action.type) {
  ...
  case SWAP_SIMILAR:
    draft.problemData.splice(
      draft.activeIndex + 1,
      0,
      draft.similarData[action.data]
    );
    // 교체 누른 문제를 학습지의 active문제의 아래에 추가
    draft.similarData.splice(action.data, 1);
    // 교체 누른 문제를 similarData에서 삭제
    draft.similarData.splice(
      action.data,
      0,
      draft.problemData[draft.activeIndex]
    );
    // 학습지의 active문제를 similarData에서 삭제한 index에 추가
    draft.problemData.splice(draft.activeIndex, 1);
    // 학습지의 active문제를 problemData에서 삭제
    break;
  ...
}
```

immer를 사용했기 때문에 불변성을 지켜주지 않았다.

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

---

SWR을 도입하면 성능상의 이점이 있을까? 전혀 없을 것 같다.

---

경로를 숨기기 위해 Config 파일을 생성하려 했지만 큰 이슈가 아닌 것 같아 적용하지 않았다.

### CSS

css 속성 기술 순서는 NHN 코딩컨벤션을 따랐다.
![image](https://user-images.githubusercontent.com/43921054/119236369-fcafa480-bb71-11eb-8230-49201cc3741a.png)

> 출차 : https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf

css 방법론 중 하나인 BEM 방식을 선호하는데 styled-component에 적용하려면 스네이크 케이스와 파스칼 케이스를 혼합해서 써야했다.  
그러기엔 가독성이 안 좋고 유지보수 하기 안 좋고 eslint에서 에러를 냈기에 그냥 파스칼 케이스로 styled-component를 작성했다.

### 최적화

만약 학습지, 교체/추가 할 문제가 백 문제가 넘는다면?? lazy-loading 이나 react-virtualized로 최적화 해주는 게 좋을 것 같다.
이미지는 용량을 많이 차지하고 성능이 느려질 수 있기 때문이다. 그래서 사용자 화면에 보이는 이미지만 요청하고 사용자가 스크롤을 내려서 다른 이미지가 보여야 할 때
이미지를 요청해서 리소스 요청을 줄이면 성능이 최적화될 것이라 생각한다.

불필요한 태그나 스타일이 없어야 브라우저가 css를 그리는 시간이 조금이나마 단축 될 것이고 이는 성능 최적화로 이어질 것이다.
하지만 나의 css에 있어서는 아직 물음표가 많다. 상황에 적절한 속성인지.. 시맨틱 태그에 익숙하지 않아서 잘 썼는지 확신이 안 선다. 면접을 보게 된다면 여쭤보려고 한다.

React.memo()를 이용한 최적화? 사실 큰 이점이 없어보여 사용하지 않았다. memo는 얕은 비교를 통해 변경사항이 생길 때 리렌더링을 하는 것이고 얕은 비교시에 리렌더링을 수행하기 위한 오버헤드가 일반적인 컴포넌트 실행보다 비용이 더 비쌀 수 있다고 생각했기 때문이다.
