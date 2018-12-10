import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountDue: "",
      amountReceived: "",
      output: "0"

    }

  this.changeHandler = this.changeHandler.bind(this);
  this.clickHandler = this.clickHandler.bind(this);  
  }
    
    changeHandler(props) {
      const name = props.target.name;
      const value = props.target.value;
      this.setState({
        [name]: value
      });
    }
    

    clickHandler(amountDue, amountReceived){
      amountDue = this.state.amountDue;
      amountReceived = this.state.amountReceived;
      
      const change = Number((amountReceived - amountDue).toFixed(2));

      let twenties = Math.floor(change/20);
      let remainder = change - (twenties * 20);

      let tens = Math.floor(remainder/10);
      remainder -= (tens * 10);

      let fives = Math.floor(remainder/5);
      remainder -= (fives * 5);

      let ones = Math.floor(remainder);
      remainder = ((remainder - ones) * 100).toFixed(2);

      let quarters = Math.floor(remainder/25);
      remainder -= (quarters * 25);
      
      let dimes = Math.floor(remainder/10);
      remainder -= (dimes * 10);

      let nickels = Math.floor(remainder/5);
      remainder -= (nickels * 5);

      let pennies = Math.floor(remainder);
      
      
      console.log(twenties);
      console.log(tens);
      console.log(fives);
      console.log(ones);
      console.log(quarters);
      console.log(dimes);
      console.log(nickels);
      console.log(pennies);
      console.log(remainder);
      console.log(change);

      this.setState({
        twenties: Number(twenties),
        tens: Number(tens),
        fives: Number(fives),
        ones: Number(ones),
        quarters: Number(quarters),
        dimes: Number(dimes),
        nickels: Number(nickels),
        pennies: Number(pennies),
        output: change
      });

    }
  
  render() {
    let newOutput = (this.state.output) - (this.state.output) - (this.state.output);
    
    if (this.state.output >= 0){
      alert = <div className="alert alert-success">
      <div className="text-center" name="output" onChange={this.changeHandler}>The total change due is ${this.state.output}</div>
    </div>
    }
    else {
      alert = <div className="alert alert-danger">
      <div className="text-center" name="output" onChange={this.changeHandler}>You still owe! Please provide an additional ${newOutput}</div>
    </div>
    }

    return (
    <div className="container">
      <div className="page-header" id="title">
        <h1>Change Calculator</h1>
      </div>
  
      <div className="row">
        <div className="col-sm-4">
          <div className="panel panel-default">
            <div className="panel-heading">Enter Information</div>
              
            <div className="panel-body">
              <div className="form-group">
                <label for="amountDue">How much is due?</label>
                <input name="amountDue" onChange={this.changeHandler} className="form-control" type="number" increment="0.01"></input>
              </div>    

              <div className="form-group">
                <label for="amountReceived">How much was received?</label>
                <input name="amountReceived" onChange={this.changeHandler} className="form-control" type="number" increment="$0.01"></input>
              </div> 
            </div>

            <div className="panel-footer">
              <button className="btn btn-primary btn-block" onClick={this.clickHandler} name="calculate">Calculate</button>
            </div>

        </div>
        </div>
      
        <div className="col-sm-8">
          <div className="panel">
            <div className="panel-body">

              {alert}

              <div className="grid-columns">
              
                <div className="col-md-3">
                  <div className="text-center well">
                    <h4>Twenties</h4>
                    <p className="change" name="twenties" onChange={this.changeHandler}>{this.state.twenties}</p>
                  </div>
                </div>

                <div className="col-md-3">  
                  <div className="text-center well">
                    <h4>Tens</h4>
                    <div className="change" name="tens" onChange={this.changeHandler}>{this.state.tens}</div>
                  </div>
                </div> 
                
                <div className="col-md-3">  
                  <div className="text-center well">
                    <h4>Fives</h4>
                    <div className="change" name="fives" onChange={this.changeHandler}>{this.state.fives}</div>
                    </div>
                </div>

                <div className="col-md-3">  
                  <div className="text-center well">
                    <h4>Ones</h4>
                    <div className="change" name="ones" onChange={this.changeHandler}>{this.state.ones}</div>
                  </div>
                </div>

              </div>

              <div className="grid-columns">

                <div className="col-md-3">  
                  <div className="text-center well">
                    <h4>Quarters</h4>
                    <div className="change" name="quarters" onChange={this.changeHandler}>{this.state.quarters}</div>
                  </div>
                </div>

                <div className="col-md-3">  
                  <div className="text-center well">
                    <h4>Dimes</h4>
                    <div className="change" name="dimes" onChange={this.changeHandler}>{this.state.dimes}</div>
                  </div>
                </div>

                <div className="col-md-3">  
                  <div className="text-center well">
                    <h4>Nickels</h4>
                    <div className="change" name="nickels" onChange={this.changeHandler}>{this.state.nickels}</div>
                  </div>
                </div>

                <div className="col-md-3">  
                  <div className="text-center well">
                    <h4>Pennies</h4>
                    <div className="change" name="pennies" onChange={this.changeHandler}>{this.state.pennies}</div>
                  </div>
                </div>

              </div>   
            </div>
          </div>
        </div>

    </div>
    </div>
      
    )
  }
}

export default App;
