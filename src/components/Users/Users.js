import React, { Component } from 'react';
import axios from 'axios';
import User from './User/User';
import './Users.css';

class Users extends Component {


    state = {
        data: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const data = response.data;
                this.setState({ data });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }
    render() {
        return (
            this.state.data.map(U => <User key={U.id} name={U.name} id={U.id} />)
        )
    }
}
export default Users;