import React from 'react'
import images from '../mongo.js'
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
