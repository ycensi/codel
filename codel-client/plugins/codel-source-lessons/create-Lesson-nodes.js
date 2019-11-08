const crypto = require("crypto")

function createLessonNode(lesson, reporter) {
  // if (typeof lesson.description !== "string") {
  //   reporter.warn(`
  //   ${lesson.title} has a description that will break things!
  //   `)
  // }

  const contentDigest = crypto
    .createHash("md5")
    .update(JSON.stringify(lesson))
    .digest("hex")

  const internal = {
    contentDigest,
    type: "LessonNode",
  }

  const node = Object.assign(
    {},
    {
      id: lesson.id + " >>>> LessonNode",
      children: [],
      parent: null,
      internal,
      sourceInstanceName: "lesson",
    },
    lesson
  )

  /* eslint-disable prefer-object-spread/prefer-object-spread */
  return JSON.parse(
    JSON.stringify(
      node
    )
  )
}

exports.createLessonNode = createLessonNode
