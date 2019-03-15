import React from 'react';
import axios from 'axios';
import './AddPost.css';
import { Container } from 'react-bootstrap';

export default class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            userId: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, body, userId } = this.state;


        axios.post('https://jsonplaceholder.typicode.com/posts', { title, body, userId: +userId })
            .then((response) => {
                // handle success
                console.log(response);
                this.props.history.push(`/posts`);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });

    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <Container>

                <form className="form--style" onSubmit={this.handleSubmit}>
                    <span>title:</span>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                    <br />
                    <span>Body:</span>
                    <input type="text" name="body" onChange={this.handleChange} value={this.state.body} />
                    <br />
                    <span>userId:</span>
                    <input type="number" name="userId" onChange={this.handleChange} value={this.state.userId} />
                    <button type="submit">Submit</button>
                </form>
            </Container>

        );
    }
}
