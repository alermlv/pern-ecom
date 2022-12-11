import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";


export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card style={{ "width": "380px" }} className="p-4">
        <h2 className="fs-5">{isLogin ? "Войдите в свой профиль" : "Создайте свой профиль"}</h2>
        <Form className="mt-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Введите email" />
          </Form.Group>

          {isLogin ?
            <>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Введите пароль" />
              </Form.Group>
              <div style={{"fontSize":"14px"}} className="mt-4">
                Забыли пароль?
                <NavLink className="ps-1" style={{ textDecoration: "none" }} to={REGISTRATION_ROUTE}>Нажмите сюда</NavLink>
              </div>
            </>
            :
            <>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Введите пароль" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Введите пароль повторно" />
              </Form.Group>
            </>
          }
          {isLogin ?
              <Button style={{ "width": "100%" }} className="mt-4" variant="primary" type="submit">Войти</Button>
            :
            <>
              <Button style={{ "width": "100%" }} variant="primary" type="submit">Зарегистрироваться</Button>
              <div style={{"fontSize":"10px"}} className="mt-3 fw-light">
                Нажимая продолжить, вы подтверждаете, что соглашаетесь с условиями использования и политикой конфиденциальности
              </div>
            </>
          }
          <Row className="mt-4" style={{"fontSize":"14px"}}>
            {isLogin ?
              <div className="text-center">
                Еще нет профиля?
                <NavLink className="ps-1" style={{ textDecoration: "none" }} to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
              </div>
              :
              <div className="text-center">
                У вас уже есть профиль?
                <NavLink className="ps-1" style={{ textDecoration: "none" }} to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            }
          </Row>
        </Form>
      </Card>
    </Container>
  );
};
