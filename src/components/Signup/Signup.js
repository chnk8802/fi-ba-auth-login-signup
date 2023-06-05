import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import styles from './Signup.module.css';
import { InputControl } from '../InputControl/InputControl';
import { auth } from '../../firebase';

export function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: ""
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMessage('One or more field is empty!');
            return;
        }
        setErrorMessage('');
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (userCredential) => {
                setSubmitButtonDisabled(false);
                // Signed in
                const user = userCredential.user;
                await updateProfile(user, {
                    displayName: values.name,
                })
                navigate("/");
            })
            .catch((error) => {
                setSubmitButtonDisabled(false);
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode);
            });
    };

    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Signup</h1>
                <InputControl label='Name' placeholder='Enter your Name' onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />
                <InputControl label='Email' placeholder='Enter your Email' onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
                <InputControl label='Password' placeholder='Enter Password' onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} />
                <div className={styles.footer}>
                    <b className={styles.error}>{errorMessage}</b>
                    <button onClick={handleSubmission} disabled={submitButtonDisabled}>Sign up</button>
                    <p>
                        Already a member?{" "}
                        <span>
                            <Link to="/login">Log in</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}