import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Game extends Component {
    render() {
        return (
            <div>
                <h1 id="game_title">pacman</h1>
                <div class ="pacman">
                    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                    alt="new" class ="game_image"/>
                    
                    <aside class="text_place">
                        <p>this is game section</p>
                    </aside>
                </div>

                <div>
                <Button variant="primary" size="lg" block>
                    Game start
                </Button>
                </div>
                <h1 id="game_title">snake</h1>
                <div class ="snake">
                    <img  src="https://cdn.glitch.com/d9c9199f-96e8-49b7-957a-282b4597a023%2Fsnake.png?v=1576715399393"
                    alt="new" class ="game_image" id ="snake_img" />

                    <aside class="text_place">
                        <p>this is game section</p>
                    </aside>
                
                </div>

                <div>
                <Button variant="primary" size="lg" block>
                    Game start
                </Button>
                </div>
                <h1 id="game_title">space</h1>
                <div class ="space">
                    <img src="https://cdn.glitch.com/d9c9199f-96e8-49b7-957a-282b4597a023%2FSpace-invaders-game-preview..png?v=1576713911799"
                    alt="new" class ="game_image"/>

                    <aside class="text_place">
                        <p>this is game section</p>
                    </aside>

                </div>

                <div>
                <Button variant="primary" size="lg" block>
                    Game start
                </Button>
                </div>
                
            </div>
        )
    }
}

export default Game
