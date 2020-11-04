// exports.handler = async (event, context, callback) => ({
//   statusCode: 200,
//   body: "Hello serverless",
// })

exports.handler = async (event) => {
  console.log(event.queryStringParameters)
  const { text } = event.queryStringParameters
  return {
    statusCode: 200,
    body: `You said ${text}`,
  }
}
