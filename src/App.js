import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      result:"",
      color:"",
      editDisabled: false,

    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange = event => {
    this.setState({ term: event.target.value, editDisabled: "disabled", result:""});
    console.log(this.state.editDisabled);

  };
  onSubmit = e => {
    e.preventDefault();
    let re = /[\W_]/g;
    let lowStr = this.state.term.toLowerCase().replace(re,'');
    let revStr=lowStr.split('').reverse().join('');
    this.setState({
      result:revStr
    })
    if(lowStr==revStr)
    {
      this.setState({
        result:"Yay! "+lowStr+" is a Palindrom",
        color:"green",
        term:""
      })
    }
    else{
      this.setState({
        result:"Oops, "+lowStr+" is a not a Palindrom",
        color:"red",
        term:""
      })
    }
};

  render() {
    return (
      <div className="container">
      <br/>
      <div className="row" >
     
        <div className="col-md-6 mx-auto " >
         <h2 className="text-center" >Palindrom Test</h2>
          <br/>
          <form ClassName="form-group form-group-lg" onSubmit={this.onSubmit}>
          <div className="form-group">
            
            <div className="row">
            
              <div className="col-lg-12">
              <label> Please Enter Value</label>
                <input
                  type="text"
                  
                  className="form-control"
                  id="exampleInputEmail1"
                  value={this.state.term || ""}
                  onChange={this.onChange.bind(this)}
                />
              </div>
              
            </div>
          </div>
          <div className="col-lg-12 text-right">
          <button
            type="submit"
            onClick={this.onSubmit.bind(this)}
            className="btn btn-primary btn-lg"
            >
            Submit
          </button>
          </div>
        </form>
        <br/>
        <br/>
        <div className="text-center" >
        <p className={this.state.color}>{this.state.result}</p>
        </div>
        </div>
       
      </div>
    </div>
    );
  };
}

export default App;
