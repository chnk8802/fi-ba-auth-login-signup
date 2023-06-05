import React from 'react';
import styles from './Login.module.css';
import { InputControl } from '../InputControl/InputControl';
import { Link } from 'react-router-dom';
export function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Login</h1>
                <InputControl label='Email' placeholder='Enter your Email' />
                <InputControl label='Password' placeholder='Enter Password' />
                <div className={styles.footer}>
                    <button>Login</button>
                    <p>
                        Already have an account?{" "}
                        <span>
                            <Link to="/signup">Sign up</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}