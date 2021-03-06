import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import { Banner } from './../components/Banner/Banner';
import { Image } from './../components/Image/Image';
import colors from '../colors';
import Arrow from '../components/Arrow/Arrow';
import { BodyText } from '../components/BodyText/BodyText';
import { ContentLiftup } from '../components/ContentLiftup/ContentLiftup';
import Element from '../components/Element/Element';
import Layout from '../components/layout';
import { PartBanner } from '../components/PartBanner/PartBanner';
import SEO from '../components/seo';
import { SubHeader } from '../components/SubHeader/SubHeader';
import { TripleBorder } from '../components/TripleBorder/TripleBorder';
import licenceIcon from '../images/by-nc-sa.eu.png';
import calendarIcon from '../images/calendar-60.svg';
import cc from '../images/cc.svg';
import yliopistoLogo from '../images/hgin_yliopisto.png';
import houstonLogo from '../images/houston_logo.png';
import announcement from '../images/ic_announcement_48px.svg';
import starIcon from '../images/ic_stars_48px.svg';
import timerIcon from '../images/ic_timer_48px.svg';
import landingImage from '../images/landing.svg';
import news from '../images/noun_news_1248039.svg';
import telegramIcon from '../images/telegram-logo-png-open-2000.png';

const thingsToKnow = [
  { icon: timerIcon, text: '5-20 tuntia / osa' },
  { icon: calendarIcon, text: 'Deadline 15.12.2018' },
  { icon: starIcon, text: 'Get started' },
];

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        'fullstack',
        'course',
        'helsingin yliopisto',
        'tietojenkäsittelytieteen osasto',
        'mooc',
        'mooc.fi',
        'full stack',
        'web-sovelluskehitys'
      ]}
    />

    <StaticQuery
      query={graphql`
        query {
          allMainJson {
            edges {
              node {
                id
                mainTitle
                intro
                telegram
                current
                notice
                licence
                university
                houston
                contacts
                licenced
              }
            }
          }
        }
      `}
      render={data => {
        const {
          mainTitle,
          intro,
          telegram,
          current,
          notice,
          licence,
          university,
          houston,
          contacts,
          licenced,
        } = data.allMainJson.edges[0].node;

        return (
          <>
            <div className="container spacing--after">
              <Element
                flex
                spaceBetween
                className="col-10 spacing--large frontpage__hero"
                relative
              >
                <SubHeader
                  className="col-10 index__main-title"
                  text={mainTitle}
                  headingLevel="h1"
                />

                <Arrow
                  className="col-10 spacing--after-small col-3--mobile arrow__container--with-link"
                  bold
                  thickBorder
                  link="/about"
                  content={[
                    { backgroundColor: colors['main'], text: 'Aloita kurssi' },
                  ]}
                />

                <BodyText
                  className="col-4 order-1--mobile col-8--mobile link"
                  text={intro}
                />

                <Image
                  contain
                  className="col-4--mobile absolute-top-right--desktop"
                  style={{ margin: 0 }}
                  alt="Stacked cubes with React logo and JavaScript text"
                  src={landingImage}
                />
              </Element>
            </div>

            {false && (
              <Banner>
                <Element flex spaceBetween className="container">
                  <BodyText
                    className="col-10 centered"
                    heading={{ title: 'Things to Know', level: 'h2' }}
                    headingFontSize="1.777rem"
                  />

                  <Element
                    className="col-8 push-right-1 col-10--mobile"
                    flex
                    spaceAround
                  >
                    {thingsToKnow.map(item => {
                      return (
                        <Element
                          key={item.text}
                          centeredInDesktop
                          flex
                          dirColumn
                          className="col-1 col-3--mobile"
                        >
                          <Image contain fullWidth src={item.icon} />
                          <BodyText
                            className="link"
                            centered
                            style={{ paddingTop: '1.666rem' }}
                            text={item.text}
                          />
                        </Element>
                      );
                    })}
                  </Element>
                </Element>
              </Banner>
            )}

            <Element className="container spacing--large spacing--after">
              <Element className="push-right-1 push-left-1" spaceBetween flex>
                <Element flex horizontalHalf flexStart>
                  <Element
                    flex
                    spaceBetween
                    autoBottomMargin
                    className="col-10"
                  >
                    <Image contain small src={news} className="col-1--mobile" />

                    <BodyText
                      className="col-7 col-8--mobile link"
                      heading={{ title: 'Ajankohtaista', level: 'h3' }}
                    />
                  </Element>

                  <BodyText className="spacing--small link" text={current} />

                  {false && (
                    <Element flex spaceBetween className="col-10">
                      <Image
                        contain
                        extraSmall
                        src={telegramIcon}
                        className="col-1--mobile"
                      />

                      <BodyText
                        className="col-8 col-8--mobile link"
                        text={telegram}
                      />
                    </Element>
                  )}

                  {false && (
                    <Element
                      flex
                      spaceBetween
                      className="col-10 spacing--small"
                    >
                      <Image
                        contain
                        extraSmall
                        src={announcement}
                        className="col-1--mobile"
                      />

                      <BodyText
                        className="col-8 col-8--mobile link"
                        text={notice}
                      />
                    </Element>
                  )}
                </Element>

                <Element flex horizontalHalf flexStart>
                  <Element
                    flex
                    spaceBetween
                    autoBottomMargin
                    className="col-10 spacing--mobile"
                  >
                    <Image contain small src={cc} className="col-1--mobile" />

                    <BodyText
                      className="col-7 col-8--mobile"
                      heading={{
                        title: 'Materiaalin tekijä ja lisenssi',
                        level: 'h3',
                      }}
                    />
                  </Element>

                  <BodyText className="spacing--small link" text={licence} />
                </Element>
              </Element>
            </Element>

            <PartBanner />

            {false && (
              <Element className="container spacing--after" flex>
                <Element flex spaceBetween className="col-8 push-right-1">
                  <ContentLiftup
                    small
                    image={{
                      src: yliopistoLogo,
                      alt: 'Helsingin yliopisto logo',
                    }}
                    className="col-2 col-4--mobile"
                  />

                  <ContentLiftup
                    small
                    image={{ src: houstonLogo, alt: 'Houston Inc. logo' }}
                    className="col-2 push-right-2 col-4--mobile"
                  />

                  <ContentLiftup
                    small
                    image={{
                      src: yliopistoLogo,
                      alt: 'Helsingin yliopisto logo',
                    }}
                    className="col-2 push-right-2 col-4--mobile"
                  />

                  <ContentLiftup
                    small
                    image={{ src: houstonLogo, alt: 'Houston Inc. logo' }}
                    className="col-2 col-4--mobile"
                  />

                  <ContentLiftup
                    small
                    image={{
                      src: yliopistoLogo,
                      alt: 'Helsingin yliopisto logo',
                    }}
                    className="col-2 col-4--mobile"
                  />

                  <ContentLiftup
                    small
                    image={{ src: houstonLogo, alt: 'Houston Inc. logo' }}
                    className="col-2 col-4--mobile"
                  />
                </Element>
              </Element>
            )}

            <Element
              flex
              spaceBetween
              className="container col-10 spacing--after"
            >
              <TripleBorder
                largeMargin
                backgroundColor={colors['main']}
                className="col-10 centered--mobile"
              >
                <Element
                  flex
                  spaceAround
                  autoMargin
                  className="col-10 col-8--mobile spacing--small"
                >
                  <div className="col-3 col-10--mobile">
                    <Image
                      contain
                      src={yliopistoLogo}
                      alt="Helsingin Yliopisto logo"
                      className="col-5 col-4--mobile"
                    />

                    <BodyText text={university} />
                  </div>

                  <Element flex spaceBetween className="col-3 col-10--mobile">
                    <Image
                      contain
                      src={houstonLogo}
                      alt="Houston Inc. logo"
                      className="col-4--mobile"
                    />

                    <BodyText className="link" text={houston} />
                  </Element>
                </Element>

                <Element
                  flex
                  spaceAround
                  autoMargin
                  className="spacing--small spacing--after col-10 col-8--mobile centered--mobile"
                >
                  <div className="col-3 col-10--mobile">
                    <BodyText
                      noPadding
                      className="link"
                      style={{ paddingTop: '2.111rem' }}
                      text={contacts}
                    />
                  </div>
                  <div className="col-3 col-10--mobile">
                    <Image
                      contain
                      src={licenceIcon}
                      alt="Creative Commons BY-NC-SA 3.0 -lisenssi"
                      className="col-4--mobile"
                    />

                    <BodyText text={licenced} className="link" />
                  </div>
                </Element>
              </TripleBorder>
            </Element>
          </>
        );
      }}
    />
  </Layout>
);

export default IndexPage;
