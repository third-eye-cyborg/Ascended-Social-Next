import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import Footer from '../components/footer'

const Privacy = (props) => {
  return (
    <>
      <div className="privacy-container">
        <Head>
          <title>Privacy - Ascended Social</title>
          <meta name="description" content="A Soul in All" />
          <meta property="og:title" content="Privacy - Ascended Social" />
          <meta property="og:description" content="A Soul in All" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d52848cc-1569-40eb-8f1a-b208694e0ab9/ee3188c9-ed7f-4103-a5e3-e8b7f4f9c1ed?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="header-root-class-name3"></Header>
        <div className="privacy-container1">
          <div className="privacy-container2">
            <div className="privacy-container3">
              <Script
                html={`<div id="__enzuzo-root"></div><script id="__enzuzo-root-script" src="https://app.enzuzo.com/__enzuzo-privacy-app.js?mode=privacy&apiHost=https://app.enzuzo.com&qt=1703015379993&referral=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXN0b21lcklEIjoxODI3OSwiQ3VzdG9tZXJOYW1lIjoiY3VzdC1FU0RQdHVDSSIsIkN1c3RvbWVyTG9nb1VSTCI6IiIsIlJvbGVzIjpbInJlZmVycmFsIl0sIlByb2R1Y3QiOiJlbnRlcnByaXNlIiwiVmVyc2lvbiI6MCwiaXNzIjoiRW56dXpvIEluYy4iLCJuYmYiOjE3MDMwMTUzNzl9.ZMheWKqIPEeX-Jpbi6ttBVOlb5Cd28XigUlQCnxrAF4"></script>`}
              ></Script>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name5"></Footer>
      </div>
      <style jsx>
        {`
          .privacy-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .privacy-container1 {
            flex: 1;
            width: 100%;
            display: flex;
            margin-top: 100px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .privacy-container2 {
            flex: 1;
            width: 100%;
            height: 100%;
          }
          .privacy-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Privacy
