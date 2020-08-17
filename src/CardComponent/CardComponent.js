import React from 'react'

const cardComponent = (props) => {

    const style = {
      backgroundColor: '#cccccc',
      color: 'black',
      font: 'inherit',
      border: '1px solid #d9d9d9',
      boxShadow: '5px 5px 4px #999999',
      padding: '8px',
      width: '50%',
      margin: '16px auto',
      opacity: '0.9'
    }
    
    return(
        <div style={style}>
            <p>{props.content}</p>
            <img src={props.image} alt="Generic Display"/>
        </div>
    )
}

export default cardComponent;