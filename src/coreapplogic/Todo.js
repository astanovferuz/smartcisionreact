import React, { Component } from "react";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", prior: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <ul>
          {this.state.items.map((item) => {
            return (
              <li key={item.id}>
                {item.text} - Priority: {item.prior}
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todo"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input
            name="prior"
            onChange={this.handleChange}
            value={this.state.prior}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefaulst();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      prior: this.state.prior,
      id: Date.now()
    };
    this.setState((state) => ({
      items: this.state.items.concat(newItem),
      text: "",
      prior: ""
    }));
    console.log(newItem);
  }
}

// class TodoList extends Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map((item) => (
//           <li key={item.id}>
//             {item.text} - Priority: {item.prior}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

export default TodoApp;
