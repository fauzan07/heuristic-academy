import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Timetable from "./time-table";
import Zakaatcalculator from "./zakaat-calculator";
import Link from "next/link";
import Image from "next/image";
import styles from "./ramdan.module.scss";
const Index = () => {
  return (
    <>
      <section className={`${styles["main"]} py-4`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="text-center">RAMADAN TIMETABLE 2024</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles["dua"]} py-4`}>
        <Container>
          <Row>
            <h6 className="mb-4">
              THE HOLY MONTH OF RAMADAN IS ALMOST UPON US; ONCE AGAIN, IT IS
              TIME TO PARTAKE IN THE FAST, PURIFY OUR MIND, BODY AND SPIRIT, AND
              WORK TO BECOME CLOSER TO ALLAH (SWT).
            </h6>
            <Col lg={6} className={styles["col-mob"]}>
              <div className="box shadow border rounded-3 p-4 text-center h-100 bg-light">
                <h4>DUA FOR FASTING</h4>
                <p>
                  There is a special duaa for fasting which should be made
                  before the fast begins each day:
                  <br />
                  <span className={styles["dua-font"]}>
                    وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ{" "}
                  </span>
                  <br />
                  <strong>Transliteration :</strong> Wa bisawmi ghadinn nawaiytu
                  min shahri ramadan.
                  <br />
                  <strong>Translation :</strong> I intend to keep the fast for
                  tomorrow in the month of Ramadan.
                </p>
              </div>
            </Col>
            <Col lg={6} className={styles["col-mob"]}>
              <div className="box shadow border rounded-3 p-4 text-center h-100 bg-light">
                <h4>DUA FOR BREAKING FAST IN RAMADAN (IFTAR)</h4>
                <p>
                  <span className={styles["dua-font"]}>
                    اللَّهُمَّ لَكَ صُمتُ وَعَلَى رِزقِكَ أَفطَرتُ
                  </span>
                  <br />
                  <strong>Transliteration :</strong> Allahumma inni laka sumtu,
                  wa bika aamantu, wa 'alayka tawakkaltu, wa Ala rizqika aftartu{" "}
                  <br />
                  <strong>Translation :</strong> Oh Allah! I fasted for You and
                  I believe in You, and I put my trust in You, and I break my
                  fast with Your sustenance.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles["time-table"]} my-4`}>
        <Timetable styles={styles} />
      </section>

      <section className={`${styles['tarvih']} my-4`}>
      <Container>
            <Row>
            <Col lg={12} className="mt-3">
            <h1>Ramadan Tarawih Prayers at Heuristic Academy</h1>
            <p>Assalamu Alaikum,</p>
            <p>As we embrace the blessed month of Ramadan, we are delighted to announce that Tarawih prayers will be held at <strong>[Heuristic Academy]</strong>. Join us in congregation as we engage in this beautiful tradition of night prayers.</p>
            <ul>
              <li> 🕋<strong>Location:</strong> Office no 4, Ground Floor, Mohammedi Building, 2nd Peerkhan St, Nagpada, Mumbai : 400008</li><br/>
              <li>📅<strong>Date:</strong> Every night during Ramadan</li><br/>
              <li>🕣 <strong>Time:</strong> Isha at 8:45 PM, Tarawih promptly at 9:00 PM</li>
            </ul>
            <p>Let us come together as a community to seek the mercy and blessings of Allah (SWT) during this sacred month. We look forward to welcoming you and your family.</p>
            <p>Jazakumullahu Khairan.</p>
                </Col>
                </Row>
                </Container>
      </section>

      <section className={`${styles["key-dates"]} py-4`}>
        <Container>
          <Row>
            <Col lg={6} className={styles["col-mob"]}>
              <div className="box shadow border rounded-3 p-4 text-center h-100 bg-light">
                <h4>KEY RAMADAN 2024 DATES</h4>
                <p>Monday 11th March - the beginning of Ramadan 2024 </p>
                <p>Tuesday 12th March - the first day of sawm (fasting) </p>
                <p>Sunday 07th April - Laylat al-Qadr (The Night of Power) </p>
                <p>Wednessday 10th April - final day of sawm (fasting) </p>
                <p>Thursday 11th April - Eid-ul-Fitr </p>
                <p className={styles["txt-clr"]}>
                  * All dates are subject to the sighting of the moon.
                </p>
              </div>
            </Col>

            <Col lg={6} className={styles["col-mob"]}>
              <div className="box shadow border rounded-3 p-4 text-center h-100 bg-light">
                <h4>
                  As the Islamic calendar follows the lunar cycle, the month of
                  Ramadan rotates by approximately ten days each year, depending
                  on the sighting of the moon.
                </h4>
                <p>
                  In 2024, it is expected that Ramadan will begin on the evening
                  of Monday 11th March, with the first day of fasting on Tuesday
                  12th March. The arrival of Ramadan also brings ample
                  opportunity to reap infinite blessing and reward. During this
                  auspicious month, remember to{" "}
                  <Link href="">donate your zakat</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles["calculator"]} py-4`}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center">
                <h2 className="text-light">HELP OTHERS THIS RAMADAN</h2>
                <p className="text-light">
                  Giving generously and helping others is highly rewarded in
                  Islam at all times, but during the month of Ramadan, blessings
                  and rewards are greatly multiplied.
                </p>
              </div>
              <div className="box shadow border rounded-3 p-4  bg-light">
                <Zakaatcalculator styles={styles} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles["banner"]} py-4`}>
        <Container>
          <Row>
          <h2 className="text-primary text-center">Our Services</h2>
            <Col lg={3} className={styles["col-mob"]}>
              <Card>
                <Card.Body>
                  <Image
                    src="/assets/cart1.jpg"
                    alt="Card1"
                    width="700"
                    height="1200"
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className={styles["col-mob"]}>
              <Card>
                <Card.Body>
                  <Image
                    src="/assets/cart2.jpg"
                    alt="Card1"
                    width="700"
                    height="1200"
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className={styles["col-mob"]}>
              <Card>
                <Card.Body>
                  <Image
                    src="/assets/cart3.jpg"
                    alt="Card1"
                    width="700"
                    height="1200"
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className={styles["col-mob"]}>
              <Card>
                <Card.Body>
                  <Image
                    src="/assets/cart4.jpg"
                    alt="Card1"
                    width="700"
                    height="1200"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='py-5' id="contact">
        <Container>
            <Row>
            <Col lg={6} className="mt-3">
            <h1>Ramadan Tarawih Prayers at Heuristic Academy</h1>
            <p>Assalamu Alaikum,</p>
            <p>As we embrace the blessed month of Ramadan, we are delighted to announce that Tarawih prayers will be held at <strong>[Heuristic Academy]</strong>. Join us in congregation as we engage in this beautiful tradition of night prayers.</p>
            <ul>
              <li> 🕋<strong>Location:</strong> Office no 4, Ground Floor, Mohammedi Building, 2nd Peerkhan St, Nagpada, Mumbai : 400008</li><br/>
              <li>📅<strong>Date:</strong> Every night during Ramadan</li><br/>
              <li>🕣 <strong>Time:</strong> Isha at 8:45 PM, Tarawih promptly at 9:00 PM</li>
            </ul>
            <p>Let us come together as a community to seek the mercy and blessings of Allah (SWT) during this sacred month. We look forward to welcoming you and your family.</p>
            <p>Jazakumullahu Khairan.</p>
                </Col>
                <Col lg={6} className="mt-3">
                 <h1 className="center-head pb-3">Contact Us</h1>
                    <div class="icon mb-3"><i class="fas fa-map-marker-alt"></i> <b>Our Academy</b></div>
                    <p>Shop no 4, Ground Floor, Mohammedi Building, 2nd Peerkhan St, Nagpada, Mumbai : 400008</p>
                    <div class="icon mb-3"><i class="far fa-clock"></i> <b>Open Office Hours</b></div>
                    <p>Mon-Sun: 10am - 9pm</p>
                    <div class="icon mb-3"><i class="fa fa-phone"></i><b> Get in Touch</b></div>
                    <p><a href="tel:+917039794283">+91 7039794283</a></p>
                    <p><a href="tel:+919987056292">+91 9987056292</a></p>
                    <div class="icon mb-3"><i class="fa fa-envelope"></i><b> Mail Us At</b></div>
                    <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@heuristicacademy.in&su=SUBJECT&body=BODY" target="blank">Info@heuristicacademy.in</a></p>
                    <ul class="d-flex list-unstyled ">
                      <li><a href="https://api.whatsapp.com/send?phone=917039794283" target="blank"><i class="text-facebook fab fa-whatsapp" aria-hidden="true"></i></a></li>
                      <li><a href="https://www.instagram.com/heuristic_academy/" target="blank"><i class="text-insta fab fa-instagram" aria-hidden="true"></i></a></li>            
                      <li><a href="https://maps.app.goo.gl/hvgzitchHdTduCF38?share" target="blank"><i class="text-map fas fa-map-marker-alt" aria-hidden="true"></i></a></li>            
                  </ul>
                </Col>
            </Row>
        </Container>
        </section>
      
    </>
  );
};

export default Index;
