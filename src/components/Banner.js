import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RegistrationForm from './form/RegistrationForm/RegistrationForm';

const Banner = () => {
    return (
        <div className="banner" style={{
            backgroundImage: 'url(/img/bg30.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textAlign: 'center' }}>
            <div className="overlay"></div>
            <Row className="justify-content-center">
                <Col lg={12}>
                    <div className="content">
                        <div className="content-text">
                            <h1>Trade with a broker Who is Fair and Reputable</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s.</p>
                        </div>
                        <div className="form">
                            <RegistrationForm />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Banner;
