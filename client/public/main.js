import React from 'react';
import ReactDOM from 'react-dom';

class SubmitNewCar extends React.Component {
  render() {
    return (
      <form action="/cars" method="POST">
        <input type="text" placeholder="Make" name="Make">
        <input type="text" placeholder="Model" name="Model">
        <input type="text" placeholder="Year" name="Year">
        <input type="text" placeholder="VIN" name="VIN">
        <input type="text" placeholder="Engine" name="Engine">
        <input type="text" placeholder="Transmission" name="Transmission">
        <input type="text" placeholder="Description" name="Description">
        <button type="submit">Submit</button>
    )
  }
}

class Inventory extends React.Component {

}

ReactDOM.render(
  <SubmitNewCar />,
  document.getElementById('root')
)
