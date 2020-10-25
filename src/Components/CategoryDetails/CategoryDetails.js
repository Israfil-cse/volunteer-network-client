import React, { useContext, useEffect, useState } from 'react';
import './CategoryDetails.css';
import logo from '../../logos/Group 1329.png'
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';


const CategoryDetails = () => {
    
    // context and user form
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {

        const user = { ...loggedInUser, matchCategory, data }
        fetch('https://peaceful-reaches-79554.herokuapp.com/addUserInfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your data was saved')
                }
            })
            history.push('/userinfo')
    };

    // cetagory matching
    const {CategoryDetails_id} = useParams();
    const [matchCategory, setMatchCategory] = useState({});
    useEffect(() => {
        fetch('https://peaceful-reaches-79554.herokuapp.com/allItems')
        .then(res => res.json())
        .then(data => {
           const macthId = data.find( item => item._id === CategoryDetails_id)
            setMatchCategory(macthId);
        })
    },[]);



    return (
        <div className="container">

            <figure className=" d-flex justify-content-center my-5">
                <img className="logo" src={logo} alt="" />
            </figure>
                <h3 className="text-center my-4">Register as a volunteer</h3>
                <form className="formBorder" onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputStyle">
                        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                        {errors.name && <span className="error">name is required</span>}
                    </div>
                    <div className="inputStyle">
                        <input name="Email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" />
                        {errors.Email && <span className="error">Email is required</span>}
                    </div>
                    <div className="inputStyle">
                        <input name="date" ref={register({ required: true })} placeholder="dd-mm-yy" />
                        {errors.date && <span className="error">date is required</span>}
                    </div>
                    <div className="inputStyle">
                        <input name="Description" ref={register({ required: true })} placeholder="Desicription" />
                        {errors.Description && <span className="error">Description is required</span>}
                    </div>
                    <div className="inputStyle">
                        <input name="Organize books at the library" defaultValue={matchCategory.name}  ref={register({ required: true })} placeholder="Organize books at the library" />
                        {errors.Organize && <span className="error">Organize books at the library is required</span>}
                    </div>
                    <div>
                        <input className="submitBtn bg-primary my-3"type="submit" />
                    </div>
                </form>

        </div>
    );
};

export default CategoryDetails;