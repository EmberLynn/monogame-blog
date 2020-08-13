import React from 'react'

const sideBarComponent = () => {
    const style = {
        backgroundColor: '#cccccc',
        color: 'black',
        font: 'inherit',
        border: '1px solid #d9d9d9',
        boxShadow: '5px 5px 4px #999999',
        padding: '8px',
        width: '20%',
        margin: '16px auto',
        position: 'absolute',
        left: '30px'
      }
      
      return(
          <div style={style}>
              <p>Sidebar content goes here</p>
          </div>
      )
  }

export default sideBarComponent;