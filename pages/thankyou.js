import Link from "next/link";
import {Container, Row, Col} from 'react-bootstrap';


const thankyou = () => {

  return (
    <section style={{height : "100vh"}}>
    <Container>
          <Row className="justify-content-center errorpage mt-5 pt-5">
              <Col lg="11" md={11}>
                <h1 className="head-text text-center">Thank You</h1>
                <div className="my-5">
                <p className="head-child-text text-center">Thank you for contacting us will get back to you soon</p>
                </div>
                <div className="text-center">
                <Link href="/"><button className="btn btn-primary">Back to Home</button></Link>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default thankyou