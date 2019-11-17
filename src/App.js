import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTasks = this.createTasks.bind(this);
  }
  handleSubmit(event) {
    const newItem = {
      text: this.state.value,
    };
    this.setState(() => {
      return ({
        items:  this.state.items.concat(newItem),
        value: ""
      });
    });
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();
  }
  createTasks(item) {
    return (<li>{item.text}</li>)
  }
  render() {
    const listItems = this.state.items.map(this.createTasks);
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {listItems}
          </ul>
           <form onSubmit={this.handleSubmit}>
             <input type="text" id="new-task" value={this.state.value} onChange={this.handleChange} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
