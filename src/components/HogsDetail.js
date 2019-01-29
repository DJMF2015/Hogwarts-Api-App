import React, {Fragment} from 'react';

const HogsDetail = (props) => {
  console.log('props at detail: ', props)
  if (!props.hogwarts) return null;
  return (
    <Fragment>
    <h3>{props.hogwarts.name}</h3>
    <p>Species: {props.hogwarts.species}</p>
    <p>Gender: {props.hogwarts.gender}</p>
    <p>House: {props.hogwarts.house}</p>
    <p>Patronus: {props.hogwarts.patronus}</p>
    <p>Ancestry: {props.hogwarts.ancestry}</p>
    <p>Wand type: {props.hogwarts.wand.wood}</p>
    <p> {props.hogwarts.wand.core}</p>
    <p>Actor: {props.hogwarts.actor}</p>
    <img className="image-flag" src={props.hogwarts.image} />

    </Fragment>
  );
}
export default HogsDetail;
