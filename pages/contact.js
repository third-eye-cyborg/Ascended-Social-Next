import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Footer from '../components/footer'
import Header from '../components/header'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Ascended Social</title>
          <meta name="description" content="A Soul in All" />
          <meta property="og:title" content="Contact - Ascended Social" />
          <meta property="og:description" content="A Soul in All" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d52848cc-1569-40eb-8f1a-b208694e0ab9/ee3188c9-ed7f-4103-a5e3-e8b7f4f9c1ed?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="contact-contact">
          <div className="contact-container01">
            <div className="contact-form">
              <h2 className="contact-text HeadingOne">Drop us a line!</h2>
              <span className="contact-text1 Lead">
                We&apos;d love to talk with you.
              </span>
              <div className="contact-container02">
                <div className="contact-container03">
                  <Script
                    html={`<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-3e89cdb4-d942-4a25-89af-f33f39459b3b" data-elfsight-app-lazy></div>`}
                  ></Script>
                </div>
              </div>
              <div className="contact-container04">
                <div className="contact-container05"></div>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-container06">
                <h3 className="HeadingTwo">
                  <span>
                    Contact
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Information</span>
                </h3>
                <span className="contact-text5">
                  Fill out the form and we will get back to you within 24 hours.
                </span>
                <div className="contact-container07">
                  <div className="contact-container08">
                    <svg viewBox="0 0 1024 1024" className="contact-icon">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <a
                      href="mailto:hello@creative-tim.com?subject="
                      className="contact-link"
                    >
                      contact@ascended.social
                    </a>
                  </div>
                </div>
                <div className="contact-container09">
                  <a
                    href="https://www.facebook.com/thirdeyecyborg.tec/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contact-link1"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="contact-icon2"
                    >
                      <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/ThirdEyeCyborg"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contact-link2"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="contact-icon4"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/thirdeyecyborg/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contact-link3"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="contact-icon6"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <img alt="image" src="/wave-1.svg" className="contact-image" />
              <div className="contact-container10"></div>
            </div>
          </div>
        </div>
        <Footer></Footer>
        <Header></Header>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .contact-contact {
            width: 100%;
            max-width: 1320px;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .contact-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: row;
            background-color: var(--dl-color-gray-white);
          }
          .contact-form {
            flex: 5;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .contact-text {
            color: var(--dl-color-secondary-500);
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-text1 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .contact-container02 {
            width: 100%;
            height: 600px;
          }
          .contact-container03 {
            display: contents;
          }
          .contact-container04 {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-container05 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
          }
          .contact-info {
            flex: 4;
            color: var(--dl-color-gray-white);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-sixunits);
            border-radius: 0px;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/curved5-1400w.webp');
            border-top-right-radius: var(--dl-radius-radius-radius1);
            border-bottom-right-radius: var(--dl-radius-radius-radius1);
          }
          .contact-container06 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            z-index: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text5 {
            opacity: 0.8;
          }
          .contact-container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .contact-container08 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .contact-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .contact-link {
            opacity: 0.8;
            text-decoration: none;
          }
          .contact-container09 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contact-link1 {
            display: contents;
          }
          .contact-icon2 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .contact-link2 {
            display: contents;
          }
          .contact-icon4 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .contact-link3 {
            display: contents;
          }
          .contact-icon6 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .contact-image {
            top: 0px;
            left: -1px;
            right: auto;
            width: 100px;
            height: 100%;
            z-index: 2;
            position: absolute;
            object-fit: cover;
          }
          .contact-container10 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            opacity: 0.9;
            position: absolute;
            background-size: cover;
            background-image: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.74) 0%,
                rgba(55, 37, 149, 0.6) 100%
              ),
              url('https://images.unsplash.com/photo-1638726225350-862b392257d5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExM3x8c291bHxlbnwwfHx8fDE3MDIwMTU3NDB8MA&ixlib=rb-4.0.3&w=1400');
          }
          @media (max-width: 991px) {
            .contact-container01 {
              flex-direction: column;
            }
            .contact-container02 {
              flex: 1;
              height: unset;
            }
            .contact-info {
              padding-left: 0px;
              border-top-right-radius: 0;
              border-bottom-left-radius: var(--dl-radius-radius-radius1);
            }
            .contact-image {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .contact-contact {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .contact-form {
              padding-top: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 479px) {
            .contact-contact {
              margin-top: 120px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
