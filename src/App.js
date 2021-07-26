import React, { Component } from 'react';
import { Navbar, NavbarBrand, Badge} from 'reactstrap';
import './App.css';
import Rendergames from './gameComponents';
// import axios from 'axios';
import {GAMES} from './games';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      games: GAMES
    }
  }

  render() {

    const academic = this.state.games.filter((academic)=>academic.Group == "Academic");
    const financial_Literacy = this.state.games.filter((fin_lit)=>fin_lit.Group == "Financial Literacy");
    const key_Stage_1 = this.state.games.filter((ks_1)=>ks_1.Level == "Key Stage 1");
    const key_Stage_2 = this.state.games.filter((ks_2)=>ks_2.Level == "Key Stage 2");

    const filterHandler = (filter)=> {
      //Academic
      if(academic !== null && filter == "academic"){
        this.setState({
          games: academic
        }); 
      }
      //Financial Literacy
      if(financial_Literacy !== null && filter == "Financial Literacy"){
        this.setState({
          games: financial_Literacy
        }); 
      }
      //Key Stage 1
      if(key_Stage_1 !== null && filter == "Key Stage 1"){
        this.setState({
          games: key_Stage_1
        }); 
      }
      //Key Stage 2
      if(key_Stage_2 !== null && filter == "Key Stage 2"){
        this.setState({
          games: key_Stage_2
        }); 

      }
    }

    return (
      <div>
        <Navbar color="success" dark expand="md">
          <div className="container">
            <NavbarBrand>9jaiKids</NavbarBrand>
          </div>
        </Navbar>
        <div className ="container">
          <div className="row my-3">
            <h1 className="col-7">9ijakids Game List</h1>
            <strong className="col-auto mt-4">
              <div className="">
                Group Filter: <span role="button" className="badge bg-success" onClick={()=> filterHandler("academic")}>Academic</span> <span role="button" className="badge bg-success" onClick={()=> filterHandler("Financial Literacy")}>Financial Literacy</span><br/>
                Level Filter: <span role="button" className="badge bg-success" onClick={()=> filterHandler("Key Stage 1")}>Key Stage 1</span> <span role="button" className="badge bg-success" onClick={()=> filterHandler("Key Stage 2")}>Key Stage 2</span>
              </div>
            </strong>
          </div>
          <div className="container">
            <Rendergames games={this.state.games}/>
          </div>

        </div>
      </div>
    )
  }
}

export default App
