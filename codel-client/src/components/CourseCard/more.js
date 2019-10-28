import React from "react"
import PropTypes from "prop-types"
import { Row, Col, ProgressBar, Button, Card } from "react-bootstrap"
import { navigate } from "gatsby"

const MoreCard = () => (
    <Card bg="light" className="text-center" style={{ width: '16rem', margin: '10px' }}>
    <Card.Body>
      <Card.Text>
        Você pode adicionar mais cursos à sua lista
      </Card.Text>
      <Button variant="primary">Todos os Cursos</Button>
    </Card.Body>
  </Card>
)

MoreCard.propTypes = {
  courseName: PropTypes.string,
  progress: PropTypes.number,
}

MoreCard.defaultProps = {
  courseName: ``,
  progress: 0,
}

export default MoreCard
