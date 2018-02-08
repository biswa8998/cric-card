import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
class App extends Component {
  constructor(){
    super();
    this.state={
      playingTeamA:'',
      playingTeamB:''
    };

    this.setTeamNames=this.setTeamNames.bind(this);
  }

  setTeamNames(teamA, teamB){
    this.setState({
      teamAName: teamA,
      teamBName: teamB
    });
  }

  render() {
    return (
      <div>
        <Content contentHeaders={this.state.contentHeaders}></Content>
        <MatchDataInput></MatchDataInput>
      </div>
    );
  }
}

class Content extends Component{
  render(){

      return(
         
          <Grid fluid className="welcome-section">
              <Row>
                  <Col sm={12} xs={12} md={12} className="text-center">
                      <h1>Welcome To</h1>
                      <h1 className="app-name-main">CricCard</h1>
                      <h4>A cricket scoring application on React.js</h4>
                  </Col>
              </Row>
          </Grid>
      );
  }
}

class MatchDataInput extends Component {
  render(){
    return(
      <div>
        <h2>Match Data</h2>
        <TeamNamesForm></TeamNamesForm>
      </div>
    );
  }
}

class TeamNamesForm extends Component {
  constructor(props){
    super(props);
    this.state={
      isSubmitEnable: false,
      teamAName: '',
      teamBName: ''
    };
    this.textInputHandler=this.textInputHandler.bind(this);
    this.focusoutHandler=this.focusoutHandler.bind(this);
  }

  textInputHandler(e){
    if(e.target.id==='id-teamA'){
      this.setState({
        teamAName: e.target.value
      });
    }
    if(e.target.id==='id-teamB'){
      this.setState({
        teamBName: e.target.value
      });
    } 
    console.log(this.state.teamAName.length+','+e.target.value);
    if(this.state.teamAName.length>3 && this.state.teamBName.length>3){
      this.setState({
        isSubmitEnable: true
      });
    }else{
      this.setState({
        isSubmitEnable: false
      });
    }
  }

  focusoutHandler(){
    
  }

  render(){
    return(
      <Grid>
        <Row>
          <form>
            <Col sm={6} md={6} xs={12}>
                <label htmlFor="id-teamA">Team A</label>
                <input type="text" value={this.state.teamAName} placeholder="Enter name of Team A" id="id-teamA"  onChange={this.textInputHandler}/>
            </Col>
            <Col sm={6} md={6} xs={12}>
                <label htmlFor="id-teamB">Team B</label>
                <input type="text" value={this.state.teamBName} placeholder="Enter name of Team B" id="id-teamB"  onChange={this.textInputHandler}/>
            </Col>
          </form>
          <p><input type="submit" className="btn btn-info" value="Submit" disabled={!this.state.isSubmitEnable}/></p>
        </Row>
      </Grid>
    );
  }
}

export default App;
