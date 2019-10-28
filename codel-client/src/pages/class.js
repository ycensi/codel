import React from "react"
import Editor from "../components/Editor"
import LessonPanel from "../components/LessonPanel"
import "react-reflex/styles.css"
import SEO from "../components/seo"
import CourseLayout from "../components/CourseLayout"

const ClassPage = () => (
  <CourseLayout>
    <SEO title="HTML e CSS" />
    <div style={{ display: "flex" }}>
      <div style={{ flex: 0.4 }}>
        <LessonPanel />
      </div>

      <div style={{ flex: 0.6 }}>
        <Editor />
      </div>
    </div>
  </CourseLayout>
)
export default ClassPage
