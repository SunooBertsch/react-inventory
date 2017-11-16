import React from 'react';
import ReactDOM from 'react-dom';

class SubmitNewCar extends React.Component {
  render() {
    return (
      <form action="/cars" method="POST">
        <input type="text" placeholder="" name="">
        <input type="text" placeholder="" name="">
        <input type="text" placeholder="" name="">
        <input type="text" placeholder="" name="">
        <input type="text" placeholder="" name="">
        <input type="text" placeholder="" name="">
        <input type="text" placeholder="" name="">
        <input type="text" placeholder="" name="">
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
