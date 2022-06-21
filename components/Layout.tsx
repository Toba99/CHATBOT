import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import dynamic from 'next/dynamic'

const WindowHeight = dynamic(() => import('../components/WindowHeight'), {
  ssr: false,
})

const Layout = ({ page, title, children }) => {
  return (
    <WindowHeight>
      {(windowHeight) => {
        return (
          <>
            <Head>
              <title>Lara Luxury | {title}</title>
              <link
                rel="icon"
                href="https://storage.cloud.google.com/web_don/laraluxury/public/image/lara_logo.jpeg"
              />
              <script src="https://js.paystack.co/v1/inline.js" />
            </Head>
            
            <Header page={page} />
         
            {children}
            <Footer />
            <style
              // @ts-ignore
              jsx
              global
            >
              {`
                #__next {
                  display: flex;
                  flex-direction: column;
                  min-height: ${windowHeight}px;
                }
              `}
            </style>
          </>
        )
      }}
    </WindowHeight>
  )
}

export default Layout
