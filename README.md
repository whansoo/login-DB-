# login/register_DB 구현
이 project는 MVC design pattern 으로 구성하였습니다.

## Front-End
1. ejs view engine<br>
2. bootstrap4<br>
3. AJAX

## Back-End
1. Node.js
2. Express
3. MySQL
4. passportjs(미들웨어)

## Node package manager
### dependencies<br>
    bcryptjs
    body-parser
    cookie-parser
    dotenv
    ejs
    express
    express-session
    mysql2
    passport
    passport-local
  
  ### devDependencies<br>
    nodemon
    babel-cli
    babel-preset-env

## Contents
1. Node.js 및 Express로 서버 설정

2. 로그인과 회원가입 디자인 구현 (frontend with Bootstrap 4)
3. 입력 필드 유효성 검사 
4. Node.js를 MySQL과 연결
5. Passport 미들웨어와 함께 사용할 AJAX 설정
6. 사용자의 이메일이 존재하는지 확인
7. 사용자 비밀번호 암호화 방법
8. Node.js 및 Express로 Passport 설정
9. 로그인 한 사용자에게만 경로 접근 제한