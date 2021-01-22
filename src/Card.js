import React, { Component } from 'react'



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
                        <img src="http://portfolioofmh.com/card-game/simpsons_logo.jpg" alt="simpons logo"/>
                    </div>

                <div className="back" >
                    <img src={'http://portfolioofmh.com/card-game/' + this.props.image.src} alt={this.props.image.name}/>

                </div>

            </div>

        )
       
    }


}

export default Card