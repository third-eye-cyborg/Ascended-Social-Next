import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'

const Home = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Ascended Social</title>
          <meta name="description" content="A Soul in All" />
          <meta property="og:title" content="Ascended Social" />
          <meta property="og:description" content="A Soul in All" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d52848cc-1569-40eb-8f1a-b208694e0ab9/c865025f-e606-4aba-bee6-2005859ef418?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Header></Header>
        <div className="home-container01">
          <div className="home-container02">
            <div className="home-container03">
              <Script
                html={`<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-ecfdd8b9-f909-4f21-a251-fbb82436dbc0" data-elfsight-app-lazy></div>`}
              ></Script>
            </div>
          </div>
        </div>
        <div className="home-hero">
          <div className="home-container04">
            <div className="home-card">
              <h1 className="home-text">
                <span>Ascended Social</span>
                <br></br>
              </h1>
              <h2 className="home-text03">
                <span>Elevate Above the Noise</span>
                <br></br>
              </h2>
              <span className="home-text06">
                Ascended Social is a spiritual social app that allows you to
                make new connections, bridge the gap in your knowledge, build
                valuable skills, and create experiences of a lifetime. Focus on
                the positive side of social media and give yourself a break from
                the problems of the world. Sign-up for our waiting-list and get
                early-access. 
              </span>
              <div className="home-container05">
                <div className="home-container06">
                  <Link href="/contact">
                    <a className="home-link">
                      <PrimaryPinkButton
                        button="Contact"
                        className="home-component01"
                      ></PrimaryPinkButton>
                    </a>
                  </Link>
                </div>
                <a href="#learn" className="home-link1">
                  <OutlineGrayButton
                    button="read more"
                    className="home-component02"
                  ></OutlineGrayButton>
                </a>
              </div>
            </div>
            <img
              alt="image"
              src="/new%20project%20(8).svg"
              className="home-image"
            />
          </div>
        </div>
        <section className="home-features">
          <FeatureCard
            text="Expand your ideas"
            title="Components"
            new_prop="Imagine"
            image_src="/cube1.svg"
          >
            <div className="home-div">
              <lottie-player
                src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/d52848cc-1569-40eb-8f1a-b208694e0ab9/660af343-1824-4f0f-be59-91632e15a5f4"
                loop
                speed="1"
                autoplay
                background="transparent"
              ></lottie-player>
            </div>
          </FeatureCard>
          <FeatureCard
            text="Master your craft"
            new_prop="Share"
            image_src="/person1.svg"
          >
            <div className="home-div1">
              <lottie-player
                src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/d52848cc-1569-40eb-8f1a-b208694e0ab9/882ecd9a-49d6-461b-8735-af108e12abdb"
                loop
                speed="1"
                autoplay
                background="transparent"
              ></lottie-player>
            </div>
          </FeatureCard>
          <FeatureCard
            text="Suprise yourself"
            title="Less Code"
            new_prop="Succeed"
            image_src="/rocket1.svg"
          >
            <div className="home-div2">
              <lottie-player
                src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/d52848cc-1569-40eb-8f1a-b208694e0ab9/1014b471-acd1-4412-8a90-05364b40a20c"
                loop
                speed="1"
                autoplay
                background="transparent"
              ></lottie-player>
            </div>
          </FeatureCard>
          <FeatureCard
            text="Gain fulfillment "
            title="Fully Responsive"
            new_prop="Celebrate"
            image_src="/credit%20card1.svg"
          >
            <div className="home-div3">
              <lottie-player
                src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/d52848cc-1569-40eb-8f1a-b208694e0ab9/4610eb09-e853-4255-a270-452cd4c0dfd8"
                loop
                speed="1"
                autoplay
                background="transparent"
              ></lottie-player>
            </div>
          </FeatureCard>
        </section>
        <section id="learn" className="home-container07">
          <div className="home-container08">
            <h1 className="home-text07">
              <span>Gain Spiritual Knowledge and Wisdom</span>
              <br></br>
            </h1>
            <span className="home-text10">
              Humanity is only as strong as it&apos;s weakest link. Let&apos;s
              help each other rise up and continue to accomplish our
              achievements through unity and love.
            </span>
          </div>
          <div className="home-container09">
            <div className="home-container10">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAxMzI0MTE0fDA&amp;ixlib=rb-4.0.3&amp;w=1100"
                className="home-image1"
              />
              <span className="home-text11 Small">
                <span className="home-text12">
                  We are each other&apos;s support
                </span>
                <span>so let&apos;s start with kindness.</span>
                <br></br>
              </span>
              <div className="home-container11">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAxMzI0MTE0fDA&amp;ixlib=rb-4.0.3&amp;w=1000"
                  className="home-image2"
                />
              </div>
            </div>
            <div className="home-container12">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1577344718665-3e7c0c1ecf6b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAxMzI0MTE0fDA&amp;ixlib=rb-4.0.3&amp;w=1100"
                className="home-image3"
              />
              <div className="home-container13">
                <h3 className="HeadingTwo">Meditate on it</h3>
                <p>
                  <br></br>
                  <span>
                    Ascended Social is all about your choice. We want to promote
                    the you that you already are. Whether you are on a learning
                    journey or are a seasoned guru, you have the center stage.
                    This platform is all about promoting your positive messages.
                    Frequency is everything and other social media can be so
                    negative, we strive to help make social media healthier by
                    having our content based on positivity. The more positive a
                    post the more popular it gets on our platform, just as
                    simple as that. The best part is that you, the user, choose
                    how positive or negative a post is via voting on it&apos;s
                    aura. The posts with a positive aura go up and the negative
                    aura posts go down. You can reverse the order if you are
                    feeling edgy.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    We envision a digital space that evolves and grows like a
                    spirit in the darkness. The more people share, chat, laugh,
                    watch, hear, and connect on our platform the more it will
                    give back and spread those good vibrations into the world.
                    We strive to be a beacon of light in dark times. Because of
                    this we will always be looking for ways to improve and
                    become better. If you have feedback, please don&apos;t
                    hesitate to contact us and let us know. 
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-testimonials">
          <div className="home-container14">
            <div className="home-container15">
              <div className="home-div4">
                <lottie-player
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/d52848cc-1569-40eb-8f1a-b208694e0ab9/dd0002dc-ccf4-4701-bdcb-6c364462561f"
                  loop
                  speed="1"
                  autoplay
                  background="transparent"
                ></lottie-player>
              </div>
            </div>
            <div id="partners" className="home-card1">
              <h1 className="home-text23">
                <span>Partner with us</span>
                <br></br>
              </h1>
              <span className="home-text26">
                <span className="home-text27">
                  We would love for you to be a part of our partner program.
                  Create memberships and get paid for your content. Monetize
                  your hard work and build an engaging community of followers
                  and fans. Here&apos;s how it works:
                </span>
                <br className="home-text28"></br>
                <br className="home-text29"></br>
                <span className="home-text30">
                  First, you pay $5.00 per month or $50.00 for a year to become
                  a premium user.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text31"></br>
                <br className="home-text32"></br>
                <span className="home-text33">
                  Then you create a subscription plan, choose a pricing
                  structure, and define your purpose for your members to
                  subscribe to. After that you can lock posts behind a paywall
                  that only paid members can get past.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text34"></br>
                <br className="home-text35"></br>
                <span className="home-text36">
                  As long as you continue to pay for your premium account, you
                  can keep all of your profits minus the costs associated to the
                  transaction, taxes, and other minor applicable fees, learn
                  more.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text37"></br>
                <br className="home-text38"></br>
                <span className="home-text39">
                  We make our money on through the premium account payment you
                  make, so we don&apos;t cut into your profit, giving you a
                  platform that scales to your audience not your bank account.
                </span>
                <br className="home-text40"></br>
                <br className="home-text41"></br>
                <span className="home-text42">
                  All applicants must apply first. All applications will not be
                  accepted. We reserve the right to deny an application for any
                  reason. Rules, restrictions, and other conditions apply, learn
                  more.
                </span>
                <br></br>
              </span>
              <div className="home-container16">
                <div className="home-container17">
                  <Link href="/contact">
                    <a className="home-link2">
                      <PrimaryPinkButton
                        button="Contact"
                        className="home-component07"
                      ></PrimaryPinkButton>
                    </a>
                  </Link>
                </div>
                <a href="#learn more" className="home-link3">
                  <OutlineGrayButton
                    button="read more"
                    className="home-component08"
                  ></OutlineGrayButton>
                </a>
              </div>
            </div>
            <div className="home-logos"></div>
          </div>
          <img
            alt="image"
            src="/bottom.svg"
            className="home-bottom-wave-image"
          />
          <img
            alt="image"
            src="/new%20project%20(11).svg"
            className="home-image4"
          />
          <img alt="image" src="/top.svg" className="home-top-wave-image" />
        </section>
        <section id="learn more" className="home-contaier">
          <div className="home-container18">
            <h2 className="home-text44 HeadingTwo">
              We are Here for You to Discover
            </h2>
            <h3 className="home-text45 HeadingTwo">
              <span className="home-text46">
                Find New Spiritual Enlightenment
              </span>
              <br></br>
            </h3>
            <span className="home-text48">
              Get inspired or be inspiring, either way, Ascended Social is there
              for you.
            </span>
          </div>
          <div className="home-container19">
            <div className="home-container20">
              <div className="home-container21">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAxMzI0MTE0fDA&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="home-image5"
                />
              </div>
              <div className="home-container22">
                <h1 className="home-text49 HeadingOne">Find Your Soul</h1>
                <span className="home-text50">
                  Join our Newsletter for updates, news, releases, promotions,
                  and more.
                </span>
                <Link href="/waiting-list">
                  <a className="home-link4">
                    <OutlineBlackButton
                      button="Subscribe"
                      className="home-component09"
                    ></OutlineBlackButton>
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-container23">
              <ListItem
                new_prop="Deeper Awarness"
                description="Find a teacher that will teach you what you actually want to know."
              ></ListItem>
              <ListItem
                title="2. Performance Analyze"
                new_prop="Higher Perspective"
                description="Find students who actually want to listen and are ready to learn."
              ></ListItem>
              <ListItem
                title="3. Social Conversions"
                new_prop="Spiritual Growth"
                description="Create deep and meaningful community relationships that last forever."
              ></ListItem>
            </div>
          </div>
          <div className="home-divider"></div>
          <div className="home-container24">
            <div className="home-container25">
              <ListItem
                title="1. Always in Sync"
                new_prop="Spiritual Leaders"
                description="Get past the chaos of other social apps and move to the top."
              ></ListItem>
              <ListItem
                title="2. Work With Any Team"
                new_prop="Spiritual Followers"
                description="Find the content you have been waiting for. "
              ></ListItem>
              <ListItem
                title="3. A Productivity Platform"
                new_prop="Oracle Advice"
                description="If we can't find what you want, try our oracle random recommender to give you something truly from the universe."
              ></ListItem>
            </div>
            <div className="home-container26">
              <div className="home-container27"></div>
              <div className="home-container28">
                <h1 className="home-text51">
                  <span>Get on our waiting-list</span>
                  <br></br>
                </h1>
                <span className="home-text54">Sign-up for early access</span>
                <Link href="/waiting-list">
                  <a className="home-link5">
                    <OutlineBlackButton
                      button="Register"
                      className="home-component16"
                    ></OutlineBlackButton>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-container01 {
            top: 0px;
            flex: 1;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container02 {
            width: 100%;
            z-index: 100;
            margin-left: 100px;
            margin-right: 100px;
          }
          .home-container03 {
            display: contents;
          }
          .home-hero {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-container04 {
            width: 100%;
            height: 961px;
            display: flex;
            position: relative;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-card {
            flex: 0 0 auto;
            width: 50%;
            height: 531px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: 40px;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .home-text {
            font-size: 32px;
            text-align: center;
            background-image: linear-gradient(
              310deg,
              rgb(121, 40, 202),
              rgb(255, 0, 128)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text03 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .home-text06 {
            color: var(--dl-color-secondary-600);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .home-container05 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-container06 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-link {
            display: contents;
          }
          .home-component01 {
            text-decoration: none;
          }
          .home-link1 {
            display: contents;
          }
          .home-component02 {
            text-decoration: none;
          }
          .home-image {
            top: 0px;
            right: 0px;
            width: auto;
            bottom: 0px;
            height: 925px;
            position: absolute;
            object-fit: cover;
            margin-left: 77px;
            object-position: center;
            border-bottom-left-radius: 10rem;
          }
          .home-features {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-div {
            width: 50px;
            height: 50px;
          }
          .home-div1 {
            width: 50px;
            height: 50px;
          }
          .home-div2 {
            width: 50px;
            height: 50px;
          }
          .home-div3 {
            width: 50px;
            height: 50px;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-container08 {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .home-text07 {
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(
              310deg,
              rgb(121, 40, 202),
              rgb(255, 0, 128)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text10 {
            color: rgb(103, 116, 142);
            max-width: 600px;
            text-align: center;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-halfunit);
            background-color: rgb(255, 255, 255);
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unitandahalfunit);
            margin-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image1 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            object-fit: cover;
            margin-left: 3rem;
            margin-right: -3rem;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-text11 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            border-color: #cb0c9f;
            border-style: solid;
            border-width: 1px;
            border-radius: 0.25rem;
            margin-bottom: 8rem;
            padding-right: 1rem;
            flex-direction: column;
          }
          .home-text12 {
            color: #cb0c9f;
            background-color: rgb(255, 255, 255);
          }
          .home-container11 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image2 {
            top: 0px;
            left: auto;
            width: 90%;
            bottom: auto;
            display: block;
            position: absolute;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: -1.5rem;
            object-fit: cover;
            margin-left: 2rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .home-image3 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 8rem;
            object-fit: cover;
            margin-left: -1.5rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container13 {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-testimonials {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: 15rem;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: 15rem;
            justify-content: space-between;
          }
          .home-container15 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
          }
          .home-div4 {
            width: 500px;
            height: 500px;
          }
          .home-card1 {
            flex: 0 0 auto;
            width: 50%;
            height: 1020px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: 40px;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .home-text23 {
            text-align: center;
            background-image: linear-gradient(
              310deg,
              rgb(121, 40, 202),
              rgb(255, 0, 128)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text26 {
            color: var(--dl-color-secondary-600);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .home-container16 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-container17 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-link2 {
            display: contents;
          }
          .home-component07 {
            text-decoration: none;
          }
          .home-link3 {
            display: contents;
          }
          .home-component08 {
            text-decoration: none;
          }
          .home-logos {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-bottom-wave-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -5px;
            z-index: 1;
            position: absolute;
            object-fit: cover;
          }
          .home-image4 {
            top: auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-top-wave-image {
            top: -5px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-contaier {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-container18 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text44 {
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text45 {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text46 {
            background-color: rgb(255, 255, 255);
          }
          .home-text48 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            background-color: rgb(255, 255, 255);
          }
          .home-container19 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container20 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-position: center;
          }
          .home-container20:hover {
            transform: scale(1.04);
          }
          .home-container21 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .home-image5 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius5);
          }
          .home-container22 {
            width: 358px;
            display: flex;
            padding: 40px;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(72, 72, 72, 0.51);
          }
          .home-text49 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text50 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-link4 {
            display: contents;
          }
          .home-component09 {
            text-decoration: none;
          }
          .home-container23 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-divider {
            flex: 0 0 auto;
            width: 90%;
            height: 1px;
            display: flex;
            opacity: 0.25;
            margin-top: 4rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: 4rem;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container25 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-container26 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('/new%20project%20(15)-1400w.webp');
          }
          .home-container26:hover {
            transform: scale(1.04);
          }
          .home-container27 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .home-container28 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text51 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text54 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-link5 {
            display: contents;
          }
          .home-component16 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-container04 {
              max-width: 960px;
            }
            .home-card {
              width: 100%;
            }
            .home-features {
              max-width: 960px;
            }
            .home-container07 {
              max-width: 960px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container08 {
              max-width: 80%;
            }
            .home-text10 {
              text-align: center;
            }
            .home-text11 {
              width: 50%;
            }
            .home-container14 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              justify-content: center;
            }
            .home-container15 {
              align-items: center;
            }
            .home-card1 {
              width: 100%;
            }
            .home-logos {
              display: none;
            }
            .home-contaier {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container23 {
              width: 45%;
              margin-left: var(--dl-space-space-unit);
            }
            .home-container25 {
              width: 45%;
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .home-card {
              align-items: center;
            }
            .home-text06 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-image {
              display: none;
            }
            .home-features {
              max-width: 720px;
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-unitandahalfunit);
              padding-right: var(--dl-space-space-unitandahalfunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container07 {
              max-width: 720px;
            }
            .home-container09 {
              align-items: center;
              flex-direction: column;
            }
            .home-container10 {
              width: 80%;
            }
            .home-image1 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-text11 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-image2 {
              display: none;
            }
            .home-container12 {
              width: 80%;
            }
            .home-image3 {
              display: none;
            }
            .home-container14 {
              padding-top: 12rem;
              padding-bottom: 12rem;
            }
            .home-card1 {
              align-items: center;
            }
            .home-text26 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text27 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text28 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text29 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text30 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text31 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text32 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text33 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text34 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text35 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text36 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text37 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text38 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text39 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text40 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text41 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text42 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-container18 {
              width: 80%;
            }
            .home-text48 {
              text-align: center;
            }
            .home-container19 {
              flex-direction: column;
            }
            .home-container23 {
              width: 80%;
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              margin-left: 0px;
            }
            .home-divider {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container24 {
              margin-top: 0px;
              flex-direction: column;
            }
            .home-container25 {
              width: 80%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              height: auto;
              align-items: flex-start;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 6px;
            }
            .home-container04 {
              flex: 1;
              width: auto;
              height: auto;
              max-width: auto;
              margin-top: 120px;
              min-height: auto;
              align-items: center;
              margin-left: 20px;
              margin-right: 20px;
              justify-content: flex-start;
            }
            .home-card {
              flex: 1;
              width: auto;
              height: auto;
              padding: 0px;
              margin-top: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-text {
              padding-left: 20px;
              padding-right: 20px;
            }
            .home-text03 {
              margin-left: 20px;
              margin-right: 20px;
            }
            .home-text06 {
              padding-left: 20px;
              padding-right: 20px;
            }
            .home-container05 {
              align-items: center;
              flex-direction: column;
            }
            .home-container06 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-features {
              width: 100%;
            }
            .home-container14 {
              flex-wrap: wrap;
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-card1 {
              padding: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-container16 {
              align-items: center;
              flex-direction: column;
            }
            .home-container17 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text48 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
