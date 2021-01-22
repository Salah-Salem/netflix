import React, { Fragment, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const[ emailAddress, setEmailAdress ] = useState('');
    const[ password, setPassword ] = useState('');
    const[ error, setError ] = useState('');

    //check form input elements are valid
    const isInValid = password === '' || emailAddress === '';
    // email & password 
    const handleSignIn = (event) => {
        event.preventDefault();
        //firebase work here
        firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress,password)
        .then(() =>{
            //push to browse page 
            history.push(ROUTES.BROWSE);
        })
        .catch((error) => {
            setEmailAdress('');
            setPassword('');
            setError(error.message);
        });
    };
    return (
        <Fragment>
            <HeaderContainer> 
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error> {error} </Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
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
                            New to Netflix? <Form.Link to="/signup"> Sign up now </Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. learn more.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </Fragment>
    )
}