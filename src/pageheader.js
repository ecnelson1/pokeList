import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'



export default withRouter(class PageHeader extends Component {
    render() {
        return (
            <header>{this.props.location !== '/search' &&
                 <NavLink exact activeClassName = "selected" to = "/search">
                    Search Pokemon
                </NavLink>}
                
                {
                    this.props.location.pathname !== '/' &&
                   <NavLink exact activeClassName = "selected" to = "/">
                    Home
                </NavLink>
                }
               
            </header>
         )
    }})