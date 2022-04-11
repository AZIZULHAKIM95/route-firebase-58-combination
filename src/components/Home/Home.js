import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth'
import app from '../../firebase.init';

const auth = getAuth(app)

const Home = () => {
    // const { user } = useFirebase()
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>this is home</h2>
            <p>Current user is : {user ? user.displayName : 'Nobody is here'}</p>
        </div>
    );
};

export default Home;