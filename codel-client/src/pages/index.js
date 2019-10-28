import React from "react"
import { Link } from "gatsby"
import { Button, Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CourseCard from "../components/CourseCard"
import MoreCourses from "../components/CourseCard/more"

const IndexPage = () => (
  <Layout>
    <SEO title="Seu Painel" />
    <Container>
      <Row>
        <Col>
          <div style={{ marginTop: "70px" }}>
            <h1>Bem-Vindo ao Codel!</h1>
            <p>
              Este projeto tem como objetivo permitir que você aprenda sem
              precisar de internet ou gastar seu pacote de dados.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ marginTop: "70px" }}>
            <h3>Seus Cursos</h3>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <CourseCard courseName="Lógica e Algoritimos" progress={75} />
              <CourseCard courseName="HTML 5 e CSS" progress={47} />
              <CourseCard courseName="Javascript" progress={15} />
              <MoreCourses />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
