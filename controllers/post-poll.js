module.exports = function makePostPoll({ addPoll }) {
  return async function postPoll(httpRequest) {
    try {
      const { body } = httpRequest;
      const poll = await addPoll({
        ...body,
      });
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: { poll },
      };
    } catch (err) {
      console.log(err);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
