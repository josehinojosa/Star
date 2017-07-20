import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props){
    super(props);
    this.state = {
      vehicles: [],
      value:'',
      pilot: ''
    };
  }


  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
handleChange = event => {
  console.log(this.state.value);
  this.setState({value: event.target.value});
}


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
handleSubmit =  event =>  {
  this.setState({
    pilot: this.state.value,
    value:''
  });
}

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentDidMount() {
    console.log('here');
    fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json())
    .then(data => this.setState({vehicles: data.results}));
  }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    {/*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    }
  const {vehicles, pilot, value} = this.state;
  const vehicleProps = [
    'name', 
    'model', 
    'manufacturer', 
    'vehicle_class', 
    'passengers',  
    'crew', 
    'length', 
    'max_atmosphering_speed',
    'cargo_capacity'
                        ]
    return (
      <div className="App">
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
        <div className="jumbotron">Star Wars</div>
         <div className="form">
         <header>Pilot: </header>
         <input onChange={this.handleChange} value={value} type="text" placeholder="Type your pilot name!"/>
         <button onChange={this.handleSubmit} className="btn btn-info">Submit</button>
         <h1>{pilot}</h1>
         </div>
         <div>
          {vehicles.map(vehicle =>  (
              <div key={vehicle.name} className="card">
                {vehicleProps.map(property => 
                  <p key={property}>{property}: {vehicle[property]}</p>
                )}
              </div>
         ))}
         </div>
        </div>
    );
  }
}

export default App;
