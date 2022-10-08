import React from 'react';

function Jumbotron(){
    return(
        <div className='p-4 jumbotron bg-light text-dark'>
            <h1 className='display-4'> A Warm Welcome!</h1>
            <p className='lead'></p>
            {/* <hr className='my-4' /> */}
            <p >Lorem ipsum dolor sit amet. Cum quas numquam aut inventore voluptate eos natus omnis quo odio temporibus vitae libero in consequatur incidunt. Ut optio dolorem vel quis voluptas ea totam maxime At asperiores quidem qui voluptatem tempora et adipisci fuga ab quas possimus.</p>
            <a className='btn btn-primary btn-lg' href='#' role='button'>Call to action!</a>
        </div>
    );
}

export default Jumbotron;