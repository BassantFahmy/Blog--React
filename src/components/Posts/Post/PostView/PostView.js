import React, { Component } from 'react';
import axios from 'axios';
import "./PostView.css";

import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

class PostView extends Component {
    state = {
        data: [],
        comments: [],

    }
    getPostdetails(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

    getPostComments(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    }
    // getUserName(id){
    //     return axios.get('https://jsonplaceholder.typicode.com/users/${id}')
    // }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.all([this.getPostdetails(id), this.getPostComments(id)])
            .then(axios.spread((postDetails, postComments) => {
                const data = postDetails.data;
                const comments = postComments.data;
                this.setState({ data, comments});
                // Both requests are now complete
            }));

    }
    render() {
        const { data } = this.state;
        const { comments } = this.state;
        console.log(comments[0])
        return (
            <div>
                <Container>
                <Card className="text-center">
                    <Card.Header>post Id= {data.id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                        {data.body}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">userID= {data.userId}</Card.Footer>
                </Card>
                <p>comments:</p>


                {comments.map(c => <div className="comment--style" key={c.id}>comment: {c.body}<br></br>name= {c.name}<br></br>
                    email= {c.email}
                </div>)}
                </Container>
            </div>
        )
    }



}
export default PostView;