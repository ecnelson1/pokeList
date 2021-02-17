import React, { Component } from 'react'
import PokeItem from './pokeItem.js';

export default class PokeList extends Component {
    render() {
        return this.props.pokedex.map(Pokemon => <PokeItem Pokemon={Pokemon}  key = {Pokemon.pokemon}/>)
    }
}
