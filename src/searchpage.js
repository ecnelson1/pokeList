import React, { Component } from 'react'
import Pokemon from './data.js'
import DropDown from './dropdown.js'
import './searchpage.css'

export default class SearchPage extends Component {
    state = {
        selectedSort: "Ascending",
        selectedFilter: "pokemon",
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
                    if (this.state.selectedSort === 'Ascending') {
                        Pokemon.sort((a, b) =>
                            a[this.state.selectedFilter].localeCompare(b[this.state.selectedFilter]));
                    } else {
                        Pokemon.sort((a, b) =>
                            b[this.state.selectedFilter].localeCompare(a[this.state.selectedFilter]));
                    }
            

                const filteredPokeList =Pokemon.filter(Pokemon => Pokemon.pokemon.includes(this.state.keyword));
                filteredPokeList.sort()
                return (
            <div className = "page-display">
                <form className= "side-bar">
                    <input onChange = {this.handleKeywordChange} placeholder = "Search Pokedex"></input>
                    <DropDown 
                    currentValue={this.state.selectedSort}
                    handleChange={this.handleSort}
                    options={['Ascending', 'Descending']}/>
                    <DropDown
                     currentValue={this.state.selectedFilter}
                     handleChange={this.handleFilterClick}
                     options={['pokemon', 'type_1', 'shape', 'ability_1',]} />
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
       