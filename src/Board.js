import React, { Component } from 'react'
import Card from './Card'

const numOfCards = 16;
const numberOfTries = 6;
const cardImages = [
    {src: './images/burns.png',  name:'Burns'},
    {src: './images/human_fly.png',  name:'Human Fly'},
    {src: './images/laura_powers.png',  name:'Laura Powers'},
    {src: './images/lou_eddie.png',  name:'Lou & Eddie'},
    {src: './images/ned.png',  name:'Ned Flanders'},
    {src: './images/otto.png',  name:'Otto'},
    {src: './images/skinner.png',  name:'Skinner'},
    {src: './images/smithers.png',  name:'Smithers'}
];

class Board extends Component {


    constructor(props) {
        super(props)
        this.state = {
            order : [],
            firstCard: null,
            secondCard: null,
            openedCards: [],
            message: '',
            numberOfTries: numberOfTries,
            matches: 0,
            gameover:false
        }


       
    }

    componentDidMount(){
        this.start();
    }

   

    start = () =>{
        let arrayOrder = []
        for(let i = 0; i < numOfCards; i++){
            arrayOrder.push(i)
        }
        arrayOrder = arrayOrder.sort(() => Math.random() - 0.5)
        this.setState({order:arrayOrder});

    }

    restart = () => {
        this.setState({
            order : [],
            firstCard: null,
            secondCard: null,
            openedCards: [],
            message: '',
            numberOfTries: numberOfTries,
            matches: 0,
            gameover: false
        }, () => this.start() );
    }



    findMatch = () => {
        if( Math.floor(this.state.order[this.state.firstCard]/2) === Math.floor(this.state.order[this.state.secondCard]/2) ){
            this.setState({
                firstCard:null,
                secondCard:null,
                message: 'match',
                matches: this.state.matches + 1
            }, () => {
                if(this.state.matches === (numOfCards/2)) {
                    this.setState({
                        message: 'YOU WIN!',
                        gameover: true
                    })
                }
            } )
        }
        else{

            this.setState({
                message: 'Not a Match',
                numberOfTries: this.state.numberOfTries - 1
            })
            setTimeout(this.closeCards, 1000)
          
        }

       
    }

    closeCards = () =>{
        let updatedArray = this.state.openedCards;

        let removeFirstIndex = this.state.openedCards.indexOf(this.state.firstCard);
        updatedArray.splice(removeFirstIndex , 1);


        let removeSecondIndex = this.state.openedCards.indexOf(this.state.secondCard);
        updatedArray.splice(removeSecondIndex , 1);
       

        this.setState({
            firstCard:null,
            secondCard:null,
            openedCards:updatedArray
        })

        if(this.state.numberOfTries === 0){
            this.setState({
                message: 'GAME OVER : ( ',
                gameover: true
            })
        }

    }

    cardClick = (index) => {

        if(this.state.numberOfTries > 0 ){
            let updatedArray = [];
            updatedArray = this.state.openedCards;
               updatedArray.push(index)
            if(this.state.firstCard === null){
               
                this.setState({firstCard: index, openedCards: updatedArray});
    
    
            }else{
                this.setState({secondCard: index , openedCards: updatedArray},
                () => this.findMatch()   
               );
    
              
            }

        }
       



    }
   

    render(){

        

        return(

            <div id="board-container">
                <div id="board">

                {this.state.order.length > 0 ?   

                        

                    
                    this.state.order.map((item, i) =>  
                    
                            <Card key={i} 
                            index={i} 
                            id={item} 
                            cardClick = {this.cardClick}
                            openedCards = {this.state.openedCards}
                            isOpen={this.state.openedCards.includes(i)}
                            image={cardImages[ Math.floor(item/2)]} 
                            />
                    
                    )


                    


                        :''}


                </div>
                <div className="message">
                    <p>
                        {this.state.message}
                        </p>

                    {
                        this.state.numberOfTries > 0  ?
                          
                           

                           <p>

                                {this.state.numberOfTries} Tries Left

                           </p> 

                           : ''
                            
                            
                    }


                        {
                        this.state.gameover  ?
                            <a onClick={this.restart}>
                                Play Again?

                            </a>
                        

                          : ''
                            
                            
                    }
                
                
                </div>

                

            </div>
         

        )
       
    }


}

export default Board