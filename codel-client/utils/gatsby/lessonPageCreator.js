const path = require('path');

const html = 0;
const js = 1;

const viewTypes = {
  [html]: 'challenge',
  [js]: 'challenge',
};


const challenge = path.resolve(
  __dirname,
  '../../src/templates/Lessons/challenge/Show.js'
);

const textOnly =path.resolve(
    __dirname,
    '../../src/templates/Lessons/textOnly/Show.js'
  );

const views = {
  challenge,
  textOnly
};

const getNextLessonPath = (node, index, nodeArray) => {
  const next = nodeArray[index + 1];
  return next ? next.node.fields.slug : '/lesson';
};

const getPrevLessonPath = (node, index, nodeArray) => {
  const prev = nodeArray[index - 1];
  return prev ? prev.node.fields.slug : '/lesson';
};

const getTemplateComponent = lessonType => views[viewTypes[lessonType]];

exports.createLessonPages = createPage => ({ node }, index, thisArray) => {
  const {
    fields: { slug },
    required = [],
    template,
    lessonType,
    id
  } = node;

  return createPage({
    path: slug,
    component: getTemplateComponent(lessonType),
    context: {
      lessonMeta: {
        template,
        required,
        nextLessonPath: getNextLessonPath(node, index, thisArray),
        prevLessonPath: getPrevLessonPath(node, index, thisArray),
        id
      },
      slug
    }
  });
};