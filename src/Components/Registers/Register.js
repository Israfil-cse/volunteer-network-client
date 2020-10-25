import React, { useEffect, useState } from 'react';
import './Register.css';
import logo from '../../logos/Group 1329.png';
const Register = () => {

    const [registerData, setRegisterData] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-reaches-79554.herokuapp.com/adminAlUser')
            .then(res => res.json())
            .then(data => setRegisterData(data))
    })
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <figure className="mt-5 pl-5">
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </figure>
                    <nav className="pl-5 mt-5">
                        <li>Register list</li>
                    </nav>
                </div>
                <div className="col-md-9 mt-5">
                    <div className="from_area">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="text-secondary text-left" scope="col">Sr No</th>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Email</th>
                                    <th className="text-secondary" scope="col">Date</th>
                                    <th className="text-secondary" scope="col">Organize</th>
                                    <th className="text-secondary" scope="col">Image</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    registerData.map((register, index) =>

                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{register.data.name}</td>
                                            <td>{register.email}</td>
                                            <td>{register.data.date}</td>
                                            <td>{register.matchCategory.name}</td>
                                            <td><img className="imgLogo" src={register.matchCategory.image} alt="" /></td>

                                        </tr>

                                    )

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;