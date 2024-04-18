import React, { useState } from 'react';
import { Form, Button, Nav } from 'react-bootstrap';
import SubmitForm from './FormService'; // Импорт функции для отправки формы

import './RegistrationForm.css'; // Импорт файла со стилями

const RegistrationForm = () => {
    const [email, setEmail] = useState(''); // Состояние для поля email
    const [fullName, setFullName] = useState(''); // Состояние для поля fullName

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    // Логика для проверки корректности введенных данных
    const isFormValid = () => {
        // Пример: проверка, что email содержит символ '@' и fullName не пустое
        return email.includes('@') && fullName.trim() !== '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await SubmitForm(fullName, email);
            // Вывод результата в alert
            alert('Form submitted successfully');
        } catch (error) {
            console.error('Error submitting form:', error);
            // Добавьте обработку ошибок, если нужно
            alert('Error submitting form');
        }
    };

    return (
        <Form className="registration-form">
            <div className={'form-title'}>Open New Account</div>
            <Form.Group className={'form-group'} controlId="formEmail">
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </Form.Group>
            <Form.Group className={'form-group'} controlId="formFullName">
                <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={handleFullNameChange}
                />
            </Form.Group>
            <Form.Group className={'form-button'} controlId="form-button">
                <Button className={'rounded-pill'} variant="primary" type="submit" disabled={!isFormValid()} onClick={handleSubmit}>
                    Register
                </Button>
            </Form.Group>
            <div className="social-register">
                <div className={'bg-liner'}>
                </div>
                <span>Or register via</span>
            </div>
            <Nav className="social-register-button">
                <Nav.Item>
                    <Nav.Link href="#">
                        <img src="/img/google.png" alt="google"/>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">
                        <img src="/img/facebook.png" alt="facebook"/>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">
                        <img src="/img/apple.png" alt="apple"/>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div><Form.Text>Already have an account? <a className={'log-in'} href="#LogIn">Log In</a></Form.Text></div>
            <div><Form.Text>By registreting you agree to our <a className="policy" href='#policy'>privacy policy</a></Form.Text></div>
        </Form>
    );
}

export default RegistrationForm;
