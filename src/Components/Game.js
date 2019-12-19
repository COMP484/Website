import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Game extends Component {
    render() {
        return (
            <div>
                <h1 id="game_title">pacman</h1>
                <div class ="pacman">
                    <img src="https://cdn.glitch.com/d9c9199f-96e8-49b7-957a-282b4597a023%2Fpac.png?v=1576716625453"
                    alt="new" id ="game_image_pac"/>
                    
                    <aside class="text_place">
                        <p>eleased in 1980 by Namco, <br />
                        Pac-Man is a classic arcade <br />
                        game where the iconic character <br />
                        must devour as many dots as he can while <br />
                        avoiding four colorful ghosts as he navigates the maze.<br /> 
                        Written in Phaser 2, <br />
                        this JavaScript implementation <br />
                        allows the player to eat as <br />
                        many dots as you can - <br />
                        see how high a score you can get before the ghosts catch you!</p>
                    </aside>
                </div>

                <div>
                {/* target="_blank" href={''} */}
                <Button variant="primary" size="lg" block>
                    Game start
                </Button>
                </div>
                <h1 id="game_title">snake</h1>
                <div class ="snake">
                    <img  src="https://cdn.glitch.com/d9c9199f-96e8-49b7-957a-282b4597a023%2Fsnake.png?v=1576715399393"
                    alt="new" id ="game_image_snake" />

                    <aside class="text_place">
                        <p>Snake was first introduced in 1997 by Nokia <br />
                        is a classic phone game and has since been <br />
                        developed and enjoyed by young and old people<br />
                         alike and is a fun, simple game. <br />
                         Developed with html and css this implementation <br />
                         allows you to move around the map to eat as many pieces of food as you can!</p>
                    </aside>
                
                </div>

                <div>
                {/* target="_blank" href={''} */}
                <Button variant="primary" size="lg" block>
                    Game start
                </Button>
                </div>
                <h1 id="game_title">space</h1>
                <div class ="space">
                    <img src="https://cdn.glitch.com/d9c9199f-96e8-49b7-957a-282b4597a023%2FSpace-invaders-game-preview..png?v=1576713911799"
                    alt="new" id ="game_image_space"/>

                    <aside class="text_place">
                        <p>The Original Space invaders <br />is a Japanese game <br />created in 1978 by (C)<br /> ATARI  it's now available online made with phaser 3</p>
                    </aside>

                </div>

                <div>
                {/* target="_blank" href={''} */}
                <Button variant="primary" size="lg" block>
                    Game start
                </Button>
                </div>
                
            </div>
        )
    }
}

export default Game
