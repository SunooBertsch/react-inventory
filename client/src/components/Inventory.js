import React from 'react'

class Inventory extends React.Component {
  constructor() {
    super()
    this.state = {cars: []}
  }

  componentDidMount() {
    fetch('/cars')
      .then(res => {
        return res.json()
      })
      .then(cars => {
        let carStats = cars.map((stats) => {
          return(
            <ul key={stats._id}>
              <li>{stats.make}</li>
              <li>{stats.model}</li>
              <li>{stats.price}</li>
              <li>{stats.transmission}</li>
              <li>{stats.engine}</li>
              <li>{stats.year}</li>
              <li>{stats.trimLevel}</li>
            </ul>
          )
        })
        this.setState({ carStats })
      })
  }
  render() {
    return (
      <div className="inventory">
        <h1>Inventory</h1>
        <div className="carContainer">
          {this.state.carStats}
        </div>
      </div>
    )
  }
}

export default Inventory
