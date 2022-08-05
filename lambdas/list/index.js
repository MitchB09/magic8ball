const AWS = require("aws-sdk");

exports.handler = function (event, context, callback) {
  const ddb = new AWS.DynamoDB.DocumentClient();
  let Magic8BallTable = process.env.SIMPLE_LISTS_TABLE;

  var params = {
    ExpressionAttributeValues: {
      ":userId": "PUBLIC",
    },
    KeyConditionExpression: "userId = :userId",
    TableName: Magic8BallTable,
  };

  ddb.query(params, function (err, data) {
    if (err) {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          Error: err.message,
        }),
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        isBase64Encoded: false,
      });
    } else {
      // successful response
      console.log(data);
      callback(null, {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data.Items),
        isBase64Encoded: false,
      });
    }
  });
};
