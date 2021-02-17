import React, { Component } from 'react';
import request from 'superagent';
import DropDown from './dropdown.js';
import Spinner from './spinner.js';
import { Link } from 'react-router-dom';
import './searchpage.css'
import PokeList from './pokelist.js';

export default class SearchPage extends Component {
    state = {
        pokedex: [],
        selectedSort: "asc",
        selectedFilter: "pokemon",
        keyword: "",
        loading: false,
        pokeInventory: 0,
        currentPage: 1,
        }
      componentDidMount = async () => {
          await this.catchEmAll();
        }
        componentDidUpdate = async (prevProps, prevState) =>{
            const prevPageNum = prevState.currentPage;
            const nextPageNum = this.state.currentPage;
            if(prevPageNum !== nextPageNum){
                await this.catchEmAll();
            }
        }
      catchEmAll = async () => {
          this.setState({loading: true});
          const pokedex = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.keyword}&sort=${this.state.selectedFilter}&direction=${this.state.selectedSort}&page=${this.state.currentPage}&perPage=50`);
          this.setState({
              loading: false,
              pokedex: pokedex.body.results,
              pokeInventory: pokedex.body.count,
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
            this.catchEmAll();
     }
        handleSubmit = async () => {
         await this.catchEmAll();
     }
    
        handleSort = (e) =>{
        this.setState({
            selectedSort: e.target.value
            });
            this.catchEmAll();
        }
        handleNext = async () =>{
            
            this.setState({
                currentPage: this.state.currentPage + 1,
            });
        }
        handlePrevious = async () => {
            this.setState({
                currentPage: this.state.currentPage - 1,
            })
        }

                render() {
                    const finalPage = Math.ceil(this.state.pokeInventory/50);
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
                <h1>Poke Page {this.state.currentPage}</h1>
                <button onClick = { this.handlePrevious} disabled = {this.state.currentPage === 1}>Previous Page</button>
                <button onClick = {this.handleNext} disabled = {this.state.currentPage === finalPage}>Next Page</button>
                 <div className = "poke-list">
                {this.state.loading ? <Spinner/>:
                <PokeList pokedex = {this.state.pokedex}/>
                }
                </div>
                </div>
                );
            }
        }
