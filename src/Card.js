import React, { Component } from 'react'



class Card extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isOpen : false
        }

        this.openCard= this.openCard.bind(this)
        this.closeCard=this.closeCard.bind(this);
       
    }

    openCard(){
        
        if(!this.props.isOpen){
           
            this.props.cardClick(this.props.index);
        }
        
        
        
    }

    closeCard(){
       
            //this.setState({isOpen:false})
       
    }

    

    render(){

    //let openedCards = this.props.openedCards;
      // let isOpen = openedCards.includes(this.props.index);
      // console.log(isOpen)

        return(
            <div className={'card ' + (this.props.isOpen  ? 'flipped ' : '')} onClick={this.openCard} >

                    <div className="front">

                        <img src="images/simpsons_logo.jpg" alt="simpons logo"/>
                    </div>

                <div className="back" >
                    <img src={'images/' + this.props.image.src} alt={this.props.image.name}/>

                </div>

               

          

            </div>

        )
       
    }


}

export default Card