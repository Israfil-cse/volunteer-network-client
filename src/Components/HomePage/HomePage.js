import React, { useEffect, useState } from 'react';
import './HomePage.css'
import spin from"../../logos/spin.gif";
// import fakedata from '../../volunteer-fakedata/fakeData.json';

import Category from '../Category/Category';
import Header from '../Header/Header';
import randomColor from 'randomcolor';

const HomePage = () => {
    const [items, setItems] = useState([]);
    // console.log(randomColor());
    // // fakeData load to reall database
    // const handleAddItemDb = () => {
    //     fetch('http://localhost:4000/addItem', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify(fakedata)
    //     })
    // }
    const [search, setSearch] = useState('');
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    useEffect(() => {
        fetch('https://peaceful-reaches-79554.herokuapp.com/allItems?search=' + search)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [search])
    return (
        <div className="homePage">
            .
            <div className="container">
            {/* Header section  */}
                <Header></Header>
                <div>
                    <h3 className="text-center">I GROW BY HELPING PEOPLE IN NEED</h3>
                    <form className="d-flex">
                        <input type="text" onBlur={handleSearch} className="form-control" placeholder="Search" />
                        <p className="btn btn-primary">Search</p>
                    </form>
                </div>


                {/* data maping */}
                <div className="row">
                <div style={{ width: '100%' }} className="d-flex justify-content-center">
                        <div style={{ width: '50px' }}>
                            {
                                items.length === 0 && <img src={spin} alt="" />
                            }
                        </div>
                    </div>
                    {
                        items.map(item => <Category color={randomColor()} items={item} key={item.id}></Category>)
                    }
                </div>

                {/* fakeData load to reall database
            <button onClick={handleAddItemDb}>add</button> */}

            </div>
        </div>
    );
};

export default HomePage;