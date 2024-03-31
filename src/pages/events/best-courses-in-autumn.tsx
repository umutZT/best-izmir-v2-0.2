import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import styles from '../events/best-courses-in-autumn.module.scss';
import Image from 'next/image';
import courseLogo from '../../assets/best-courses-in-autumn/BESTCoursesLogo.png';
import { Row, Col, Tabs, Button, Collapse } from 'antd';
import CourseSchedule from '../../components/BESTCourse/CourseSchedule';
import SurvivalGuide from '../../components/BESTCourse/SurvivalGuide';
import orangeLogo from '../../assets/best-courses-in-autumn/bcia-logo-orange.png';
import applyText from '../../assets/best-courses-in-autumn/applyNowText.png';
import deadlineImg from '../../assets/best-courses-in-autumn/deadline.png';
import mashadIMG from '../../assets/best-courses-in-autumn/mahshad.jpg';
import mericIMG from '../../assets/best-courses-in-autumn/meric-ipekkeser.jpg';
import melikeIMG from '../../assets/best-courses-in-autumn/melike-sahkulubey.jpg';
import zeynepIMG from '../../assets/best-courses-in-autumn/zeynep-demirci.jpg';
import ilaydaIMG from '../../assets/best-courses-in-autumn/ilayda-uyandi.jpg';
import serdarIMG from '../../assets/best-courses-in-autumn/serdar-emin-polat.jpg';
import umutIMG from '../../assets/best-courses-in-autumn/umut-ozturk.jpg';
import gokayIMG from '../../assets/best-courses-in-autumn/gokay.jpg';

const BestCourse = () => {
  const { t } = useTranslation('ac');
  const { Panel } = Collapse;
  const { TabPane } = Tabs;
  return (
    <div>
      /*
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <Image src={courseLogo} placeholder="blur" alt="course-logo" />
         </div>
       </div>
      */
      <div>
        <Row justify="center">
          <Col xs={24} md={24}>
            <Tabs className={styles.tabStyle} defaultActiveKey="1" centered>
              <TabPane className={styles.tabContent} tab="About Course" key="1">
                <div className={styles.courseDescription}>
                  <div className={styles.courseHeader}>
                    <Image src={orangeLogo} alt="bica-logo" />
                  </div>
                  <div className={styles.courseDescriptionText}>
                    <div>
                      <p>{t('courseDescription1')}</p>
                      <p>{t('courseDescription2')}</p>
                      <p>{t('courseDescription3')}</p>
                      <p>{t('courseDescription4')}</p>
                      <p>{t('courseDescription5')}</p>
                      <p>{t('courseDescription6')}</p>
                      <p>{t('courseDescription7')}</p>
                      <p>{t('courseDescription8')}</p>
                      <p>{t('courseDescription9')}</p>
                    </div>
                    <div className={styles.video}>
                      <iframe
                        width="1118"
                        height="629"
                        src="https://www.youtube.com/embed/0RneX_V4zm8"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className={styles.applyImage}>
                      <Image src={applyText} alt="apply-text" />
                    </div>
                    <Button
                      className={styles.applyButton}
                      type="primary"
                      href="https://www.best.eu.org/event/details.jsp?activity=q0ovsau"
                    >
                      Press Here!
                    </Button>
                    <div className={styles.deadlineImage}>
                      <Image src={deadlineImg} alt="deadline-img" />
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane className={styles.tabContent} tab="Schedule" key="2">
                <CourseSchedule />
              </TabPane>
              <TabPane className={styles.tabContent} tab="Survival Guide" key="3">
                <SurvivalGuide />
              </TabPane>
              <TabPane className={styles.tabContent} tab="F.A.Q" key="4">
                <Collapse defaultActiveKey={['1']}>
                  <Panel className={styles.faqPanel} header="What is BEST Course?" key="1">
                    <p>
                      Throughout the four seasons of a year BEST organises courses where students of technology from
                      member universities get the chance to complement their fields of study, discuss educational
                      matters, learn and take their first steps into an international career, increase their
                      international experience, set up contacts, improve their English level and have fun. Each BEST
                      course is attended for about 22 engineering and technology students like you, who have something
                      in common: they want to live a unique experience, different from day-to-day school life! BEST
                      CoursesComplement your knowledge in different fields of studyVisit companies, industrial plants
                      and research centresTake part in case studiesFollow interesting classes covering many different
                      technology fields, economics, marketing and managementReceive ECTS credits in recognised courses
                      In these events, participants attend lectures given by the university&apos;s teaching staff or by
                      experts from companies. At the end of the course students take an exam, which is designed to
                      evaluate the participants&apos; success. A BEST Course is an optimised event and should fulfill
                      these general criteria: provide new knowledge or skills for participants, being taught by
                      professional people. Subtypes are BEST Courses on Technology, BEST Courses on Career Related
                      Skills and BEST Courses on Applied Engineering.
                    </p>
                  </Panel>
                  <Panel className={styles.faqPanel} header="How many students take part in a BEST course?" key="2">
                    <p>It’s usually about 22 people from different countries all over Europe.</p>
                  </Panel>
                  <Panel
                    className={styles.faqPanel}
                    header="When will I find out about being accepted to the BEST course?"
                    key="3"
                  >
                    <p>
                      You will receive an email from the coordinator of your Local BEST group. You can also check for
                      updates on your BEST account
                    </p>
                  </Panel>
                  <Panel className={styles.faqPanel} header="How is the selection for the course done?" key="4">
                    <p>
                      The organising LBG gets all the applications entered by the students and then will decide on
                      regional aspects (they try to get people from all over Europe, so they in general won&apos;t take
                      more than one student from each city/country), on your Motivation Letter (they have to read many
                      of them, so try to be creative!), and maybe on your educational background (only if you need some
                      previous knowledge for this course). The organisers also aim at having equal number of male and
                      female participants.
                    </p>
                  </Panel>
                  <Panel className={styles.faqPanel} header='Being on the "Waiting List" - what does it mean?' key="5">
                    <p>
                      It means you still have a chance of going to the course you applied to. That can happen if someone
                      who has been qualified resigns.
                    </p>
                  </Panel>
                  <Panel className={styles.faqPanel} header="What is the BEST Spirit?" key="6">
                    <p>Well the BEST answer to that is to experience it... so go and apply now!</p>
                  </Panel>
                  <Panel
                    className={styles.faqPanel}
                    header="Can I apply for the BEST course if i have problems in English?"
                    key="7"
                  >
                    <p>
                      If you have problems to understand English it will be quite hard for you to take part in a course
                      because participants will be from different countries in Europe so the language which will be used
                      for communication is English.
                    </p>
                  </Panel>
                  <Panel
                    className={styles.faqPanel}
                    header="What is the fee for a BEST Course in Izmir?
"
                    key="8"
                  >
                    <p>The fee is 64 Euro.</p>
                  </Panel>

                  <Panel
                    className={styles.faqPanel}
                    header="Do you have any concept for your course?
"
                    key="10"
                  >
                    <p>
                      Of course we do! The concept of our course is the Cars from Pixar Animation Studios.
                    </p>
                  </Panel>
                  <Panel
                    className={styles.faqPanel}
                    header="Why should i apply to your Course?
"
                    key="11"
                  >
                    <p>
                      Saying goodbye to McQueen and his friends is not  easy at all, and they will always
                      remain in our memories, but technology is developing rapidly and it is time to get 
                      acquainted with the world of electric cars. In this course, you can increase your 
                      knowledge in this field without needing prior knowledge. So there's never been a better 
                      time to equip yourself with the skills and insights needed to thrive in this dynamic 
                      industry. Whether you're studying engineering or simply have a passion for sustainable 
                      technology, this course will provide invaluable insights and practical knowledge that will 
                      be so helpful for you in today’s world.
                    </p>
                  </Panel>
                  <Panel
                    className={styles.faqPanel}
                    header="What to do if I have more questions?
"
                    key="12"
                  >
                    <p>Don’t hesitate to contact us!</p>
                    <p>By emails:</p>
                    <p>izmir@best-eu.org</p>
                    <p>Main organizer: mahshad.ramezanabady@best-eu.org</p>
                    <p>Pax Responsibles: melike.sahkulubey@best-eu.org meric.ipekkesen@best-eu.org</p>
                  </Panel>
                </Collapse>
              </TabPane>
              <TabPane className={styles.tabContent} tab="Core Team" key="9">
                <div className={styles.teamImgContainer}>
                  <div>
                    <div className={styles.memberImg}>
                      <Image src={mahshadIMG} alt="mahshad-img" />

                      <h2>Mahshad Ramezanabady</h2>
                      <h3>Main Organizer</h3>
                    </div>
                  </div>

                  <div className={styles.multiMember}>
                    <Row gutter={32}>
                      <Col>
                        <div className={styles.multiMemberImg}>
                          <Image src={mericIMG} alt="meric-img" />
                          <h2>Meriç İpekkeser</h2>
                        </div>
                      </Col>
                      <Col>
                        <div className={styles.multiMemberImg}>
                          <Image src={melikeIMG} alt="melike-img" />
                          <h2>Melike Şahkulubey</h2>
                        </div>
                      </Col>
                    </Row>

                    <h3>Pax Responsibles</h3>
                  </div>

                  <div className={styles.memberImg}>
                    <Image src={zeynepIMG} alt="zeynep-img" />
                    <h2>Zeynep Demirci</h2>
                    <h3>PR Responsible</h3>
                  </div>

                  <div className={styles.memberImg}>
                    <Image src={gokayIMG} alt="gokay-img" />
                    <h2>Gökay Kömürcü</h2>
                    <h3>Academic Responsible</h3>
                  </div>
                 
                  <div className={styles.memberImg}>
                    <Image src={ilaydaIMG} alt="ilayda-img" />
                    <h2>İlayda Uyandı</h2>
                    <h3>Activity Responsible</h3>
                  </div>

                  <div className={styles.memberImg}>
                    <Image src={serdarIMG} alt="serdar-img" />
                    <h2>Serdar Emin Polat</h2>
                    <h3>Food Responsible</h3>
                  </div>

                  <div className={styles.memberImg}>
                    <Image src={umutIMG} alt="umut-img" />
                    <h2>Umut Öztürk</h2>
                    <h3>FR&Logistic Responsible</h3>
                  </div>
                </div>

                
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale = 'en' }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages', 'ac'])) },
});

export default BestCourse;
