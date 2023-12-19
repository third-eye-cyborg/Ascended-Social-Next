import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import Footer from '../components/footer'

const Subscription = (props) => {
  return (
    <>
      <div className="subscription-container">
        <Head>
          <title>Subscription - Ascended Social</title>
          <meta name="description" content="A Soul in All" />
          <meta property="og:title" content="Subscription - Ascended Social" />
          <meta property="og:description" content="A Soul in All" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d52848cc-1569-40eb-8f1a-b208694e0ab9/ee3188c9-ed7f-4103-a5e3-e8b7f4f9c1ed?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header rootClassName="header-root-class-name5"></Header>
        <div className="subscription-container1">
          <div className="subscription-container2">
            <div className="subscription-container3">
              <React.Fragment>
                <React.Fragment>
                  <div id="__enzuzo-root" />
                  <Script
                    id="__enzuzo-root-script"
                    src="https://app.enzuzo.com/__enzuzo-privacy-app.js?mode=ssa&apiHost=https://app.enzuzo.com&qt=1703015695094&referral=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXN0b21lcklEIjoxODI3OSwiQ3VzdG9tZXJOYW1lIjoiY3VzdC1FU0RQdHVDSSIsIkN1c3RvbWVyTG9nb1VSTCI6IiIsIlJvbGVzIjpbInJlZmVycmFsIl0sIlByb2R1Y3QiOiJlbnRlcnByaXNlIiwiVmVyc2lvbiI6MCwiaXNzIjoiRW56dXpvIEluYy4iLCJuYmYiOjE3MDMwMTU2OTJ9.3HtfH_hZ2A_cA_5StEFjbTT4b2dunEygglVG9y41T1E"
                  />
                </React.Fragment>
              </React.Fragment>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name7"></Footer>
      </div>
      <style jsx>
        {`
          .subscription-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .subscription-container1 {
            flex: 1;
            width: 100%;
            display: flex;
            margin-top: 100px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .subscription-container2 {
            flex: 1;
            width: 100%;
            height: 100%;
          }
          .subscription-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Subscription
