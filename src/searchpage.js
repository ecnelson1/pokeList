import React, { Component } from 'react'
import Pokemon from './data.js'


export default class SearchPage extends Component {
    state = {
        pokemon: Pokemon.pokemon,
        type_1: Pokemon.type_1,
        attack: Pokemon.attack,
        defense: Pokemon.defense,
      }
      handleKeywordChange = (e) => {
        e.preventDefault();
        this.setState({pokemon: e.target.value})}

        handleFilterClick = (e) => {
          e.preventDefault();
          this.setState({ 
              pokemon: e.target.value,
              type: e.target.value,
              attack: Number(e.target.value),
              defense: Number(e.target.value)

            })}
            render() {
        return (
            <div>
                <aside className= "side-bar">
                    <input onChange = {this.handleKeywordChange}></input>
                    <select onClick = {this.handleClick}>
                        <option value={Pokemon.pokemon}>Pokemon Name</option>
                        <option value={Pokemon.type_1}>Type</option>
                        <option value={Pokemon.attack}>Attack</option>
                        <option value={Pokemon.defense}>Defense</option>
                    </select>
                    <select onClick = {this.handleFilterClick}>
                        <option value = "">Ascending Order</option>
                        <option value = "">Descending Order</option>
                    </select>
                </aside>
                
                {Pokemon.map(Pokemon => <div className = "poke-item" key={Pokemon.pokemon}>
                        <img src={Pokemon.url_img} alt={Pokemon.pokemon}/>
                        <p>{Pokemon.pokemon}</p>
                        <p>{Pokemon.type_1}</p>
                        <p>{Pokemon.attack}</p>
                        <p>{Pokemon.defense}</p>
                    </div>)}
                
               
            </div>
        )
     }
}    
    //     this.state.pokemon.sort(
            //         (a,b) => a[this.state.pokemon].localeCompare(b[this.state.pokemon])
            //     );
            //     this.state.type.sort(
            //         (a,b) => a[this.state.type].localeCompare(b[this.state.type])
            //     )
            //     this.state.attack.sort(
            //         (a,b) => a[this.state.attack].localeCompare(b[this.state.attack])
            //    )
            //    this.state.defense.sort(
            //     (a,b) => a[this.state.defense].localeCompare(b[this.state.defense])
            //     )

        //   const filteredPokemon = this.state.pokemon.filter((pokemon => pokemon.pokemon.includes(this.state.pokemon)))
        