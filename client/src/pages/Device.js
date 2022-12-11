import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { MdStar } from "react-icons/md";

export const Device = () => {
  const device = {
    id: 1,
    name: "iPhone 13 Pro",
    price: 80000,
    rating: 0,
    img: "c39bfa09-5b3e-4f64-b7fb-ddb8aa670dbf.webp",
    createdAt: "2022-12-07T04:07:34.452Z",
    updatedAt: "2022-12-07T04:07:34.452Z",
    typeId: 1,
    brandId: 1,
  };

  const description = [
    {
      id: 1,
      title: "Экран",
      description: '6.1" (2532x1170) OLED 120 Гц',
    },
    {
      id: 2,
      title: "Память",
      description: "встроенная 256 ГБ, оперативная 6 ГБ",
    },
    {
      id: 3,
      title: "Фото",
      description: "3 камеры, основная 12 МП",
    },
    {
      id: 4,
      title: "Аккумулятор",
      description: "3095 мА·ч",
    },
    {
      id: 5,
      title: "Вес",
      description: "203 г",
    },
  ];

  return (
    <Container className="mt-4">
      <Row>
        <Col md={3}>
          <Image src={device.img} />
        </Col>
        <Col md={6}>
          <Row>
            <h2>{device.name}</h2>
            <div>Коротко о товаре</div>
          </Row>
          <Row className="mt-2">
            {description.map((item) => 
              <div className="mt-1" style={{ "fontSize": "12px" }} key={item.id}>{item.title}: {item.description}</div>
            )}
          </Row>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>{device.price} руб.</Card.Title>
              <div style={{ fontSize: "12px" }} className="d-flex align-items-center mt-2">
                <div>{device.rating}</div>
                <MdStar />
              </div>
              <Button className="mt-2" variant="primary">Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
