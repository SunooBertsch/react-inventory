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
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src="https://i.ytimg.com/vi/0Q79esFqfOE/maxresdefault.jpg"/>
                    <span className="card-title">{stats.year} {stats.make} {stats.model} {stats.trimLevel}</span>
                  </div>
                  <div className="card-content">
                    <p>This is where a description and additional info can go.</p>
                  </div>
                </div>
              </div>
            </div>
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
