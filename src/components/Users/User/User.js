import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const User = (props) => {
    return (
        <Container>
            <div className="display--row">
                <div className="fliptextcard">
                    <div className="fliptextcard__images">
                        <div className="fliptextcard__frontimg2 fliptextcard__img1">
                            <h4>{props.name}</h4>
                        </div>
                        <div className="fliptextcard__text">
                            <Link to={`/users/${props.id}`}><p>Click to view More details: <br /> </p></Link>
                            {props.name}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default User;