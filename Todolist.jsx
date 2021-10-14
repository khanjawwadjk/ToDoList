import React from "react";
import { Card } from "react-bootstrap";
import "../ToDoLists/Home.css";
import { Todoitem } from "../ToDoLists/Todoitem";

export const ToDoList = ({ todolists }) => {
  return (
    <React.Fragment>
      <Card className="todolist">
        {todolists.map((items) => {
          return <Todoitem items={items} />;
        })}
      </Card>
    </React.Fragment>
  );
};
