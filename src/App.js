import React, { Component } from "react";
import "./App.css";
import Input from "./componentes/Inputs";
import Mode from "./componentes/Mode";

class App extends Component {
  state = {
    task: "",
    tasks: [],
    mode: {
      mod: "Dark",
      clasName: "btn btn-dark",
      bg: "bg-dark text-white",
      bgInput: "bg-light",
    },
  };
  changeMode = (mode) => {
    if (mode === "Dark") {
      const light = {
        mod: "Light",
        clasName: "btn btn-light",
        bg: "bg-light",
        bgInput: "bg-dark text-white",
      };
      this.setState({ mode: light });
    } else {
      const dark = {
        mod: "Dark",
        clasName: "btn btn-dark",
        bg: "bg-dark text-white",
        bgInput: "bg-light",
      };
      this.setState({ mode: dark });
    }
  };
  onChange = (e) => {
    this.setState({ task: e.target.value });
  };
  onSubmit = (e) => {
    this.state.tasks.push({ titulo: this.state.task });
    this.setState({ task: "" });
    e.preventDefault();
  };
  delete = (id) => {
    const inputsFiltrados = this.state.tasks.filter((e, i) => i !== id);
    this.setState({ tasks: inputsFiltrados });
  };
  render() {
    const inputFijos = this.state.tasks.map((n, i) => (
      <Input
        titulo={n.titulo}
        key={i}
        id={i}
        delete={this.delete}
        clase={this.state.mode.bgInput}
      />
    ));
    const clase =
      "col-4 text-center pb-5 border border-primary " + this.state.mode.bg;
    const claseInput = "px-3 mb-2 py-1 text-center " + this.state.mode.bgInput;

    return (
      <div className="container ">
        <div className="row pt-5 ">
          <div className="col-4 text-center ">
            <div className="m-5 p-5">
              <Mode mode={this.state.mode} changeMode={this.changeMode} />
            </div>
          </div>
          <div className={clase}>
            <h1 className="mt-4">Bienvenido</h1>
            <h4 className="mb-2">ingresa tus tareas</h4>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="escriba una tarea"
                className={claseInput}
                value={this.state.task}
                onChange={this.onChange}
              />
            </form>
            {inputFijos}
          </div>
          <div className="col-4 "></div>
        </div>
      </div>
    );
  }
}
export default App;
