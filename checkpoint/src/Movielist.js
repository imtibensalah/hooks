import React from 'react';
import Movies from './Movies';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Moviescard() {
  return (
    <div>
      {Movies.map((Film) => (
        <Card style={{ width: '18rem' }} key={Film.id}>
          <Card.Img variant="top" src={Film.postUrl} />
          <Card.Body>
            <Card.Title>{Film.name}</Card.Title>
            <Card.Text>
              
              {Film.description}
              
              
             
              
            </Card.Text>
            <button ></button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Moviescard;
