import React, { Fragment, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [ firstName, setFirstName ] = useState('');
    const [ emailAddress, setEmailAdress ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    //check form input elements are valid
    const isInValid = firstName === '' || password === '' || emailAddress === '';
    // email & password 
    const handleSignUp = (event) => {
        event.preventDefault();
        // build firebase stuff
        firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress,password)
        .then((result) => 
            result.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
            }).then(() => {
                history.push(ROUTES.BROWSE);
            })
        )
        .catch((error) => {
            setFirstName('');
            setEmailAdress('');
            setPassword('');
            setError(error.message);
        }); 
    }
    return(
        <Fragment>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input 
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)}
                        />
                        <Form.Input 
                            type="email"
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({target}) => setEmailAdress(target.value)}
                        />
                        <Form.Input 
                            placeholder="Password"
                            value={password}
                            type="password"
                            autoComplete="off"
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign In
                        </Form.Submit>
                        <Form.Text>
                            Already a user? <Form.Link to="/signin"> Sign in now </Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. learn more.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </Fragment>
    );
}