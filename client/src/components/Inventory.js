import React from 'react'

const styles = {
  position: "relative",
  float: "left"
}

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
              <div className="col s12 m6 l4">
                <div className="card" style={styles}>
                  <div className="card-image">
                    <img src="https://i.ytimg.com/vi/0Q79esFqfOE/maxresdefault.jpg"/>
                    <span className="card-title">{stats.year} {stats.make} {stats.model} {stats.trimLevel}</span>
                  </div>
                  <div className="card-content">
                    <p>This is where a description and additional info can go.</p>
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
          <div className="row">
            {this.state.carStats}
          </div>
        </div>
      </div>
    )
  }
}

export default Inventory
