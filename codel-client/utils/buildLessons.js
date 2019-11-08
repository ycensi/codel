const { lessonsDir, createLesson, getLessons } = require("../courses")

exports.buildLessons = async function buildLessons() {
  const courses = await getLessons()
  var courseNames = Object.keys(courses);
  
  const builtLessons = courseNames
    .map(courseName => courses[courseName])
    .map(({ lessons }) => lessons.map(prepareLesson))
    .reduce((accu, current) => accu.concat(current), [])

  return builtLessons
}

exports.replaceLessonNode = async function replaceLessonNode(fullFilePath) {
  return prepareLesson(await createLesson(fullFilePath))
}

function prepareLesson(lesson) {
  lesson.name = lesson.title
  return lesson
}
