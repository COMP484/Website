import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

export class Slidshow extends Component{
  constructor(props) {
    super(props)
    
    this.state = {
      images: [
        "https://cdn.glitch.com/d9c9199f-96e8-49b7-957a-282b4597a023%2Fsnake.png?v=1576715399393",
        "https://cdn.glitch.com/d9c9199f-96e8-49b7-957a-282b4597a023%2FSpace-invaders-game-preview..png?v=1576713911799",
        "https://cdn.glitch.com/d9c9199f-96e8-49b7-957a-282b4597a023%2Fpac.png?v=1576716625453",
        "https://cdn.glitch.com/d9c9199f-96e8-49b7-957a-282b4597a023%2Fpac.png?v=1576716625453",
        
      ],
      index: 0,
      change: 0
    }
  }
  automove = () => {
    setInterval(() => {
      if(this.state.index === this.state.images.length - 1) {
        return this.setState({
          index: 0,
          change: 0
        })
      }
      else if(this.state.index !== this.state.images.length - 1){
        this.setState(previous => ({
          index: previous.index + 1,
          change: previous.change - (this.slideWidth())
        }));
      }
    },5000);
  }

  goback = () => {
    if(this.state.index === 0){
      return;
    }
  
  this.setState(previous => ({
    index: previous.index - 1,
    change: previous.change + this.slideWidth()
  }))  
  }
  
  gonext = () => {
    if(this.state.index === this.state.images.length - 1) {
      return this.setState({
        index: 0,
        change: 0
      })
    }
   
    this.setState(previous => ({
      index: previous.index + 1,
      change: previous.change - (this.slideWidth())
    }));
  }

slideWidth = () => {
    return document.querySelector('.slide').clientWidth
 }
  
  render() {
    this.automove();
    return (
      <div className="slider">

        <div className="slider-wrapper" style={{transform: `translateX(${this.state.change}px)`}}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>
        
        <LeftArrow 
         goback={this.goback}
        />
        <RightArrow 
         gonext={this.gonext}    
        /> 
      </div>         
    );
  }
}


export default Slidshow