# TypeScript 기초 문법

TypeScript는 JavaScript의 상위 집합인 정적 타입을 지원하는 프로그래밍 언어입니다. 이 글에서는 TypeScript의 기초 문법과 코드 예시에 대해 알아보겠습니다.

## 변수 및 타입

TypeScript에서 변수를 선언할 때, `let` 과 `const`를 사용합니다. 변수에 대한 타입을 명시적으로 지정할 수 있습니다.

```typescript
let name: string = "John Doe";
let age: number = 30;
const country: string = "United States";
```

# 데이터 타입

TypeScript는 JavaScript의 데이터 타입에 추가적으로 몇 가지 데이터 타입을 제공합니다.  
● String (문자열)  
● Number (숫자)  
● Boolean (불린형)  
● null (없다(null)을 나타냄)  
● undefined (값이 할당되지 않음)  
● Object (객체)  
● Array (배열)  
● Tuple (튜플)  
● Enum (열거형)  
● Any (어떤 타입도 가능)  
● void (리턴 값이 없음)  
● never (끝나지 않을 때 사용)

```typescript
// String
let message: string = "Hello, TypeScript!";

// Number
let count: number = 42;

// Boolean
let isTrue: boolean = true;

// null
let nonExistence: null = null;

// undefined
let unassigned: undefined = undefined;

// Object
let person: { name: string; age: number } = {
  name: "John Doe",
  age: 30,
};

// Array
let numbers: number[] = [1, 2, 3, 4, 5];

// Tuple
let tuple: [string, number] = ["text", 42];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Red;

// Any
let anyType: any = "I can be anything.";

// void
function logMessage(msg: string): void {
  console.log(msg);
}

// never
function throwError(): never {
  throw new Error("An error occurred!");
}
```

# 인터페이스

TypeScript는 인터페이스를 사용하여 객체의 형태를 정의 할 수 있습니다.

```typescript
interface Person {
  name: string;
  age: number;
  sayHello(): void;
}

const john: Person = {
  name: "John Doe",
  age: 30,
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

john.sayHello();
```

# 클래스

TypeScript에서 클래스를 사용하여 객체지향 프로그래밍을 구현할 수 있습니다.

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`My name is ${this.name}.`);
  }
}

const dog = new Animal("Dog");
dog.speak();
```

# 제네릭

제네릭을 사용하여 유연한 코드를 작성할 수 있습니다.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));
```
