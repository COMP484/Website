import React, { Component } from 'react'
import Slideshow from './Slideshow';
import Noteone from './NoteOne';
import Notetwo from './NoteTwo';



export class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Slideshow />
                </div>
                
                <div id ="cardContainer">
                    <div class = "cardOne">
                        <Noteone />
                    </div>
                    <div class = "cardTwo">
                        <Notetwo />
                    </div>  
                </div>
                
            </div>
        )
    }
}

export default Home
