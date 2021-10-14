import React from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";

export const Todoitem = ({ items }) => {
  const [chk, setchk] = useState(false);
  return (
    <Card className="todoitem">
      <Row>
        <Col md={2}>
          <Form.Check onClick={() => setchk(!chk)}></Form.Check>
        </Col>
        <Col md={10}>
          <Form.Label>{chk ? <del>{items}</del> : items}</Form.Label>
        </Col>
      </Row>
    </Card>
  );
};
