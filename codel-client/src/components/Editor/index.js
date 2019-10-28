/* @flow */
import React from 'react';
// import light from "./themes/light"
// import dark from "./themes/dark"
import "./styles.css"
import MonacoEditor from "react-monaco-editor"

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: "<h1>Olá</h1>",
    }
  }

  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor)
    editor.focus()
  }

  componentDidUpdate(prevProps) {
    if (this.props.dimensions !== prevProps.dimensions && this._editor) {
      this._editor.layout();
    }
  }

  onChange(newValue, e) {
    console.log("onChange", newValue, e)
  }

  render() {
    const code = this.state.code
    const options = {
      selectOnLineNumbers: true,
      
    }
    return (
      <div className="editor">
      <div className="spacer"></div>
        <MonacoEditor
          width="800"
          height="580"
          language="html"
          theme="vs"
          value={code}
          options={options}
          onChange={this.onChange.bind(this)}
          editorDidMount={this.editorDidMount.bind(this)}
        />
      </div>
    )
  }
}

export default Editor
