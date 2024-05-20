
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'

import {
  HashRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";
import About from './About';



export default class App extends Component {
 
  state={
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        
        <Router>
          <Navbar />
          <LoadingBar
        color='#FFFFFF'
        height={3}
        progress={this.state.progress}
        
      />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={8} country='us' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={this.setProgress}apiKey={this.apiKey} key='business' pageSize={8} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress}apiKey={this.apiKey} key='entertainment' pageSize={8} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress}apiKey={this.apiKey} key='health' pageSize={8} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={8} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress}apiKey={this.apiKey} key='sports' pageSize={8} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress}apiKey={this.apiKey} key='technology' pageSize={8} country='us' category='technology' />}></Route>
           <Route path='/about' element={<About/> }></Route>
          </Routes> 
         
         
        </Router>
       
      </div>
    )
  }
}

;




