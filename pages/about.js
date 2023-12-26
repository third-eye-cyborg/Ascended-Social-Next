import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Ascended Social</title>
          <meta name="description" content="A Soul in All" />
          <meta property="og:title" content="About - Ascended Social" />
          <meta property="og:description" content="A Soul in All" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d52848cc-1569-40eb-8f1a-b208694e0ab9/ee3188c9-ed7f-4103-a5e3-e8b7f4f9c1ed?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header></Header>
        <div className="about-container1">
          <div className="about-main">
            <div className="about-container2">
              <h1 className="about-text">
                <span>About Us</span>
                <br></br>
              </h1>
              <h1 className="about-text3">Third Eye Cyborg</h1>
              <p className="about-text4">
                <span>
                  You can learn more about Third Eye Cyborg on our website or
                  subscribe to our newsletter.
                </span>
                <br></br>
              </p>
              <div className="about-container3">
                <Link href="/waiting-list">
                  <a className="about-link">
                    <SecondaryButton
                      button="Subscribe"
                      rootClassName="secondary-button-root-class-name"
                      className="about-component1"
                    ></SecondaryButton>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .about-container1 {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .about-main {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: relative;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/new%20project%20(12).svg');
          }
          .about-container2 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            z-index: 2;
            position: relative;
            align-self: flex-end;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            margin-left: var(--dl-space-space-tripleunit);
            padding-top: var(--dl-space-space-tripleunit);
            border-color: #980bd8;
            border-width: 1px;
            margin-right: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius40);
            margin-bottom: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.71) 1%,
              rgba(0, 0, 0, 0.91) 100%
            );
          }
          .about-text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(
              310deg,
              rgb(121, 40, 202),
              rgb(255, 0, 128)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .about-text3 {
            color: #ffffff;
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-text4 {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-container3 {
            gap: 20;
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-link {
            display: contents;
          }
          .about-component1 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .about-container1 {
              background-size: auto;
            }
            .about-main {
              justify-content: flex-start;
            }
            .about-container2 {
              width: 70%;
              align-self: flex-start;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-tripleunit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .about-container2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .about-container2 {
              margin-top: 120px;
            }
            .about-container3 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
