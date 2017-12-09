import React from 'react'
import { Carousel, Grid, Row, Col } from 'react-bootstrap'
/*
const imageList = [
  'http://hanabi.autoweek.com/sites/default/files/styles/gen-1200-675/public/honda_civic_si_prototype-06.jpg?itok=aGZD_lya',
  'https://media.ed.edmunds-media.com/chevrolet/cobalt/2005/oem/2005_chevrolet_cobalt_coupe_ss-supercharged_fq_oem_1_500.jpg',
  'http://www.tflcar.com/wp-content/uploads/2017/03/Porsche-718-Cayman-LSD.jpg',
  'http://www.dupontregistry.com/autos/virtual_folder/vehicle_photos/1e03db71-d6e2-4068-a8a1-277683be61a5/4db21cdf-c04e-458c-abe9-a2ff187ddf45/Shelby_GT350R.jpg?404=default&mode=pad,pad&width=100%&height=100%'
]
*/
class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    fetch('/cars/' + this.props.id)
      .then(res => {
        return res.json()
      })
      .then(card => {
        let cardPage = card.map((info) => {
          return (
          <div className="carousel-container" key={info.model}>
            <Carousel>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://hanabi.autoweek.com/sites/default/files/styles/gen-1200-675/public/honda_civic_si_prototype-06.jpg?itok=aGZD_lya" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://www.tflcar.com/wp-content/uploads/2017/03/Porsche-718-Cayman-LSD.jpg" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://www.dupontregistry.com/autos/virtual_folder/vehicle_photos/1e03db71-d6e2-4068-a8a1-277683be61a5/4db21cdf-c04e-458c-abe9-a2ff187ddf45/Shelby_GT350R.jpg?404=default&mode=pad,pad&width=100%&height=100%" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          )
        })
        this.setState({ cardPage })
      })
  }
  render() {
    return (
      <div className="card">
        <h1>Card Page</h1>
        <Grid>
          <Row>
            <Col xs={12} md={6} lg={4}>
              {this.state.cardPage}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Card
