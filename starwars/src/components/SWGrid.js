import React, { useState, useEffect} from 'react';
import axios from 'axios';
import SWCard from './SWCard';
import { Container, Row } from "reactstrap";

export default function SWGrid() {
    const [char, charData] = useState([]);
    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(res => {
          console.log(res.data.results);
          charData(res.data.results);
        })
        .catch(error => {
          console.log("the data was not returned", error)
        })
      },[])

      return (
        <Container>
          <Row>
              {console.log(char)}
              {char.map(people => {
          return <SWCard people={people} key={people.results} />;
        })}
          </Row>
         </Container>
      );
    }

    