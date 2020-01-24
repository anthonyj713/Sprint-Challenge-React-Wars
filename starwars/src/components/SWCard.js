import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    Col
  } from "reactstrap";

  const SWCard = ({people}) => {
      return (
        <Col xs="6" md="4" xl="3">
        <Card>
          <CardHeader> {people.name}</CardHeader>
          <CardBody>
            <CardText>Height: {people.height}</CardText>
            <CardText>Mass: {people.mass}</CardText>
          </CardBody>
        </Card>
      </Col>  
      );
  };

  export default SWCard;