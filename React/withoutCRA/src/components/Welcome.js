import React from 'react';
import img1 from '../images/img1.jpg'

export default function Welcome( {withImg, firstName, lastName} ) {
  return (
    <>
      <img src={cat} alt="welcome1" height="200" />
      <div>Hello!</div>
      <div>
        <span>{props.firstName}</span>
        {props.lastName}
      </div>
    </>
  )
}