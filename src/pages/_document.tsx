/* eslint-disable react/no-danger */
import { extractCritical } from '@emotion/server';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { GoogleFonts } from 'nextjs-google-fonts/GoogleFonts';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    styles: JSX.Element;
    html: string;
    head?: (JSX.Element | null)[] | undefined;
  }> {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    };
  }

  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head> {GoogleFonts()} </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
