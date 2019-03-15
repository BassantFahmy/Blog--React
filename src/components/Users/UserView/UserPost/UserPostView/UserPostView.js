import React from 'react';
import { Container } from 'react-bootstrap';


import { Card } from 'react-bootstrap';


const UserPostView = (props) => {
    return (
        <Container>
            <Card style={{ width: '18rem', height: '20rem', textAlign: 'center' }} className="display--row">
                <Card.Body>
                    <Card.Title>Title: {props.title}</Card.Title>
                    <Card.Text>
                        {props.body}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default UserPostView;