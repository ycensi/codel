import React from "react"
import PropTypes from "prop-types"
import { Row, Col, ProgressBar, Button, Card } from "react-bootstrap"
import { navigate } from "gatsby"

const CourseCard = ({ courseName, progress }) => (
  <Card style={{ width: "16rem", margin: 10 }}>
    <Card.Body>
      <Card.Title>{courseName}</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button onClick={() => { navigate('/class') }} variant="outline-info">Continuar</Button>
      <Button style={{ marginLeft: '10px' }} onClick={() => { navigate('/class') }} variant="light">Detalhes</Button>
    </Card.Body>
    <Card.Footer className="text-muted">
        <ProgressBar now={progress} label={`${progress}%`} />
      </Card.Footer>
  </Card>
)

CourseCard.propTypes = {
  courseName: PropTypes.string,
  progress: PropTypes.number,
}

CourseCard.defaultProps = {
  courseName: ``,
  progress: 0,
}

export default CourseCard
