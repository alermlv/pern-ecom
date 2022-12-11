import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Card from "react-bootstrap/esm/Card";
import { MdStar } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

export const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <Col md={3} className="mt-4">
      <Card style={{ cursor: "pointer" }} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
        <Card.Img variant="top" src={device.img} />
        <Card.Body>
          <Card.Title style={{ fontSize: "14px" }}>{device.name}</Card.Title>
          <div style={{ fontSize: "14px" }}>
            {device.price} руб.
          </div>
          <div style={{ fontSize: "12px" }} className="d-flex align-items-center mt-2">
            <div>{device.rating}</div>
            <MdStar />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
