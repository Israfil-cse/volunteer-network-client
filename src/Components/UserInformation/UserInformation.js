import React from 'react';
import './UserInformation.css';

const UserInformation = (props) => {

    const user = props.user.matchCategory;
    const user2 = props.user.data;



    const handleDelete = (id) => {
        fetch(`https://peaceful-reaches-79554.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log('delete success');

            })
            console.log('select item deleted', id)

        
    }
    return (
            <div className="col-md-6">
                <div className="parent">
                    <div>
                        <figure>
                            <img className="img_style" src={user.image} alt="" />
                        </figure>
                    </div>

                    <div className="content">
                        <h3>{user.name}</h3>
                        <br />
                        <h5>{new Date(user2.date).toDateString('dd/mm/yy')}</h5>
                        <br />
                        <button onClick={() => handleDelete(props.user._id)}>Cancle</button>

                    </div>
                </div>
            </div>
    );
};

export default UserInformation;