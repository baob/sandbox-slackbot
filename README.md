# README

Following https://www.freecodecamp.org/news/building-a-slackbot-with-node-js-and-slackbots-js/


## Install

pre-req:  yarn global add nodemon

### Creating the slack app 

MUST create CLASSIC slack app [here](https://api.slack.com/apps?new_classic_app=1) and not the new style granular permissions app.
After that create a legacy app user then install the app to the workspace. Then the Bot Oauthh token will work.

Related docs:

-   [RTM docs](https://api.slack.com/rtm) has link at the bottom of the page 
-   [SlackBots.js issue 145](https://github.com/mishk0/slack-bot-api/issues/145) documents the issue and workaround.
-   [node slack sdk issue 921](https://github.com/slackapi/node-slack-sdk/issues/921) discusses in depth


## Run

    yarn start 

