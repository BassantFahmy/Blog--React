import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post/Post';

class Posts extends Component {

    state = {
        data: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
        return (
            this.state.data.map(p => (<Post key={p.id} title={p.title} id={p.id}/>))
        )
    }
}
export default Posts;