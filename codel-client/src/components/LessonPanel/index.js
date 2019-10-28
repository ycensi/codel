import ReactMarkdown from "react-markdown"
import React from "react"

const input = `
Seja bem-vindo ao curso de HTML do **CODEL**, durante o curso será ensinado o passo-a-passo do desenvolvimente web.

Primeiramente, você irá construir uma página simples usando HTML. Para isso, você deve usar o editor do painel ao lado.

Está vendo o código no seu editor que diz \`<h1>\`Olá\`</h1>\`? Isso é um **elemento HTML**.

A maioria dos elementos HTML possem uma *tag de abertura* e uma **tag de fechamento**. 

As tags de abertura se parecem com essa:

\`<h1>\`

As tags de fechamento são parecidas com essa:

\`</h1>\`

A unica diferença entre as tags de abertura e fechamento é o barra invertido (/) após o (<) da tag de abertura.

Em cada tela de exercício você encontrará o botão "Testar". Você deve pressiona-lo para saber se sua resposta está correta. Quando você passar por todos os testes o botão "Próximo Exercício" será ativo e você poderá proceguir no curso.
`

const LessonPanel = () => (
  <div className="lesson-panel">
    <div className="spacer"></div>
    <h2
      style={{
        textAlign: "center",
        fontWeight: "normal",
        marginBottom: "15px",
      }}
    >
      HTML Básico e HTML5: Diga Olá para os elementos HTML (HTML Elements)
    </h2>
    <ReactMarkdown source={input} />
  </div>
)

export default LessonPanel
