import React from 'react';

const Inputs = (props) => {
    return (
        <div>
           <input type="text" className="my-2 text-center" placeholder={props.titulo}/> 
           <button onClick={ () => props.delete(props.id)}>x</button>
        </div>
    );
};

export default Inputs;