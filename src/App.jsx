import React, { Component } from 'react';

import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends React.Component {
    render () {
        return (
            <div className="app">
                <div className="app-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                        type="text"
                        placeholder="Search for an Artist"
                    />
                    <InputGroup.Addon>
                        <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className="artist-profile">
                    <div>Artist Name</div>
                    <div>Artist Picture</div>
                </div>
                <div className="galler">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;