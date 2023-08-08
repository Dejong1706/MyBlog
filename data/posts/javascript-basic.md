# 자바스크립트 기초 문법

자바스크립트는 웹 개발에서 가장 널리 사용되는 프로그래밍 언어입니다. 이와 아래는 자바스크립트의 기초 문법에 대해 설명하고 있습니다.

# 변수

자바스크립트에서 변수를 선언할 때에는 `var`, `let`, `const`를 사용합니다.

```javascript
var name = "John Doe";
let age = 30;
const country = "United States";
```

# 데이터 타입

자바스크립트는 다음과 같은 데이터 타입을 사용합니다.

String (문자열)
Number (숫자)
Boolean (불린형)
null (없다(null)을 나타냄)
undefined (값이 할당되지 않음)
Object (객체)
Array (배열)

```javascript
// String
let message = "Hello, JavaScript!";

// Number
let count = 42;

// Boolean
let isTrue = true;

// null
let nonExistence = null;

// undefined
let unassigned;

// Object
let person = {
  name: "John Doe",
  age: 30,
};

// Array
let numbers = [1, 2, 3, 4, 5];
```

# 연산자

자바스크립트는 수학, 비교, 할당 등의 연산자를 지원합니다.

```javascript
// 산술 연산자
let sum = 10 + 20;
let difference = 10 - 20;
let product = 10 * 20;
let quotient = 10 / 20;
let remainder = 10 % 20;

// 비교 연산자
let isEqual = 10 == 20;
let isNotEqual = 10 != 20;
let isGreater = 10 > 20;
let isLess = 10 < 20;
let isGreaterOrEqual = 10 >= 20;
let isLessOrEqual = 10 <= 20;

// 할당 연산자
let num = 10;
num += 5;
num -= 5;
num *= 5;
num /= 5;
num %= 5;
```

# 조건문

if, else if, else를 사용하여 조건문을 작성할 수 있습니다.

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}
```

# 반복문

for, while, do-while 같은 반복문을 사용할 수 있습니다.

```javascript
// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// do-while loop
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);
```

# 함수

자바스크립트에서 함수는 코드를 재사용할 수 있는 블록입니다.

```javascript
// 함수 선언
function greet(name) {
  console.log("Hello, " + name + "!");
}

// 함수 호출
greet("John Doe");
```
