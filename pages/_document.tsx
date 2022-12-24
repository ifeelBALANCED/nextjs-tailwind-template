import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='scroll-smooth'>
        <Head>
          <meta name='msapplication-TileColor' content='#000000' />
          <meta name='theme-color' media='(prefers-color-scheme: light)' content='#fff' />
          <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#000' />
        </Head>
        <body className='bg-white text-black antialiased dark:bg-gray-900 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
