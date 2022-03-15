// import components 
import React from 'react';
import { View, Image } from 'react';

const getStars = (rating) => { 
  switch (rating) {
    case 0:
      return [0,0,0,0,0];
    case 0.5:
      return [2,0,0,0,0];
    case 1:
      return [1,0,0,0,0];
    case 1.5:
      return [1,2,0,0,0];
    case 2:
      return [1,1,0,0,0];
    case 2.5:
      return [1,1,2,0,0];
    case 3:
      return [1,1,1,0,0];
    case 3.5:
      return [1,1,1,2,0];
    case 4:
      return [1,1,1,1,0];
    case 4.5:
      return [1,1,1,1,2];
    case 5:
      return [1,1,1,1,1];
    default:
      return [];
  }
}

const getStar = (star, size, index) => {
    const starSize = !size || !Array.isArray(size) ? [10, 10] : size;
    switch (star) {
        case 0: 
        return <Image key={index} source={require('../../img/empty.png')} style={{width: starSize[0], height: starSize[1]}} />;
        case 1:
          return <Image key={index} source={require('../../img/selected.png')} style={{width: starSize[0], height: starSize[1]}} />;
        case 2:
          return <Image key={index} source={require('../../img/half.png')} style={{width: starSize[0], height: starSize[1]}} />;
        default:
      }
    }
    
    const StarRating = ({rating, size}) => {
      if (!rating) return null;
      return (
        <View style={style.container}>
          {getStars(rating).map((star, index) => getStar(star, size, index))}
        </View>
      )
    };
    
export default StarRating;
    