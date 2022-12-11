import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

export const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <NavLink style={{ color: "white", textDecoration: "none" }} to={SHOP_ROUTE}>CosmoDevice</NavLink>
        {user.isAuth ?
          <Nav className="ml-auto" style={{ maxHeight: "100px" }}>
            <Button onClick={() => user.setIsAuth(false)} variant="link" style={{ color: "white", textDecoration: "none" }}>Выйти</Button>
            <Button variant="primary">Профиль</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{ maxHeight: "100px" }}>
            <Button onClick={() => user.setIsAuth(true)} variant="link" style={{ color: "white", textDecoration: "none" }}>Войти</Button>
            <Button variant="primary">Регистрация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});
