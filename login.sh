idToken=`aws cognito-idp initiate-auth --auth-flow USER_PASSWORD_AUTH --auth-parameters "USERNAME=mitchtb09@test.com,PASSWORD=Password1" --client-id m8pj9ja8hia97beh85rh6mofn --query "AuthenticationResult.IdToken" --output text`
echo $idToken
curl -H "Authorization: $idToken"  https://xu2cjqvw29.execute-api.us-east-1.amazonaws.com/dev/lists