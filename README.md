# Magic 8 Ball

Like the shake of a Magic 8 Ball, gives a response to your ever pressing question

## Running UI

To build and run the ui for the first time, execute the following scripts. On subsequent runs, only running `npm start` in the `ui` folder is required

```bash
cd ui
npm install
npm start
```

## Deploying application

To build and deploy your application for the first time, run the following in your shell:

```bash
sam build
sam deploy --guided
```

The first command will build the source of your application. The second command will package and deploy your application to AWS, with a series of prompts

Run functions locally and invoke them with the `sam local invoke` command.

```bash
sam-app$ sam local invoke HelloWorldFunction --event events/event.json
```

The SAM CLI can also emulate your application's API. Use the `sam local start-api` to run the API locally on port 3000.

```bash
sam-app$ sam local start-api
sam-app$ curl http://localhost:3000/
```
