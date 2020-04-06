# Dog Bot
Telegram bot
Commands:
- /images -  get random dog photo via [Dog API](https://dog.ceo/dog-api/)

![](https://github.com/buharov-alexander/dog-bot/blob/master/resources/screenshot.png)

## Build
Set variable for telegram token:
```
export TELEGRAM_TOKEN=...
```
Start service:
```
npm start
```
Set variable with service URL:
```
export INVOKE_URL=...
```
For dev testing you can start service locally and use [ngrok](https://ngrok.com/) to expose URL.
Finally you need to set webhook for your bot.
```
curl --data "url=$INVOKE_URL" "https://api.telegram.org/bot$TELEGRAM_TOKEN/setWebhook"
```
