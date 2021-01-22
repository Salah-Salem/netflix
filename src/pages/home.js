import React, { Fragment } from 'react';

import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { OptForm, Feature } from '../components';

export default function Home () {
    return(
        <Fragment>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited movies, TV shows, and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel anytime.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership.
                        </OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Try It Now</OptForm.Button>                
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </Fragment>
        
    );
}