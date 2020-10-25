import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';



const AddService = () => {

     // service insert
    const history = useHistory();

    const [serviceinfo, setServiceInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...serviceinfo };
        newInfo[e.target.name] = e.target.value;
        setServiceInfo(newInfo);
    };

    const [fileStorage, setFileStorage] = useState(null);
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFileStorage(newFile)
    }


    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', fileStorage);
        formData.append('name', serviceinfo.name);

        fetch('http://localhost:4000/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
            })
            .catch(error => {
                console.error(error)
            })
            alert('Your service has been added successfully');
            history.push('/')
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <figure className="mt-5 pl-5">
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </figure>
                    <nav className="pl-5 mt-5">
                        <li>Make Service</li>
                    </nav>
                </div>
                <div className="col-md-9">

                    <div className="from_area">
                    <form className="pt-5 pl-5" onSubmit={handleSubmit}>
                            <h3>Service Title</h3>
                            <input onBlur={handleBlur} className="form-control" name="name" placeholder="services name" required />
                            <br />
                            <br />
                            <h3>Upload Icon</h3>
                            <input onChange={handleFileChange} type="file" />
                            <br />
                            <br />
                            <input className="btn btn-dark px-5" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;