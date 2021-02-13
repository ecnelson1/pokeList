import React, { Component } from 'react'
import Pokemon from './data.js'
import './searchpage.css'

export default class SearchPage extends Component {
    state = {
        selectedSort: "asc",
        selectedFilter: Pokemon.pokemon,
        keyword: "",
      }
      handleKeywordChange = (e) => {;
          this.setState({keyword: e.target.value});
          
        }
        handleFilterClick = (e) => {
            this.setState({ 
                selectedFilter: e.target.value
            });
     }

        handleSort = (e) =>{
            this.setState({
                selectedSort: e.target.value
                });}
                render() {

                const filteredPokeList =Pokemon.filter(Pokemon => Pokemon.pokemon.includes(this.state.keyword));
                return (
            <div className = "page-display">
                <form className= "side-bar">
                    <input onChange = {this.handleKeywordChange} placeholder = "Search Pokedex"></input>
                    <select onChange = {this.handleFilterClick}>
                        <option value={Pokemon.pokemon}>Pokemon Name</option>
                        <option value={Pokemon.type_1}>Type</option>
                        <option value={Pokemon.shape}>Shape</option>
                        <option value={Pokemon.ability_1}>Ability</option>
                    </select>
                    <select onChange = {this.handleSort}>
                        <option value = "asc">Ascending Order</option>
                        <option value = "dsc">Descending Order</option>
                    </select>
                </form>
                <div className = "poke-list">
                {filteredPokeList.map(Pokemon => <div className = "poke-item" key={Pokemon.pokemon}>
                        <img src={Pokemon.url_image} alt={Pokemon.pokemon}/>
                        <section className = "poke-info">
                            <p>{Pokemon.pokemon}</p>
                            <p>{Pokemon.type_1}</p>
                            <p>{Pokemon.shape}</p>
                            <p>{Pokemon.ability_1}</p>
                        </section>
                    </div>)}
                </div>
               
            </div>
        )
}    
}
       