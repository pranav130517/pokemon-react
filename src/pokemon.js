import React from 'react';

class Pokemon extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            type: ''
        }
    }

    render()
    {
        return (
            <div>Hello</div>
        )
    }
}

export default Pokemon