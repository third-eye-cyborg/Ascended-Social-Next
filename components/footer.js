import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-container">
          <div className="footer-container1">
            <Link href="/">
              <a className="footer-link">
                <span>Ascended Social</span>
                <br></br>
              </a>
            </Link>
            <span>
              Copyright © 2023 Ascended Social by Third Eye Cyborg, LLC.
            </span>
          </div>
          <div className="footer-container2">
            <div className="footer-container3">
              <span className="footer-text3 Large">Company</span>
              <Link href="/about">
                <a className="footer-link01 Large">About Us</a>
              </Link>
              <Link href="/about">
                <a className="footer-link02 Large">Contact Us</a>
              </Link>
              <a
                href="https://ascended.social/#partners"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-text4 Large"
              >
                Partners
              </a>
              <Link href="/waiting-list">
                <a className="footer-link03 Large">Waiting-list</a>
              </Link>
              <a
                href="https://twitter.com/ThirdEyeCyborg"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-text6 Large"
              >
                Twitter
              </a>
            </div>
            <div className="footer-container4">
              <span className="footer-text7 Large">Legal</span>
              <Link href="/terms">
                <a className="footer-link04 Large">Terms</a>
              </Link>
              <Link href="/privacy">
                <a className="footer-link05 Large">Privacy</a>
              </Link>
              <Link href="/eula">
                <a className="footer-link06 Large">EULA</a>
              </Link>
              <Link href="/dsar">
                <a className="footer-link07 Large">DSAR</a>
              </Link>
              <Link href="/do-not-sell">
                <a className="footer-link08 Large">Do Not Selll</a>
              </Link>
              <Link href="/subscription">
                <a className="footer-link09 Large">Subscription</a>
              </Link>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGFic3RyYWN0fGVufDB8fHx8MTcwMTU0Njk1OXww&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="footer-image"
        />
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #141727, #3a416f);
          }
          .footer-container {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            max-width: 1320px;
            justify-content: space-between;
          }
          .footer-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-container2 {
            display: flex;
            justify-content: space-between;
          }
          .footer-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text3 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-link01 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link01:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-link02 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link02:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text4 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-text4:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-link03 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link03:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text6 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-text6:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .footer-text7 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-link04 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link04:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-link05 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link05:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-link06 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link06:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-link07 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link07:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-link08 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link08:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-link09 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link09:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: absolute;
            object-fit: cover;
          }
          .footer-root-class-name {
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(102, 13, 95, 0.93) 99%
            );
          }
          .footer-root-class-name1 {
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(102, 13, 95, 0.93) 99%
            );
          }
          .footer-root-class-name2 {
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(102, 13, 95, 0.93) 99%
            );
          }
          .footer-root-class-name3 {
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(102, 13, 95, 0.93) 99%
            );
          }
          .footer-root-class-name4 {
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(102, 13, 95, 0.93) 99%
            );
          }
          .footer-root-class-name5 {
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(102, 13, 95, 0.93) 99%
            );
          }
          .footer-root-class-name6 {
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(102, 13, 95, 0.93) 99%
            );
          }
          .footer-root-class-name7 {
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(102, 13, 95, 0.93) 99%
            );
          }
          .footer-root-class-name8 {
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(102, 13, 95, 0.93) 99%
            );
          }
          @media (max-width: 991px) {
            .footer-container {
              padding: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .footer-container {
              flex-direction: column;
            }
            .footer-container1 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .footer-container4 {
              margin-left: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
