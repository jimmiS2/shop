# SHOP

## 따라할 사이트 
https://dopegood.com/


#

### 개발환경

---

- Frontend : React
    - axios
    - jquery
    - jquery cookie

---

- Backend Server : Node.jsexpress
    - express-session
    - cors

---

- Database : mongoDBmongoose

---


#


### 테이블 구성
(mongoDB는 어떻게 설계하는지 느낌이 안와서, 그냥 하면서 해도 된다길래 대충 쓸 거 정리해둠)

product

- cate_id(PK) : 카테고리 아이디
- cate_name : 카테고리 이름

---

product_info

- cate_id(PK): 카테고리 아이디
- prd_name: 상품 이름
- prd_id: 상품 아이디
- prd_price: 상품 가격
- prd_image: 상품 이미지

---

product_cart

- member_id: 회원아이디
- prd_id : 상품아이디
- buy_quantity: 상품 수량
- prd_id: 카테고리 아이디

---

member

- member_id(PK): 회원 아이디
- member_name: 회원 이름
- member_pwd: 회원 비밀번호
- member_birth: 회원 생일
- member_create: 회원 가입일
- member_maill: 회원 이메일
- member_phone: 회원 연락처
- member_zipcode: 회원 우편번호
- member_faddr: 회원 주소
- member_ladder: 회원 상세주소
