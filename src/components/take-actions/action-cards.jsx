import React, { Component } from 'react';
import './action-cards.css';
import cardsData from './actionCardsData'
import {Link} from 'react-router-dom';

class ActionCards extends Component {
    constructor(){
        super()
        this.state = { actionCardData: cardsData, initial: 1, final: 9}
        this.carouselBtnHandler = this.carouselBtnHandler.bind(this)
    }
    
    carouselBtnHandler(valueI,valueF){
        this.setState(prevState => {prevState.initial=valueI; prevState.final=valueF; return prevState})
    }

    render() { 
       
        const singleCard = this.state.actionCardData.map((cardItem) => {
            if(cardItem.id>=this.state.initial && cardItem.id<=this.state.final){
            return(
                <div className='individual-card'>
                    <Card 
                        imageType = {cardItem.logo} 
                        cardHeading = {cardItem.heading}
                        cardContent = {cardItem.content}
                        cardButton = {cardItem.btnText}
                    />
                </div>
               );
            }
               })

        return (
            <div className="reward-cards">
                <div className="reward-cards-wrapper">
                        {singleCard}
                </div>

                <div className="carousel-btns" style={{textAlign:'center'}}>
                    <button className='carouserl-track-button' onClick={() => {this.carouselBtnHandler(1,9)}}>1</button>
                    <button className='carouserl-track-button' onClick={() => {this.carouselBtnHandler(10,18)}}>2</button>
                    <button className='carouserl-track-button' onClick={() => {this.carouselBtnHandler(19,27)}}>3</button>
                </div>

            </div>
         );
    }
}
export default ActionCards;

// A single card component

class Card extends Component {
    render() {
        const pic = './petetion.png'
        return ( 
            <div className="reward-card">
                <img src={require('./tweet.png')} alt="" className='reward-image'/>
                <h4 style={{textAlign:'center'}}>{this.props.cardHeading}</h4>
                <p>{this.props.cardContent}</p>
                <Link to="/reward/rewards-individual">
                    <button className="btn view-btn">{this.props.cardButton}</button>
                </Link>
            </div>
         );
    }
}