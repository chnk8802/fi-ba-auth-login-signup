import React from 'react';
import { Link } from "react-router-dom";

export function Home(props) {
    return (
        <div>
            <div>
                <h1>
                    <Link to='/login'>Log-in</Link>
                </h1>
                <br />
                <h1>
                    <Link to='/signup'>Sign-up</Link>
                </h1>
            </div>
            <br />
            <br />
            <br />
            <div>
                <h2>{props.name ? `Welcome - ${props.name}` : "Login Please!"}</h2>
            </div>
        </div>
    );
}