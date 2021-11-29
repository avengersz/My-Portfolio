import React from 'react';
import { Card } from 'react-bootstrap';

const BlogCard = ({blogs}) => {
  const {cover, title, description, link} = blogs;
  return (
    <Card style={{ width: '18rem' }} className='border rounded shadow mb-5 ml-3 mr-3'>
      <Card.Img variant="top" src={cover}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={link} target="_blank" rel="noreferrer"><button className="button-style">Full Blog</button></a>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;