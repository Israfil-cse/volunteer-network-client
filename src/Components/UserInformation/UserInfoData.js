import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import UserInformation from './UserInformation';

const UserInfoData = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // userinformation read
    const [allUser, setAllUser] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-reaches-79554.herokuapp.com/allUserInfo?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setAllUser(data));
    }, []);
    return (
        <div className="container">
            <Header></Header>
            <div className="row">
            {
                allUser.map(user => <UserInformation user={user} key={user.key}></UserInformation>)
            }
            </div>
        </div>
    );
};

export default UserInfoData;