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
    </>
  );
};

export default Index;
