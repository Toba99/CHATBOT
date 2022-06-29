import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import dynamic from 'next/dynamic'

const WindowHeight = dynamic(() => import('../components/WindowHeight'), {
  ssr: false,
})

const Layout = ({ login, title, children }:{login : boolean ; title: string; children: any}) => {
  return (
    <WindowHeight>
      {(windowHeight) => {
        return (
          <>
            <Head>
              <title>Julia | {title}</title>
             
              <script src="https://js.paystack.co/v1/inline.js" />
            </Head>
            
            <Header login={login} />
         
            {children}
            <Footer />
            <style
              // @ts-ignore
              jsx
              global
            >
              {`
                #__next {
                  background-color:rgba(170,225,255,255);
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
