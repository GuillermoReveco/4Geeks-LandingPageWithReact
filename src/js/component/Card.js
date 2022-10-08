import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className='card text-center'>
            <img src={props.imagen} className='card-img-top' alt='...' />
            <div className='card-body'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>{props.parrafo}</p>
            </div>
            {/* <div className='bg-light'>
                <a href="#" class="btn btn-primary">Find Out More!</a>
            </div> */}
            <div className="card-footer text-muted">
            <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );

}

Card.propTypes = {
    title: PropTypes.string,
    imagen: PropTypes.string,
    parrafo: PropTypes.string
}

export default Card;