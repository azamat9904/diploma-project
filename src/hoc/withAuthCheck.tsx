import React from 'react';
import { useSelector } from 'react-redux';
import { TAppState } from '../redux/reducers/index';
import { Redirect } from 'react-router-dom';

const withAuthCheck = (Component: React.ComponentType<any | string>) => (props: any) => {

    const isAuthorized = useSelector((state: TAppState) => state.auth.isAuthorized);

    return (
        <>
            {
                !isAuthorized ? <Component {...props} /> : <Redirect to="/" />
            }
        </>
    )
}

export default withAuthCheck;