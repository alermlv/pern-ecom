import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { DeviceList } from "../components/DeviceList";
import { SideBar } from "../components/SideBar";

export const Shop = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};
