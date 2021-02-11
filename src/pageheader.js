import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'



export default class PageHeader extends Component {
    render() {
        return (
            <header>
                <NavLink exact activeClassName = "selected" to = "./">
                    Home
                </NavLink>
                <NavLink exact activeClassName = "selected" to = "/search">
                    Search Pokemon
                </NavLink>
            </header>
         )
    }}