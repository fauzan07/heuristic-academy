import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const Timetable = ({ styles }) => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={`${styles['tbl-bdr']} navbtn`}>
            <OwlCarousel
              className="owl-theme"
              responsive={state.responsive}
              loop
              nav
              autoplay={false}
              autoplayTimeout={5000}
              dots={false}
            >
              <div className="tbl-hd-bdr">
                <div className="text-center">
                <h4 style={{color:'#962a30'}}>First Ashra - First 10 Days of Ramadan</h4>
                <p>Ramadan 1445</p>
                </div>
                <Table  responsive >
                  <thead>
                    <tr>
                      <th>Roza</th>
                      <th>Day</th>
                      <th>Date</th>
                      <th>Sahr</th>
                      <th>Iftar</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Tuesday</td>
                      <td>12<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:26</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:50</div></td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Wednessday</td>
                      <td>13<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:25 </div></td>
                      <td><div className={styles['tbl-col-style1']}>06:50</div></td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Thursday</td>
                      <td>14<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:24</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:50</div></td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>Friday</td>
                      <td>15<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:24</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:50</div></td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>Saturday</td>
                      <td>16<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:23</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:51</div></td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td>Sunday</td>
                      <td>17<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:22</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:51 </div></td>
                    </tr>

                    <tr>
                      <td>7</td>
                      <td>Monday</td>
                      <td>18<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:21</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:51</div></td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td>Tuesday</td>
                      <td>19<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:20</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:51</div></td>
                    </tr>

                    <tr>
                      <td>9</td>
                      <td>Wednessday</td>
                      <td>20<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:19</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:52</div></td>
                    </tr>

                    <tr>
                      <td>10</td>
                      <td>Thursday</td>
                      <td>21<sup>st</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:19</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:52</div></td>
                    </tr>
                    
                  </tbody>
                </Table>
              </div>

              <div className="tbl-hd-bdr">
              <div className="text-center">
                <h4 style={{color:'#962a30'}}>Second Ashra - Second 10 Days of Ramadan</h4>
                <p>Ramadan 1445</p>
                </div>
                <Table  responsive >
                  <thead>
                    <tr>
                      <th>Roza</th>
                      <th>Day</th>
                      <th>Date</th>
                      <th>Sahr</th>
                      <th>Iftar</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>11</td>
                      <td>Friday</td>
                      <td>22<sup>nd</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:18</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:52</div></td>
                    </tr>

                    <tr>
                      <td>12</td>
                      <td>Saturday</td>
                      <td>23<sup>rd</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:18</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:52</div></td>
                    </tr>

                    <tr>
                      <td>13</td>
                      <td>Sunday</td>
                      <td>24<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:17</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:53</div></td>
                    </tr>

                    <tr>
                      <td>14</td>
                      <td>Monday</td>
                      <td>25<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:16</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:53</div></td>
                    </tr>

                    <tr>
                      <td>15</td>
                      <td>Tuesday</td>
                      <td>26<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:15</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:53</div></td>
                    </tr>

                    <tr>
                      <td>16</td>
                      <td>Wednessday</td>
                      <td>27<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:14</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:54</div></td>
                    </tr>

                    <tr>
                      <td>17</td>
                      <td>Thursday</td>
                      <td>28<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:13</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:54</div></td>
                    </tr>

                    <tr>
                      <td>18</td>
                      <td>Friday</td>
                      <td>29<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:12</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:54</div></td>
                    </tr>

                    <tr>
                      <td>19</td>
                      <td>Saturday</td>
                      <td>30<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:11</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:55</div></td>
                    </tr>

                    <tr>
                      <td>20</td>
                      <td>Sunday</td>
                      <td>31<sup>st</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:10</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:55</div></td>
                    </tr>
                    
                  </tbody>
                </Table>
              </div>

              <div className="tbl-hd-bdr">
              <div className="text-center">
                <h4 style={{color:'#962a30'}}>Third Ashra - Last 10 Days of Ramadan</h4>
                <p>Ramadan 1445</p>
                </div>
                <Table  responsive >
                  <thead>
                    <tr>
                      <th>Roza</th>
                      <th>Day</th>
                      <th>Date</th>
                      <th>Sahr</th>
                      <th>Iftar</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>21</td>
                      <td>Monday</td>
                      <td>1<sup>st</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:09</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:55</div></td>
                    </tr>

                    <tr>
                      <td>22</td>
                      <td>Tuesday</td>
                      <td>2<sup>nd</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:08</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:55</div></td>
                    </tr>

                    <tr>
                      <td>23</td>
                      <td>Wednessday</td>
                      <td>3<sup>rd</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:07</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:55</div></td>
                    </tr>

                    <tr>
                      <td>24</td>
                      <td>Thursday</td>
                      <td>4<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:06</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:56</div></td>
                    </tr>

                    <tr>
                      <td>25</td>
                      <td>Friday</td>
                      <td>5<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:05</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:56</div></td>
                    </tr>

                    <tr>
                      <td>26</td>
                      <td>Saturday</td>
                      <td>6<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:04</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:56</div></td>
                    </tr>

                    <tr>
                      <td>27</td>
                      <td>Sunday</td>
                      <td>7<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:03</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:56</div></td>
                    </tr>

                    <tr>
                      <td>28</td>
                      <td>Monday</td>
                      <td>8<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:02</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:56</div></td>
                    </tr>

                    <tr>
                      <td>29</td>
                      <td>Tuesday</td>
                      <td>9<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:01</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:57</div></td>
                    </tr>

                    <tr>
                      <td>30</td>
                      <td>Wednessday</td>
                      <td>10<sup>th</sup></td>
                      <td><div className={styles['tbl-col-style']}>05:00</div></td>
                      <td><div className={styles['tbl-col-style1']}>06:57</div></td>
                    </tr>
                    
                  </tbody>
                </Table>
              </div>
            </OwlCarousel>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Timetable;
