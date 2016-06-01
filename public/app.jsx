// Presentational Component - Don't maintain state
var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1> Hello {name} </h1>
        <p> {message} </p>
      </div>
    );
  }
});

// Presentational Component - Greeter Form is a component that provides a form for the Greeter, submission functionality and all</div>.
// Responds to user input
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var name = this.refs.name.value;
    if (name.length > 0 && name.trim()) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"></input>
        <button> Set Name</button>
      </form>
    );
  }
});

// Container component, maintains state
var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Please enter a valid message'
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  // Receives the name from presentational component
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div className = "jumbotron">
        <div className = "container">
          <GreeterMessage name={name} message={message}/>
          <GreeterForm onNewName={this.handleNewName}/>
        </div>
      </div> // You must return one root element
    );
  }
});

var firstName = 'JP'
var message = 'Are you hungry JP?'

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);

// Notes

// When do you use props vs states?

// Presentational components vs. Stateful components

// It's best to make static versions first and then
// make them dynamic after

// Single responsibility principle
// Components can get large and complex
// By breaking things up, we can make better apps with more functionality and less complexity

// Updating props doesn't work with react.
// You can only update states
// You can pass functions thorugh element attributes
// You must have one root element, and the only thing that gets rendered is the child elements.