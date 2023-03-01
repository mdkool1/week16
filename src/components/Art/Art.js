import React from 'react'
import './ArtStyles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function Art() {
    return (
      <Container>
        <Row style={{ margin: "0" , padding: "0"}}>
          <Col ><Image fluid src="https://cdn.shopify.com/s/files/1/0270/0178/2405/files/1BF9E1B1-E133-45A2-9C4E-96C119F8EF9E_480x480.jpg?v=1577984563" alt="1" ></Image></Col>
          <Col ><Image fluid  src="https://cdn.shopify.com/s/files/1/0270/0178/2405/files/B9177B5D-1BFB-4326-98AC-0E5CAB274A80_480x480.jpg?v=1577984547" alt="1"></Image></Col>
          <Col ><Image fluid  src="https://cdn.shopify.com/s/files/1/0270/0178/2405/files/5A308C1B-CC9C-44AC-8FD1-7D10E8D30730_480x480.jpg?v=1577984532" alt="1"></Image></Col>
        </Row>
        <Row>
          <Col ><Image fluid  src="https://cdn.shopify.com/s/files/1/0270/0178/2405/files/B0D058A4-E780-4F5D-B301-529FE1D8840F_480x480.jpg?v=1577984482" alt="1"></Image></Col>
          <Col ><Image fluid  src="https://cdn.shopify.com/s/files/1/0270/0178/2405/files/AC8CF22B-AF33-411B-A6AC-8B512CB7AA84_480x480.jpg?v=1577984450" alt="1"></Image></Col>
          <Col ><Image fluid  src="https://cdn.shopify.com/s/files/1/0270/0178/2405/files/98CCB37E-F136-491D-90A4-1E8320B68099_480x480.jpg?v=1577984423" alt="1"></Image></Col>
        </Row>
      </Container>
    );
  }


export default Art

