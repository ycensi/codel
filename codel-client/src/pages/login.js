import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Form, Button, Row, Col } from "react-bootstrap"

const LoginPage = () => (
  <Layout>
    <SEO title="Entrar" />
    <Container style={{ marginTop: "70px" }}>
      <Row>
        <Col>
          <Form styles={{ padding: '30px', borderRadius: '5px', backgroudColor: 'aliceblue' }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuário</Form.Label>
              <Form.Control type="text" placeholder="Informe seu nome de usuário" />
              <Form.Text className="text-muted">
                Caso não possua um usuário converse com o responsável pelo sistema.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Sua senha" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
        </Col>
        <Col>
          <div>
            <h1>Bem-Vindo ao Codel!</h1>
            <p>
              Este projeto tem como objetivo permitir que você aprenda sem
              precisar de internet ou gastar seu pacote de dados.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default LoginPage
