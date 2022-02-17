import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import './Home.css'

function Home() {
  return (
    <div className='Home__container'>
    <ReactBootStrap.Card style={{ width: '18rem' }}>
    <ReactBootStrap.Card.Img variant="top" src="images/model-3.jpg"/>
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Tesla model 3</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        Some sample text to build on the card title and make up the bulk of
        the card's content.
      </ReactBootStrap.Card.Text>
      <ReactBootStrap.Button variant="primary">ADD TO CART</ReactBootStrap.Button>
    </ReactBootStrap.Card.Body>
  </ReactBootStrap.Card>
  </div>
  );
  
}

export default Home;
