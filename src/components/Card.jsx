
import React from 'react'
import PropTypes from 'prop-types'

const Card = ({img}) => {
  return (
    <div>

      {img}
      
      <div className="card" style= {{width: "18rem",}}>
        <img src={img} className="card-img-top" alt="imagen.png"/>
      </div>

    </div>
  )
}

Card.propTypes = 
{
  img : PropTypes.string,
}

export default Card