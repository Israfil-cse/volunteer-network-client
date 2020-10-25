import React, { useEffect, useState } from 'react';
import './HomePage.css'
// import fakedata from '../../volunteer-fakedata/fakeData.json';

import Category from '../Category/Category';
import Header from '../Header/Header';
import randomColor from 'randomcolor';

const HomePage = () => {
    const [items, setItems] = useState([]);
    console.log(randomColor());
    // // fakeData load to reall database
    // const handleAddItemDb = () => {
    //     fetch('http://localhost:4000/addItem', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify(fakedata)
    //     })
    // }
    
    useEffect(() => {
        fetch('https://peaceful-reaches-79554.herokuapp.com/allItems')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (

        // Header section
        <div className="container">
            <Header></Header>
            <div>
                <h3 className="text-center">I GROW BY HELPING PEOPLE IN NEED</h3>
                <form className="d-flex">
                    <input className="form-control" type="search" placeholder="Search" />
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>


        {/* data maping */}
            <div className="row">
                {
                    items.map(item => <Category color={randomColor()} items={item} key={item.id}></Category>)
                }
            </div>

            {/* fakeData load to reall database
            <button onClick={handleAddItemDb}>add</button> */}
            
        </div>
    );
};

export default HomePage;