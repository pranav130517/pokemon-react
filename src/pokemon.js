import React from 'react';

class Pokemon extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            types: ''
        }
    }

    componentDidMount() {
        this.fetchPokemonDetails()
    }

    fetchPokemonDetails()
    {
        // URL
        const url = "https://pokeapi.co/api/v2/pokemon/" + this.props.name;

        // Request
        fetch(url).then(res => {
            return res.json()
        }).then(data => {
            this.setState({
                name: data.name,
                types: data.types
            });
        });
    }

    render()
    {
        return (
            <div className="card p-4 m-2">
                <h1>{this.state.name}</h1>
                {
                    this.state.types ?
                    this.state.types.map(function(type) {
                        return <li>{type.type.name} </li>
                     }) : null
                }
            </div>
        )
    }
}

export default Pokemon