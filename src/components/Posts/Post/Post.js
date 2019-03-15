import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';




const Post = (props) => (



    <Container>
        <Card style={{ width: '18rem', height: '15rem', textAlign: 'center' }} className="display--row" >
            <Card.Body>
                <Card.Title>Title: {props.title}
                </Card.Title>
                <Link to={`/posts/${props.id}`}><Button variant="primary">View More</Button></Link>
            </Card.Body>
        </Card>
    </Container>


)


export default Post;