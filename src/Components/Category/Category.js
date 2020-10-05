import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = (props) => {
    const allItems = props.items;
    const {_id, name, image} = allItems;

    return (
        <div className="col-md-3">
            <Link to={`/CategoryDetails/${_id}`}>
            <Card className="my-5">
                <Card.Img variant="top" src={image} />
                <Card.Footer>
                  {name}
                </Card.Footer>
            </Card>
            </Link>
        </div>
    );
};

export default Category;