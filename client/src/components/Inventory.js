import React from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

const imageList = [
  'http://hanabi.autoweek.com/sites/default/files/styles/gen-1200-675/public/honda_civic_si_prototype-06.jpg?itok=aGZD_lya',
  'https://media.ed.edmunds-media.com/chevrolet/cobalt/2005/oem/2005_chevrolet_cobalt_coupe_ss-supercharged_fq_oem_1_500.jpg',
  'http://www.tflcar.com/wp-content/uploads/2017/03/Porsche-718-Cayman-LSD.jpg',
  'http://www.dupontregistry.com/autos/virtual_folder/vehicle_photos/1e03db71-d6e2-4068-a8a1-277683be61a5/4db21cdf-c04e-458c-abe9-a2ff187ddf45/Shelby_GT350R.jpg?404=default&mode=pad,pad&width=100%&height=100%'
]
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
        this.setState({ cars })
        let carStats = cars.map((stats) => {
          let uniqueId = '/cars/' + (stats._id).toString()
          console.log(uniqueId)
          return(
              <Col xs={12} md={6} lg={4}>
                <Thumbnail src='https://i.ytimg.com/vi/0Q79esFqfOE/maxresdefault.jpg' alt="242x200">
                  <h3>{stats.year} {stats.make} {stats.model} {stats.trimLevel}</h3>
                  <p>Description</p>
                  <div>
                    <a href={uniqueId}>
                      More
                    </a>
                  </div>
                </Thumbnail>
              </Col>
          )
        })
        this.setState({ carStats })
      })
  }

  render() {
    return (
      <div className="inventory">
        <h1>Inventory</h1>
        <Grid>
          <Row>
            {this.state.carStats}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Inventory
