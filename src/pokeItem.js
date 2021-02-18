import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    
    render() {
        return ( <Link to = {`${this.props.Pokemon.pokemon}`} key = {this.props.Pokemon._id}>
        <section className = "poke-info">
    <img src={this.props.Pokemon.url_image} alt={this.props.Pokemon.pokemon}/>
        <p>Name: {this.props.Pokemon.pokemon}</p>
        <p>Type: {this.props.Pokemon.type_1}</p>
        <p>Shape: {this.props.Pokemon.shape}</p>
        <p>Ability: {this.props.Pokemon.ability_1}</p>
        </section>
    </Link>
 )}
}