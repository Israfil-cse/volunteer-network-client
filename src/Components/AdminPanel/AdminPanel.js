import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';

const AdminPanel = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    
    useEffect(() => {
        fetch(`https://peaceful-reaches-79554.herokuapp.com/checkAdmin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.admin === true) {
                    setAdmin(true);
                    console.log("isadmin");
                }
                if (data.admin === false) {
                    setAdmin(false);
                    console.log('admin not fund');
                }
            })
    })
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                <figure className="mt-5 pl-5">
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </figure>
                    <nav className="pl-5 mt-5">
                    {
                        admin === true?
                        <Link to="/addService"><li>Add Service</li></Link>
                        : ""
                    }
                    </nav>
                </div>
                <div className="col-md-9 mt-4">
                    <div style={{ height: '620px' }} className="from_area">
                    {
                        admin === false?
                        <h2 className="text-center">we are extremely sorry <br/>
                          please give me verifiyed email then you access admin panel</h2>
                        : ""
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;