import React, { Component } from 'react';
import axios from 'axios';
import './UserView.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

class UserView extends Component {
    state = {
        data: {},
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        // https://jsonplaceholder.typicode.com/comments?postId=1
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                // handle success
                const data = response.data;
                this.setState({ data });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });

    }
    render() {
        const { data } = this.state;
        return (
        <Container>
            <div className="imgUser">
            </div>
            <div className="clear"></div>
            <div className="User__info">
                <span className="User--info">name: </span> {data.name}
                <br />
                <span className="User--info">User email: </span> {data.email}
                <br />
                <span className="User--info">User id: </span> {data.id}
                <br />
                <span className="User--info">User name: </span> {data.username}
                <Link to={`/userPost/${data.id}`}><p className="User--info" style={{ color: 'blue' }} >My Posts <br /> </p></Link>
            </div>

        </Container>
        )
    }
}
export default UserView;