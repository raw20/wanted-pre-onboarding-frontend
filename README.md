# 원티드 프리온보딩 프론트엔드 인턴십 선발과제

## 설명

API와 JWT를 이용하여 로그인/회원가입이 가능한 TODO App 구현


## 실행 방법

```
npm i
npm start
```

## 데모영상

### 1. 회원가입

- 이메일과 비밀번호의 유효성 검사기능을 구현

- 유효성 검사에 통과하지 못하면 버튼 비활성화

- 회원가입 실패시 유저에게 피드백 메세지 출력
 
 <kbd>
    <img src="https://user-images.githubusercontent.com/62588402/218077674-59ff48a6-f52c-4e1d-9cd1-0fdba2badd77.gif" width="700" height="450"/>
  </kbd>
  
### 2. 로그인

- 이메일과 비밀번호의 유효성 검사기능을 구현

- 로그인 성공 시 응답받은 JWT를 로컬스토리지에 저장

- 로그인 실패시 유저에게 피드백 메세지 출력

 <kbd>
    <img src="https://user-images.githubusercontent.com/62588402/218078135-e21aae06-b56c-481e-8e8e-3a79ee22a671.gif" width="700" height="450"/>
 </kbd>

### 3. 투두리스트 

#### 추가

- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가
 <kbd>
    <img src="https://user-images.githubusercontent.com/62588402/218078400-58dca17c-0e8b-4fb6-b9b4-e95202f78cdd.gif" width="700" height="450"/>
</kbd>


#### 완료여부 / 수정 / 삭제

- TODO의 체크박스를 통해 완료 여부를 수정

- TODO 우측에 수정과 삭제 기능 구현

- TODO 우측의 수정 버튼을 누르면 수정모드가 활성화


 <kbd>
    <img src="https://user-images.githubusercontent.com/62588402/218078852-1e82c808-c894-4b4f-be50-87a1e2a726ff.gif" width="700" height="450"/>
</kbd>

### 4. 리다이렉트

- 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트

- 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트

 <kbd>
    <img src="https://user-images.githubusercontent.com/62588402/218078963-03e75859-4365-486a-b14c-1ac540757e2e.gif" width="600" height="250"/>
</kbd>



## 배포링크

https://63e636406cf00e00080697cc--magical-dieffenbachia-a4eca1.netlify.app
