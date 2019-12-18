import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

export class Slidshow extends Component{
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg"
      ],
      index: 0,
      change: 0
    }
  }
  
  goback = () => {
    if(this.state.index === 0)
    return;
  
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
      change: previous.change + -(this.slideWidth())
    }));
  }

slideWidth = () => {
    return document.querySelector('.slide').clientWidth
 }
  
  render() {
    return (
      <div className="slider">

        <div className="slider-wrapper"
        
          style={{
            transform: `translateX(${this.state.change}px)`,
          }}>
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