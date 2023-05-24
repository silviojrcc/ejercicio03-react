
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Saludo = ({saludo}) => {

    const [saludoState, setSaludoState] = useState(saludo);

    return (
        <div className='text-center'>
            <h1 className='text-light mb-5'>Hello {saludoState}</h1>
            <Button onClick={() => setSaludoState("my friend! (from state)")}>Clickiame</Button>
        </div>
    );
};

export default Saludo;