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

    this.handleHogwartSelected
    = this.handleHogwartSelected.bind(this);
  }
  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters/students';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", ()=> {
      const jsonString = request.responseText;
     const characterObjects= JSON.parse(jsonString)
   this.setState({hogwarts: characterObjects});

    });
    request.send();
  }

  handleHogwartSelected(index) {
    const selectedHogwart= this.state.hogwarts[index];
    this.setState({currentHogwart: selectedHogwart})
  }

  render(){
    return (
      <div>
      <h2>Hogwarts Container</h2>
      <HogsSelector hogwarts={this.state.hogwarts} onHogwartSelected={this.handleHogwartSelected} />
      <HogsDetail hogwarts={this.state.currentHogwart} />
      </div>
    );
  }
}

export default HogsContainer;

