import React from 'react';

const Saludo = ({saludo}) => {
    return (
        <h1 className='text-light'>Hello {saludo}</h1>
    );
};

export default Saludo;