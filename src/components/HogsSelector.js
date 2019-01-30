import React from 'react';

const HogsSelector = (props) => {
  console.log(props)
  const options = props.hogwarts.map((hogwart, index) => {
    return <option value={index} key={index}>{hogwart.name}</option>
  })

  function handleChange(event) {
    props.onHogwartSelected(event.target.value);
  }

  return (
    <select id="hogwart-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a Character...</option>
      { options }
    </select>
  )
}

export default HogsSelector;
