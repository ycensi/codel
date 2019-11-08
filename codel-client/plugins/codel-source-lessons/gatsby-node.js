const chokidar = require("chokidar")

const { createLessonNode } = require("./create-Lesson-nodes")

exports.sourceNodes = function sourceLessonSourceNodes(
  { actions, reporter },
  pluginOptions
) {
  const { source, onSourceChange, coursesPath } = pluginOptions

  if (typeof source !== "function") {
    reporter.panic(`
    "source" is a required option for codel-source-lessons. It must be a
    function that delivers lesson objects to the plugin
    `)
  }

  if (typeof onSourceChange !== "function") {
    reporter.panic(`
    "onSourceChange" is a required option for codel-source-lessons. It must be
    a function that delivers a new lesson object to the plugin
    `)
  }

  if (typeof coursesPath !== "string") {
    reporter.panic(`
    "coursesPath" is a required option for codel-source-lessons. It must be
    a path to a courses directory
    `)
  }

  const { createNode } = actions
  const watcher = chokidar.watch(coursesPath, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
  })

  watcher.on("ready", sourceAndCreateNodes).on("change", filePath =>
    /\.md$/.test(filePath)
      ? onSourceChange(filePath)
          .then(lesson => {
            reporter.info(
              `File changed at ${filePath}, replacing lessonNode id ${lesson.id}`
            )
            return createLessonNode(lesson, reporter)
          })
          .then(createNode)
          .catch(e =>
            reporter.error(`codel-source-lessons
                ${e.message}
                `)
          )
      : null
  )

  function sourceAndCreateNodes() {
    return source()
      .then(lessons => Promise.all(lessons))
      .then(lessons =>
        lessons
          .map(lesson => createLessonNode(lesson, reporter))
          .map(node => createNode(node))
      )
      .catch(e =>
        reporter.panic(`codel-source-lessons
        ${e.message}
        `)
      )
  }

  return new Promise((resolve, reject) => {
    watcher.on("ready", () => sourceAndCreateNodes().then(resolve, reject))
  })
}
