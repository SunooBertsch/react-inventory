import React from 'react'
import {Card, CardTitle, Button, Modal, Carousel, Slider, Slide} from 'react-materialize'


class Inventory extends React.Component {
  constructor() {
    super()
    this.state = {cars: []}
  }
  const
  componentDidMount() {
    fetch('/cars')
      .then(res => {
        return res.json()
      })
      .then(cars => {
        let carStats = cars.map((stats) => {
          return(
              <div className="col s12 m6 l4">
                <Card className='small'
                  header={<CardTitle image='https://i.ytimg.com/vi/0Q79esFqfOE/maxresdefault.jpg'>{stats.year} {stats.make} {stats.model} {stats.trim}</CardTitle>}
                  actions={[
                    <Modal
                      header='Modal Header'
                      trigger={<Button>More</Button>}>
                      <Slider interval={20000} fullscreen={false}>
                        <Slide
                          src="http://hanabi.autoweek.com/sites/default/files/styles/gen-1200-675/public/honda_civic_si_prototype-06.jpg?itok=aGZD_lya">
                        </Slide>
                        <Slide
                          src="https://media.ed.edmunds-media.com/chevrolet/cobalt/2005/oem/2005_chevrolet_cobalt_coupe_ss-supercharged_fq_oem_1_500.jpg">
                        </Slide>
                        <Slide
                          src="http://www.tflcar.com/wp-content/uploads/2017/03/Porsche-718-Cayman-LSD.jpg">
                        </Slide>
                        <Slide
                          src="http://www.dupontregistry.com/autos/virtual_folder/vehicle_photos/1e03db71-d6e2-4068-a8a1-277683be61a5/4db21cdf-c04e-458c-abe9-a2ff187ddf45/Shelby_GT350R.jpg?404=default&mode=pad,pad&width=100%&height=100%">
                        </Slide>
                      </Slider>
                    </Modal>
                  ]}>
                  Additional info here.
                </Card>
                <Carousel options={{ fullWidth: true}} images={[
                  'http://hanabi.autoweek.com/sites/default/files/styles/gen-1200-675/public/honda_civic_si_prototype-06.jpg?itok=aGZD_lya',
                  'https://media.ed.edmunds-media.com/chevrolet/cobalt/2005/oem/2005_chevrolet_cobalt_coupe_ss-supercharged_fq_oem_1_500.jpg',
                  'http://www.tflcar.com/wp-content/uploads/2017/03/Porsche-718-Cayman-LSD.jpg',
                  'http://www.dupontregistry.com/autos/virtual_folder/vehicle_photos/1e03db71-d6e2-4068-a8a1-277683be61a5/4db21cdf-c04e-458c-abe9-a2ff187ddf45/Shelby_GT350R.jpg?404=default&mode=pad,pad&width=100%&height=100%'
                ]} />
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
