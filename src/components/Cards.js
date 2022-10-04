import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/img-9.jpg'}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              alt = "description of image"
              label='Adventure'
              path='/react_first_website/services'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/img-2.jpg'}
              text='Travel through the Islands of Bali in a Private Cruise'
              alt = "description of image"
              label='Luxury'
              path='/react_first_website/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/img-3.jpg'}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              alt = "description of image"
              label='Mystery'
              path='/react_first_website/services'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/img-4.jpg'}
              text='Experience Football on Top of the Himilayan Mountains'
              alt = "description of image"
              label='Adventure'
              path='/react_first_website/products'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/img-8.jpg'}
              text='Ride through the Sahara Desert on a guided camel tour'
              alt = "description of image"
              label='Adrenaline'
              path='/react_first_website/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
