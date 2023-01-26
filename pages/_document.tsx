import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="직원이 원하는 그 선물을 위한 사내 선물복지 솔루션, 기프티핏" />
          <meta
            name="description"
            content="매번 같은 선물은 이제 그만! 복지 담당자와 직원 모두의 만족도를 위한 기업용 선물복지 서비스"
          />
          <meta name="keywords" content="복지, 사내 복지, 임직원 복지, 선물 복지, 생일, 선물, 스타트업, 중소기업" />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/50395394/214743809-126504cf-2bf6-4b34-8dac-3fda14043891.png"
          />
          <meta property="og:title" content="우리 회사 직원을 위한 선물 복지 솔루션, 기프티핏" />
          <meta
            property="og:description"
            content="매번 같은 선물은 이제 그만! 복지 담당자와 직원 모두의 만족도를 위한 기업용 선물복지 서비스"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            as="style"
            crossOrigin="true"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
