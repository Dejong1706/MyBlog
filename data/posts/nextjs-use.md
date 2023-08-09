# Next.js 12 사용법

Next.js 12는 React 기반의 웹 애플리케이션 프레임워크인 Next.js의 최신 버전입니다. 이 글에서는 Next.js 12의 주요 기능 및 사용법에 대해 알아보겠습니다.

## 주요 기능 및 변화

Next.js 12는 아래와 같은 주요 기능 및 변화를 제공합니다.

1. Rust 컴파일러와 함께 올라선 새로운 Next.js 컴파일 파이프라인
2. Middleware 지원을 통한 API 라우팅 강화
3. 새로운 컴포넌트: `<Image>` 및 `<Link>`
4. 콘솔 및 오류 꾸밈

## 설치 및 프로젝트 생성

시작하기 전에 Node.js LTS 버전이 설치되어 있는지 확인하세요. 다음 명령어를 사용하여 Next.js 12 프로젝트를 생성합니다.

```bash
npx create-next-app 프로젝트명
cd 프로젝트명
npm run dev
```

명령어 실행 후 http://localhost:3000에 접속하여 생성된 프로젝트를 확인할 수 있습니다.

# 파일 시스템 기반 라우팅

Next.js 12는 파일 시스템 기반 라우팅을 제공합니다.  
pages/ 디렉토리에 .js, .jsx, .ts, .tsx 확장자를 가진 파일을 생성하면 자동으로 라우팅이 완료됩니다.  
예를 들어, pages/about.js 파일을 생성하면 http://localhost:3000/about 주소에서 페이지를 확인할 수 있습니다.

# API 라우팅 및 Middleware

Next.js 12는 API 라우팅을 통해 API 엔드포인트를 생성할 수 있습니다.  
pages/api/ 디렉토리에 파일을 생성하면 API 엔드포인트로 작동하게 됩니다. 또한, Next.js 12에서는 Middleware를 사용하여 들어오는 요청을 수정하거나 대응할 수 있습니다.  
Middleware를 src/middleware/ 디렉토리에 추가하면 적용됩니다.

# 새로운 컴포넌트: <Image> 및 <Link>

Next.js 12는 이미지 최적화와 프리로드를 위한 <Image> 컴포넌트를 제공합니다.

```jsx
import Image from "next/image";

const Example = () => (
  <Image src="/my-image.png" alt="My Image" width={640} height={480} />
);
```

또한, 클라이언트 사이드 네비게이션을 지원하는 <Link> 컴포넌트를 제공합니다.

```jsx
import Link from "next/link";

const Example = () => (
  <Link href="/about">
    <a>About Page</a>
  </Link>
);
```

# 정적 생성 및 서버 사이드 렌더링

Next.js 12는 정적 생성, 느슨한 정적 생성 및 서버 사이드 렌더링을 지원합니다. 이를 통해 사이트의 성능과 SEO를 개선할 수 있습니다.

## 정적 생성

정적 생성을 위해 getStaticProps() 함수를 이용합니다. pages/ 디렉토리 내 파일에 아래와 같이 추가하세요.

```jsx
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}
```

# 서버 사이드 렌더링

서버 사이드 렌더링을 위해 getServerSideProps() 함수를 이용합니다. pages/ 디렉토리 내 파일에 아래와 같이 추가하세요.

```jsx
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}
```

# 결론

이 글에서는 Next.js 12의 기능, 설치 및 프로젝트 생성, 라우팅, API 라우팅, 컴포넌트 사용, 정적 생성 및 서버 사이드 렌더링 등에 대해 배웠습니다. 이 내용을 이용하여 Next.js 12를 사용한 웹 애플리케이션 개발을 시작할 수 있습니다.
