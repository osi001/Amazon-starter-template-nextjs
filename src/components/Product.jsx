import React from "react";
import Image from 'next/image'


const Product = ({id, title, price, category, description, image}) => {
  return (
    <div>
      <p>{category}</p>


      <Image src={image} height={200} width={200} objectFit="contain"/>
    </div>
  )
}

export default Product