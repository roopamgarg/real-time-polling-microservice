module.exports = function buildMakePoll() {
  return function makePoll({
    title,
    question,
    isMultiAnswersAllowed = false,
    answers,
  } = {}) {
    if (!title || title.length < 2) {
      throw new Error("Poll must have an title");
    }
    if (!question || question.length < 2) {
      throw new Error("Poll must have an title");
    }
    if (!answers || answers.length < 2) {
      throw new Error("Poll must have at least 2 answers");
    }
    return Object.freeze({
      title: title,
      question: question,
      isMultiAnswersAllowed: isMultiAnswersAllowed,
      answers: answers.map((text) => ({ text })),
    });
  };
};
