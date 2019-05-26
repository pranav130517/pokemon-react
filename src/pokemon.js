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
                name: data.name
            });
        });
    }

    render()
    {
        return (
            <div className="card p-4 m-2">
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default Pokemon