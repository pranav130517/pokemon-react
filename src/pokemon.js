import React from 'react';

function Pokemon(props) {
    return (
        <div className="col-4">
            <div className="card m-4">
                 <img src={props.icon} />
                 <h1>{props.name}</h1>
                 <h4>Type: {props.type}</h4>
            </div>
        </div>
    );
}

export default Pokemon