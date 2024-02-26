import React from 'react'
import { useState } from 'react';
import { Container, Row, Col,Button, Form } from "react-bootstrap";

const Zakaatcalculator = ({styles}) => {

    const [gold, setGold] = useState('');
  const [silver, setSilver] = useState('');
  const [cash, setCash] = useState('');
  const [zakatDueGold, setZakatDueGold] = useState(0);
  const [zakatDueSilver, setZakatDueSilver] = useState(0);
  const [zakatDueCash, setZakatDueCash] = useState(0);
  const [totalZakatDue, setTotalZakatDue] = useState(0);

  const calculateZakat = () => {
    // Zakat on gold is 2.5% of total gold assets
    const zakatOnGold = gold ? parseFloat(gold) * 0.025 : 0;

    // Zakat on silver is 2.5% of total silver assets
const zakatOnSilver = silver ? parseFloat(silver) * 0.025 : 0;

    // Zakat on cash is 2.5% of total cash assets
    const zakatOnCash = cash ? parseFloat(cash) * 0.025 : 0;

    setZakatDueGold(zakatOnGold);
    setZakatDueSilver(zakatOnSilver);
    setZakatDueCash(zakatOnCash);

    // Total Zakat due is the sum of Zakat on gold, silver, and cash
    const totalZakat = zakatOnGold + zakatOnSilver + zakatOnCash;
    setTotalZakatDue(totalZakat);
  };

  const handleGoldInputChange = (e) => {
    setGold(e.target.value);
  };

  const handleSilverInputChange = (e) => {
    setSilver(e.target.value);
  };

  const handleCashInputChange = (e) => {
    setCash(e.target.value);
  };

  const handleCalculateZakat = () => {
    calculateZakat();
  };

  const handleReset = () => {
    setGold('');
    setSilver('');
    setCash('');
    setZakatDueGold(0);
    setZakatDueSilver(0);
    setZakatDueCash(0);
    setTotalZakatDue(0);
  };
  return (
    <>
      <div>
      <h2 className='text-center mb-4'>Zakat Calculator</h2>
      <div className='d-flex'>
        <p className='border-dark border-end me-5 pe-4'>10grams Gold rate(24 carat) : ₹ 61,400</p>
        <p>10grams Silver rate : ₹ 772</p>
      </div>
      <hr/>
      <div>
      <Form>
      <Row>
        <Col lg={4}>
        <Form.Group className="" controlId="formGroupEmail">
        <Form.Label>Value of Gold Assets :</Form.Label>
      </Form.Group>
        </Col>
        <Col lg={5}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="number" placeholder="Enter Gold value" id="gold"
          value={gold}
          onChange={handleGoldInputChange} />
        </Form.Group>
        </Col>

        <Col lg={4}>
        <Form.Group className="" controlId="formGroupEmail">
        <Form.Label>Value of Silver Assets :</Form.Label>
      </Form.Group>
        </Col>
        <Col lg={5}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="number" placeholder="Enter Silver value" id="silver"
         value={silver}
         onChange={handleSilverInputChange} />
        </Form.Group>
        </Col>

        <Col lg={4}>
        <Form.Group className="" controlId="formGroupEmail">
        <Form.Label>Cash Assets :</Form.Label>
      </Form.Group>
        </Col>
        <Col lg={5}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="number" placeholder="Enter Cash value" id="cash"
        value={cash}
        onChange={handleCashInputChange} />
        </Form.Group>
        </Col>
      </Row>
    </Form>
    </div>
       
      <Button onClick={handleCalculateZakat} className='me-5'>Calculate Zakat</Button>
      <Button onClick={handleReset}>Reset</Button>
      {totalZakatDue > 0 && (
        <div className='mt-4'>
          <h3>Zakat Due:</h3>
          <p>Gold Zakat: {zakatDueGold.toFixed(2)} INR</p>
          <p>Silver Zakat: {zakatDueSilver.toFixed(2)} INR</p>
          <p>Cash Zakat: {zakatDueCash.toFixed(2)} INR</p>
          <p>Total Zakat Due: {totalZakatDue.toFixed(2)} INR</p>
        </div>
      )}
    </div>
   
    </>
  )
}

export default Zakaatcalculator
