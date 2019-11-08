const path = require("path")
const { findIndex } = require("lodash")
const readDirP = require("readdirp-walk")
const { parseMarkdown } = require("@freecodecamp/challenge-md-parser")

const lessonsDir = path.resolve(__dirname, "./lessons")

exports.lessonsDir = lessonsDir

const getLessons = () => {
  let courses = {}
  return new Promise(resolve => {
    let running = 1
    function done() {
      if (--running === 0) {
        resolve(courses)
      }
    }
    readDirP({ root: lessonsDir })
      .on("data", file => {
        running++
        buildCourses(file, courses).then(done)
      })
      .on("end", done)
  })
}

exports.getLessons = getLessons

async function buildCourses(file, courses) {
  const { name, depth, path: filePath, fullPath, stat } = file

  // Course
  if (depth === 1 && stat.isDirectory()) {
    const { order, name: courseName } = courseInfo(name)

    const metaPath = path.resolve(__dirname, `./_meta/${courseName}/meta.json`)
    const courseMeta = require(metaPath)
    courses[courseName] = { courseName, order, lessons: [], meta: courseMeta }
    return
  }

  if (name === "meta.json" || name === ".DS_Store") {
    return
  }

  // Lesson
  const courseName = getCourseNameFromPath(filePath)

  let course
  try {
    course = courses[courseName]
  } catch (e) {
    console.log("Unable to find the course")
    // eslint-disable-next-line no-process-exit
    process.exit(0)
  }

  const { meta } = course

  const lesson = await createLesson(fullPath, meta)

  course.lessons = [...course.lessons, lesson]
}

exports.buildCourses = buildCourses

async function createLesson(fullPath, meta) {
  const lesson = await parseMarkdown(fullPath)

  const lessonOrder = findIndex(meta.lessonOrder, ([id]) => id === lesson.id)

  const {
    name: courseName,
    order,
    isPrivate,
    required = [],
    template,
    time,
  } = meta

  lesson.course = courseName
  lesson.lessonOrder = lessonOrder
  lesson.isPrivate = lesson.isPrivate || isPrivate
  lesson.required = required.concat(lesson.required || [])
  lesson.template = template
  lesson.time = time

  return lesson
}

exports.createLesson = createLesson

function getCourseNameFromPath(filePath) {
  const [courseName] = filePath.split(path.sep)
  return courseName
}

function courseInfo(fileName) {
  const [maybeOrder, ...course] = fileName.split("-")
  let order = parseInt(maybeOrder, 10)
  if (isNaN(order)) {
    return { order: 0, name: fileName }
  } else {
    return {
      order: order,
      name: course.join("-"),
    }
  }
}
