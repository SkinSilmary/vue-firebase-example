## vue-firebase example

Vue와 Firebase를 사용하여 간단한 CRUD를 수행하는 예제입니다.

### 사용 라이브러리
- VueFire
- Firebase

### 설치 및 실행
```console
npm install
npm rund dev
```
or
```console
yarn install
yarn dev
```

### 사용시 주의사항
이 예제를 실행시키기 위해 본인의 Firebase 데이터베이스가 필요합니다.  
따라서 **firebase.js**에 있는 "empty"부분을 본인의 설정에 맞게 수정하시기 바랍니다.
```javascript
// Initialize Firebase
var app  = initializeApp({
    apiKey: "empty",
    authDomain: "empty",
    databaseURL: "empty",
    projectId: "empty",
    storageBucket: "empty",
    messagingSenderId: "empty"
})
```

### 참고자료 
https://www.youtube.com/watch?v=831zOI02Q_0&t=302s

