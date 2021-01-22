import React, { Component } from 'react'
import logo from './images/simpsons_logo.jpg'
import burns from './images/burns.png'
import human_fly from './images/human_fly.png'
import laura_powers from './images/laura_powers.png'
import lou_eddie from './images/lou_eddie.png'
import ned from './images/ned.png'
import otto from './images/otto.png'
import skinner from './images/skinner.png'
import smithers from './images/smithers.png'


class Card extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isOpen : false
        }

        this.openCard= this.openCard.bind(this)

       
    }

    openCard(){
        
        if(!this.props.isOpen){
           
            this.props.cardClick(this.props.index);
        }
    }


    

    render(){



        return(
            <div className={'card ' + (this.props.isOpen  ? 'flipped ' : '')} onClick={this.openCard} >

                    <div className="front">

                    
                        <img src={logo} alt="simpons logo"/>
                    </div>

                <div className="back" >
                    <img src={this.props.image.src} alt={this.props.image.name}/>

                </div>

            </div>

        )
       
    }


}

export default Card