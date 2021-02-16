import React, { Component } from 'react'
import DropDown from './dropdown.js'
import request from 'superagent'
import './searchpage.css'

export default class SearchPage extends Component {
    state = {
        pokedex: [],
        selectedSort: "Ascending",
        selectedFilter: "pokemon",
        keyword: "",
        }
      componentDidMount = async () => {
          await this.catchEmAll();
        }
      catchEmAll = async () => {
          const pokedex = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.keyword}`);
          this.setState({
              pokedex: pokedex.body.results
            });
        }
      handleKeywordChange = (e) => {;
        
          this.setState({keyword: e.target.value});
          
        }
        handleFilterClick = (e) => {
            this.setState({ 
                selectedFilter: e.target.value
            });
     }
        handleSubmit = async () => {
         await this.catchEmAll();
     }
    
        handleSort = (e) =>{
        this.setState({
        selectedSort: e.target.value
            });
        }

                render() {
                return (
            <div className = "page-display">
                <div className= "side-bar">
                    <input  onChange = {this.handleKeywordChange} placeholder = "Search Pokedex"></input>
                    <button onClick = {this.handleSubmit}>Catch em All!</button>
                    <DropDown 
                    currentValue={this.state.selectedSort}
                    handleChange={this.handleSort}
                    options={['Ascending', 'Descending']}/>
                    <DropDown
                     currentValue={this.state.selectedFilter}
                     handleChange={this.handleFilterClick}
                     options={['pokemon', 'type_1', 'shape', 'ability_1',]} />
                </div>
                <div className = "poke-list">
                {this.state.pokedex.map(Pokemon => <div className = "poke-item" key={Pokemon.pokemon}>
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
       