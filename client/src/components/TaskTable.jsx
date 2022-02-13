import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';


const TaskTable = (props) => {

  return(
    <Container>
      <Row>
        <h1>Task List</h1>
      </Row>
      <Table responsive striped size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </Table>
    </Container>
  );
};

export default TaskTable;
