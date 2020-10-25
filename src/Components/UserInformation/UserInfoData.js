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

    const handleDelete = (id, event) => {
        const filterUser = allUser.filter(user => user._id !== id);
        setAllUser(filterUser);
        fetch(`https://peaceful-reaches-79554.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result =>console.log('delete success'))
            
            
            console.log('select item deleted', id)

        
    }

    return (
        <div className="container">
            <Header></Header>
            <div className="row">
            {
                allUser.map(user => <UserInformation handleDelete={handleDelete} user={user} key={user.key}></UserInformation>)
            }
            </div>
        </div>
    );
};

export default UserInfoData;