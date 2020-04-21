exports.handler = async (event, context, callback) => ({
  statusCode: 200,
  body: "Hello serverless",
})

// const pass = body => {
//   callback(null, { statusCode: 200, body: JSON.stringify(body) })
// }

// try {
//   let response = await fetch("https://jsonbin.org/_/bearer", {
//     method: event.httpMethod,
//     headers: {
//       Authorization: `token ${process.env.JSONBIN_APIKEY}`,
//       "Content-Type": "application/json",
//     },
//     body: event.body,
//   })
//   let data = await response.json()
//   await pass(data)
// } catch (err) {
//   let error = {
//     statusCode: err.statusCode || 500,
//     body: JSON.stringify({ error: err.message }),
//   }
//   await pass(error)
// }
// }
