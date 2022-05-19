# 원티드 프리온보딩 휴먼스케이프 팀과제

검색어 추천이 있는 검색창

## 기술 스택
> TypeScript, React, Sass, Redux, react-query

## 구현 기능 목록

- [x] 검색어 추천 기능
  - [x] 질환명 검색시 추천 목록 리스트
  - [x] 검색어가 없을 시 '검색어 없음'
- [x] API 호출
  - [x] 호출별로 로컬 캐싱
  - [x] 호출 마다 console에 남겨 횟수 확인
  - [x] API 호출 횟수 줄이기
- [x] 키보드로 추천 검색어 이동
- [x] 입력한 질환명과 일치하는 부분 볼드 처리
- [ ] 퍼지 문자열 검색 지원
- [ ] 배포

## 자신만의 전략으로 API 호출 횟수 줄이기

-  디바운싱 300
-  trim (공백 값 요청 prevent)
-  staleTime, cacheTime (캐시 유지 시간)


## 에러

- [ ] response 값 1개 일 때 객체 타입
- [x] 키보드 이동시 리스트 이동 두번 실행
  - [x] e.nativeEvent.isComposing
  - [x] 윈도우환경에서 KeyboardEvent.key 값이 다르다 (맥 크롬에서는 같다)
    - [x] process, arrowdown / arrowdown, arrowdown
  - [x] 그래서 두번 실행되는걸 prevent 해준 느낌
- [x] 키보드 이동 시 인풋 value에 한 음절 붙음
  - [x] 재요청
