import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TAppState } from '../redux/reducers/index';
import { logoutUser } from '../redux/actions/auth';

const Logout = () => {
    const dispatch = useDispatch();
    const isAuthorized = useSelector((state: TAppState) => state.auth.isAuthorized);

    useEffect(() => {
        dispatch(logoutUser());
        console.log('logout called');
    }, [dispatch]);

    return (
        <div></div>
    )
}

export default Logout;