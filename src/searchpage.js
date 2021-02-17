import React, { Component } from 'react'
import DropDown from './dropdown.js'
import request from 'superagent'
import Spinner from './spinner.js'
import './searchpage.css'

export default class SearchPage extends Component {
    state = {
        pokedex: [],
        selectedSort: "asc",
        selectedFilter: "pokemon",
        keyword: "",
        loading: false,
        }
      componentDidMount = async () => {
          await this.catchEmAll();
        }
      catchEmAll = async () => {
          this.setState({loading: true});
          const pokedex = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.keyword}&sort=${this.state.selectedFilter}&direction=${this.state.selectedSort}`);
          this.setState({
              loading: false,
              pokedex: pokedex.body.results
            });
        }
      handleKeywordChange = (e) => {;
          this.setState({
              keyword: e.target.value
            });
          
        }
        handleFilterClick = (e) => {
            this.setState({ 
                selectedFilter: e.target.value,
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
                    <input  onChange = {this.handleKeywordChange} placeholder = "Search Keyword"></input>
                    Sort:
                    <DropDown 
                    currentValue={this.state.selectedSort}
                    handleChange={this.handleSort}
                    options={['asc', 'desc']}/>
                    <DropDown
                     currentValue={this.state.selectedFilter}
                     handleChange={this.handleFilterClick}
                     options={['pokemon', 'type_1', 'shape', 'ability_1',]} />  
                     <button onClick = {this.handleSubmit}>Catch em All!</button>
                </div>
                <div className = "poke-list">
                {this.state.loading ? <Spinner/>:
                this.state.pokedex.map(Pokemon => <div className = "poke-item" key={Pokemon.pokemon}>
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