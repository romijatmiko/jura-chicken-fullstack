import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../../tambahan/koma";
import { API_URL } from "../url/url";

export const Menus = ({ menu }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow">
      <Card.Img
          variant="top"
          src={ "img" +
          menu.img}
        />
        <Card.Body>
          <Card.Title>{menu.name}</Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.price)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
