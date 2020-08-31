function makeGetPoll({ fetchPoll }) {
    return async function getPoll(id) {
      try {
          const data = await fetchPoll(id);
          return data;
      } catch (err) {
        console.log(err);
      }
    };
  }
  
  function makeGetPollRequestHandler({ fetchPoll }) {
    return async function getPoll(httpRequest) {
      try {
        const {id} = httpRequest.params;
        const data = await fetchPoll(id);
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 201,
          body: data ,
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
  
  module.exports = {
    makeGetPoll,
    makeGetPollRequestHandler
  }