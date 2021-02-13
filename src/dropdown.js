
import React from 'react'
import Pokemon from './data.js';

export default class DropDown extends React.Component {
    render() {
        return (
            <select
                value={this.props.currentValue}
                onChange={this.props.handleChange}
                key={Pokemon.pokemon}>
                {
                    this.props.options.map(
                        pokeOpt =>
                            <option value={pokeOpt} key={pokeOpt}> {pokeOpt}
                            </option>
                    )
                }
            </select>
        )
    }
}