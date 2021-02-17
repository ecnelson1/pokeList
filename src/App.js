import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import SearchPage from './searchpage.js';
import HomePage from './home.js';
import PageHeader from './pageheader.js';
import PokeDetailsPage from './pokedetails.js'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <PageHeader />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/search" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route 
                            path="/:caughtPoke" 
                            exact
                            render={(routerProps) => <PokeDetailsPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}