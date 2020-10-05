import React from 'react';
import icon from '../../logos/trash-29.png';
import './Admin.css';

const Admin = (props) => {
    const regData = props.regData.data;
    return (
        <div className="d-flex">
           <div>
           {regData.name}
           </div>
           <div className="email">
           {regData.Email}
           </div>
           <div className="date">
           {regData.date}
           </div>
           <div>
           {regData.Organize}
           </div>
           <div>
               <img src={icon} alt="images"/>
            </div>
        </div>
    );
};

export default Admin;