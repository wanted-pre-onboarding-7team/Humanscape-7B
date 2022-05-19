<div align=center>

![기능](https://user-images.githubusercontent.com/78616893/169333225-3bc95877-e507-45df-afa2-5222808f05f6.gif)
  
### 검색어 추천이 있는 검색창

### [배포 주소](https://7b.netlify.app/)
  
</div>

<br>

## 기술 스택
> TypeScript, React, Sass, Redux, react-query

<br>

## 프로젝트 실행 방법

yarn으로 작업한 프로젝트입니다.
yarn을 먼저 설치한 다음 실행해주세요.

<br>

```shell
# yarn 설치
npm i yarn

# 현재 레포지토리 클론
git clone git@github.com:wanted-pre-onboarding-7team/Humanscape-7B.git

# dependencies 설치
yarn

# 로컬 서버에서 실행
yarn start
```

<br>

## 사용 방법

1. 검색어를 입력합니다.
2. 검색어에 맞는 추천 검색어를 보여줍니다.
3. 추천 검색어를 위아래 방향키를 사용해서 이동할 수 있습니다.
4. 키보드로 추천 검색어를 선택할 경우, 입력값이 해당 검색어로 변경됩니다.
5. 추천 검색어 클릭 또는 `enter` 버튼을 누르면 해당 검색어에 대한 상세페이지로 이동합니다.

<br>

## 구현 방법

### 1. react-query를 사용해 로컬 캐싱 구현
- 서버 데이터를 클라이언트에 가져오거나, 캐싱, 값 업데이트, 에러 핸들링 등 비동기 과정을 관리

### 2. Redux를 사용해 추천 검색어 리스트 index 상태 관리로 키보드 이동 구현
- 여러 컴포넌트에서 사용되는 값을 Redux를 통해 전역적으로 관리
- SearchForm에서 index 값 업데이트
- 추천 리스트에서 index를 이용해 해당 item 필터링
- 필터링한 item 스타일 지정 및 input 값을 설정

### 3. `mark` 태그를 사용해 일치하는 글차 bold 처리
- Redux를 통해 `searchValue`를 가져와 문장에서 해당 값에 `mark` 태그 추가

<br>

- [x] 검색어 추천 기능
  - [x] 질환명 검색시 추천 목록 리스트
  - [x] 검색어가 없을 시 '검색어 없음'
- [x] API 호출
  - [x] 호출별로 로컬 캐싱
  - [x] 호출 마다 console에 남겨 횟수 확인
- [x] 키보드로 추천 검색어 이동
- [x] 입력한 질환명과 일치하는 부분 볼드 처리
- [x] 검색 기능
  - [x] 리스트 클릭, form submit 한국임상정보 페이지로 이동
- [x] 요청 에러 처리
  - [x] react-query의 isError 값을 사용
  - [x] 에러 시 '현재 추천 검색어를 가져올 수 없음'
- [x] 배포
  - [x] Netlify 배포
  - [x] proxy 설정

<br>

## 어려웠던 점

### 1. 응답 결과 예외 처리
추천 검색어가 한 개인 경우에만 단일 객체 타입으로 응답
react-query의 비동기요청 과정에서 데이터를 가공해 전달

### 2. 키보드 이동 시 input 값
MacOS Chrome 환경에서 입력 값이 방향키가 아닐 때만 input의 `onChange` 이벤트 발생.

### 3. 키보드를 사용한 추천 검색어리스트 이동이 초기에 중복 실행
JS에서 한글에서 키다운 이벤트가 두번 실행되는 문제가 발생

운영체제, 브라우저마다 `KeyboardEvent.key` 값이 달라서 디버깅에 어려움을 겪음
`isComposing` method를 이용해 이벤트를 구분해 해결

|Windows|MacOS Chrome|MacOS Safari|
|:-:|:-:|:-:|
|![Windows](https://user-images.githubusercontent.com/78616893/169281650-be92323e-4fe9-48a7-9c22-fa18823d1207.png)|![MacOS Chrome](https://user-images.githubusercontent.com/78616893/169281759-c665df9b-1c3d-4d24-adf7-1ac95db202c0.png)|![MacOS Safari](https://user-images.githubusercontent.com/78616893/169282037-f5daefe5-9118-40d1-a7eb-4d64252f55ef.png)|

<br>

- [x] response 타입 차이(값 1개 일 때 객체 타입 / 배열 타입)
- [x] MacOS Chrome 환경 대응
  - [x] 키보드 이동 시 input 값 끝에 한 글자가 추가되는 문제 발생
  - [x] 키보드 이동 시 추천 검색어 간 이동 두 번 실행
    - [x] Windows 환경에서 `KeyboardEvent.key` 값이 다름 (MacOS Chrome에서는 일치)
    - [x] process, arrowdown / arrowdown, arrowdown
    - [x] `e.nativeEvent.isComposing` 조건 추가

<br>

## API 호출 최적화

- 한글 입력 시 연속 된 호출을 막기 위해 setTimeout 함수를 사용하여 디바운싱 처리

- enabled: !!debouncedValue.trim()
  - react-query에서 enabled 옵션 사용
  - 요청에 사용한 파라미터가 유효한 경우에만 쿼리 활성화
  - 공백 값을 입력하면 전체 데이터에 대해 요청하므로 trim 적용
  - 기타 공백이 있는 검색의 경우 정상 작동

- staleTime을 설정하여 쿼리를 fresh 상태로 유지

- cacheTime을 설정하여 캐싱 유지 시간을 결정
  - 캐싱되어 있는 데이터의 경우 컴포넌트가 마운트, 언마운트 되어도 재호출 하지 않음

- refetchOnWindowFocus: false, refetchOnMount: false
  - stale 상태인 경우에서의 refetch 옵션
  - 추천 리스트의 서버 데이터 변동이 없으므로 false 설정

- react-query에 defalut 옵션인 retry를 사용하여 호출 실패 시 재요청 횟수를 3번으로 제한

<br>

---

"본 저작물은 '건강보험심사평가원'에서 '16년'작성하여 공공누리 제1유형으로 개방한 '질병정보서비스'를 이용하였으며,
해당 저작물은 '[공공데이터포털](https://www.data.go.kr/data/15001675/openapi.do)'에서 무료로 다운받으실 수 있습니다."
