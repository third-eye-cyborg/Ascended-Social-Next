import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import Footer from '../components/footer'

const WaitingList = (props) => {
  return (
    <>
      <div className="waiting-list-container">
        <Head>
          <title>Waiting-list - Ascended Social</title>
          <meta name="description" content="A Soul in All" />
          <meta property="og:title" content="Waiting-list - Ascended Social" />
          <meta property="og:description" content="A Soul in All" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d52848cc-1569-40eb-8f1a-b208694e0ab9/ee3188c9-ed7f-4103-a5e3-e8b7f4f9c1ed?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="header-root-class-name6"></Header>
        <div className="waiting-list-container1">
          <div className="waiting-list-container2">
            <div className="waiting-list-container3">
              <React.Fragment>
                <React.Fragment>
                  <Script
                    src="https://static.elfsight.com/platform/platform.js"
                    data-use-service-core=""
                    defer={true}
                  />
                  <div
                    className="elfsight-app-8b700dc9-eb5c-4085-bc35-281f7885c32a"
                    data-elfsight-app-lazy=""
                  />
                </React.Fragment>
              </React.Fragment>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name8"></Footer>
      </div>
      <style jsx>
        {`
          .waiting-list-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .waiting-list-container1 {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            margin-top: 100px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .waiting-list-container2 {
            flex: 1;
            width: 100%;
            z-index: 100;
            align-self: center;
          }
          .waiting-list-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default WaitingList
