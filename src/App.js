import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state={
    task:'',
    tasks:[]
  }
  onChange=(e) => {
    this.setState({task: e.target.value})
    console.log(e.target.value);        
  }
  render() {
    return (
      <div className="container ">
        <div className="row pt-5 ">
          <div className="col-4"></div>
          <div className="col-4 text-center border border-primary ">
            <h1 className="mt-4">Bienvenido</h1>
            <h4 className="mb-2">ingresa tus tareas</h4>
            {hola1}
            <form onSubmit="">
              <input
                type="text"
                placeholder="escriba una tarea"
                className="px-3 mb-2 py-1 text-center"
                onChange={this.onChange}
              />
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}
export default App;
