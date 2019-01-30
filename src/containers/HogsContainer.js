import React from 'react';
import HogsSelector from '../components/HogsSelector';
import HogsDetail from '../components/HogsDetail';

class HogsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hogwarts: [],
      currentHogwart: null
    };

    this.handleCountrySelected
    = this.handleCountrySelected.bind(this);
  }
  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters/students';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", ()=> {
      const jsonString = request.responseText;
     const countryObjects= JSON.parse(jsonString)//returns coutnry objects
   this.setState({hogwarts: countryObjects});

    });
    request.send();
  }

  handleCountrySelected(index) {
    const selectedCountry = this.state.hogwarts[index];
    this.setState({currentHogwart: selectedCountry})
  }

  render(){
    return (
      <div>
      <h2>Hogwarts Container</h2>
      <HogsSelector hogwarts={this.state.hogwarts} onHogwartSelected={this.handleCountrySelected} />
      <HogsDetail hogwarts={this.state.currentHogwart} />
      </div>
    );
  }
}

export default HogsContainer;


// 1. Diagram the component structure
// 2. Diagram how data is distributed between the components
// 3. Where is country selected?
// 4. Draw and explain the data flow that happens when a country is selected?
