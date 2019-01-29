import React from 'react';

const HogsSelector = (props) => {
  console.log(props)
  const options = props.hogwarts.map((country, index) => {
    return <option value={index} key={index}>{country.name}</option>
  })

  function handleChange(event) {
    props.onCountrySelected(event.target.value);
  }

  return (
    <select id="country-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a Character...</option>
      { options }
    </select>
  )
}

export default HogsSelector;
