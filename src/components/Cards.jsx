
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Cards = () => {

  const [images, setImages] = useState( 
    { 
    } 
  );

  const peticion = async() => {
    const res = await fetch("https://api.unsplash.com/photos/?client_id=1CV6aTuaRDD9UnKCOW8YyJx8UPW0QMspIHO9g2yzGGs");
    const data = await res.json();
    console.log(data[0].urls.regular);
    // console.log(data[0]);

    setImages(data);
  }

  useEffect(() => {
    peticion();
  }, [])

  return (
    <>
      {/* <Card img = {images[0].urls.regular} /> */}
      {/* <Card img = {images[0].urls.regular} /> */}
    </>
  )
} 

export default Cards;