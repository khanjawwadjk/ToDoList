import React from "react";
import { ToDoList } from "../ToDoLists/Todolist";
import { Addtodo } from "../ToDoLists/Addtodo";
import { Card, Col, Row } from "react-bootstrap";
import "../ToDoLists/Home.css";
import { useState } from "react";
export const Home = () => {
  const [todolists, settodolists] = useState([
    "learning react",
    "having lunch",
    "playing games",
    "watching movies",
  ]);
  ////////////uplifting bolte///////
  const handleAdd = (tododata) => {
    settodolists([...todolists, tododata]);
  };
  return (
    <React.Fragment>
      <Card className="Home">
        <Row>
          <Col>
            <Addtodo handleAdd={handleAdd} />
          </Col>
          <Col>
            <ToDoList todolists={todolists} />
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
