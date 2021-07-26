import React, { Component } from 'react';
import { Navbar, NavbarBrand, Form, FormGroup, Label, Input, Button, Col, Submit} from 'reactstrap';
import './App.css';
import Rendergames from './RenderGameComponents';
// import axios from 'axios';
import {GAMES} from './games';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      games: GAMES,
      gameList: GAMES,
      search: null
    }
  }

  render() {

    console.log(this.state.search);

    const academic = this.state.games.filter((academic)=>academic.Group === "Academic");
    const financial_Literacy = this.state.games.filter((fin_lit)=>fin_lit.Group === "Financial Literacy");
    const key_Stage_1 = this.state.games.filter((ks_1)=>ks_1.Level === "Key Stage 1");
    const key_Stage_2 = this.state.games.filter((ks_2)=>ks_2.Level === "Key Stage 2");

    const filterHandler = (filter)=> {
      //Academic
      if(academic !== null && filter === "academic"){
        this.setState({
          gameList: academic
        }); 
      }
      //Financial Literacy
      if(financial_Literacy !== null && filter === "Financial Literacy"){
        this.setState({
          gameList: financial_Literacy
        }); 
      }
      //Key Stage 1
      if(key_Stage_1 !== null && filter === "Key Stage 1"){
        this.setState({
          gameList: key_Stage_1
        }); 
      }
      //Key Stage 2
      if(key_Stage_2 !== null && filter === "Key Stage 2"){
        this.setState({
          gameList: key_Stage_2
        }); 

      }
      //Remove Filter
      if(this.state.games && filter ===  "Clear Filter"){
        this.setState({
          gameList: this.state.games
        }); 

      }      
    }

    const setSearch=(e)=>{
      this.setState({
        search:e.target.value
      })
    }

    const handleSearch= ()=> {
      let searchValue = this.state.search;
      let result = this.state.games.filter((game)=> game.GameTitle === searchValue);
      if(result && result !==null){
          this.setState({
          gameList: result
        })
      }
      else {
        this.setState({
          gameList: null
        })
      }
    }

    return (
      <div>
        <Navbar color="success" dark >
          <div className="container">
            <div className="row">
              <NavbarBrand className="col-6">9jaiKids</NavbarBrand>
            </div>
          </div>
        </Navbar>
        <div className ="container">
          <div className="row my-3">
            <h1 className="col-7">9ijakids Game List</h1>
            <i className="col-auto mt-4">
              <div className="">
                Group:  &nbsp;<span role="button" className="badge bg-success" onClick={()=> filterHandler("academic")}>Academic</span> <span role="button" className="badge bg-success" onClick={()=> filterHandler("Financial Literacy")}>Financial Literacy</span><br/>
                Level:  &nbsp; &nbsp;<span role="button" className="badge bg-success" onClick={()=> filterHandler("Key Stage 1")}>Key Stage 1</span> <span role="button" className="badge bg-success" onClick={()=> filterHandler("Key Stage 2")}>Key Stage 2</span><br/>
                Clear Filter: &nbsp;<span role="button" className="badge bg-success" onClick={()=> filterHandler("Clear Filter")}>Clear all Filter</span>
              </div>
            </i>
          </div>
          <div className="my-2 mr-auto col-6 col-md-4 m-5">
          <Form>
            <FormGroup row>
              <Input type="text" placeholder="Search by topics" id="search" className="col" onChange={(e)=> setSearch(e)}/>&nbsp;
              <Button className="btn btn-success col-4 col-md-3" for="search" onClick={()=> handleSearch()}>Search</Button>
            </FormGroup>
          </Form>
        </div>

          <div className="container">
            <Rendergames games={this.state.gameList}/>
          </div>

        </div>
      </div>
    )
  }
}

export default App
