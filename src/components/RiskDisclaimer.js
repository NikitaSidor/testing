import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Transition } from 'react-transition-group';

const RiskDisclaimer = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Показать элемент через 1 секунду
        const showTimer = setTimeout(() => {
            setVisible(true);
        }, 1000);

        // Скрыть элемент через 6 секунд
        const hideTimer = setTimeout(() => {
            setVisible(false);
        }, 6000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const defaultStyle = {
        overflow: 'hidden',
        transition: 'padding 500ms ease'
    };

    const transitionStyles = {
        exited:  { padding: 0 },
    };

    return (
        <Transition in={visible} timeout={500}>
            {state => (
                <div
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}
                    className="risk-disclaimer bg-dark text-light text-center"
                >
                    <div className="risk-content">
                        <Col className="m-auto" lg={10}>
                            <p>
                                Trade Responsibly. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 73% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
                            </p>
                        </Col>
                    </div>
                </div>
            )}
        </Transition>
    );
}

export default RiskDisclaimer;