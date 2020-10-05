import React, { useEffect, useState } from 'react';
import Admin from './Admin';

const AdminDataLoad = () => {
    const [registerData, setRegisterData] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-reaches-79554.herokuapp.com/adminAlUser')
        .then(res => res.json())
        .then(data => setRegisterData(data))
    })
    return (
        <div className="container">
            <div className="d-flex justify-content-between">
            <div>
                <h4>Name</h4>
            </div>
            <div>
                <h4>Email</h4>
            </div>
            <div>
                <h4>Date</h4>
            </div>
            <div>
                <h4>organize</h4>
            </div>
            <div>
                <h4>action</h4>
            </div>
            </div>
            {
                registerData.map(regData => <Admin regData={regData}></Admin>)
            }
        </div>
    );
};

export default AdminDataLoad;