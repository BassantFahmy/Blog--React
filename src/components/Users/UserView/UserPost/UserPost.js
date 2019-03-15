import React, { Component } from 'react';
import axios from 'axios';
import UserPostView from './UserPostView/UserPostView';


class UserPost extends Component {

    state = {
        data: [],
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => {
                // handle success
                const data = response.data;
                console.log(data)
                this.setState({ data });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }
    render() {
        return (
            this.state.data.map(U => <UserPostView key={U.id} title={U.title} body={U.body}/>)
        )
    }
}
export default UserPost;