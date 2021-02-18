import React, { Component } from 'react'
import request from 'superagent'
import Spinner from './spinner.js'
import './pokedetails.css'

export default class PokeDetailsPage extends Component {
    state = {
        loading: false,
        pokeStats: {},

    }
    componentDidMount= async() => {
            this.setState({loading: true});
            const pokedex = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.caughtPoke}`);
            this.setState({
                loading: false,
                pokeStats: pokedex.body.results.find(poke => poke.pokemon === this.props.match.params.caughtPoke)
              });
          }
    render() {
        return (
            <div>
                <h2>Here are {this.state.pokeStats.pokemon}'s Stats!</h2>
               {
                this.state.loading
                    ? <Spinner /> 
                    : <div className = 'poke-details' key = {this.state.pokeStats._id}> 
                        <img src={this.state.pokeStats.url_image} alt="pokemon" />
                       <p>Name: {this.state.pokeStats.pokemon}</p>
                       <p>Primary Type: {this.state.pokeStats.type_1}</p>
                       <p>Attack Power: {this.state.pokeStats.attack}</p>
                       <p>Defense: {this.state.pokeStats.defense}</p>
                       <p>Shape: {this.state.pokeStats.shape}</p>
                       <p>Primary Ability: {this.state.pokeStats.ability_1}</p>
                       <p>Secondary Ability: {this.state.pokeStats.ability_2}</p>
                       <p>Secondary Type: {this.state.pokeStats.type_2}</p>
                   </div>
               }
            </div>
        )
    }
}