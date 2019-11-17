import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [ {text:"Sacar la ropa",key: 0},
               {text: "Hacer la cama", key: 1},
               {text: "Leer un rato",  key: 2} ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTasks = this.createTasks.bind(this);
  }
  handleSubmit(event) {
    if (this._inputElement.value !== '') {
      var newItem = {
        text : this._inputElement.value,
        key: Date.now()
      };
    this.setState((prevState) => {
      return ({
        items: prevState.items.concat(newItem),
      });
    });
    this._inputElement.value = "";
    }
    event.preventDefault();
  }
  handleChange(event) {
    event.preventDefault();
   this.setState({value: event.target.value});
  }
  createTasks(item) {
    return (<li key={item.key}>{item.text}</li>)
  }
  render() {
    const todoEntries = this.state.items;
    const listItems = todoEntries.map(this.createTasks);
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo" entries={this.state.items}>
            {listItems}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref={(a) => this._inputElement = a} id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
          </form>
        </div>
      </div>
    )
  }
}


export default App;
