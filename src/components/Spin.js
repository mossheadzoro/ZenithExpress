import React, { Component } from 'react'
import load from './load.gif'
export class Spin extends Component {
  render() { 
    return (
      <div className='text-center'>
        <img src={load} alt="loading"></img>
        </div>
    )
  }
}

export default Spin