# TikTok-RSS

A Serverless Lambda function in Node.js to generate a proper RSS feed for any user on TikTok. 

## Installation

```bash
npm install -g serverless
git clone git@github.com:conoro/tiktok-rss.git
cd tiktok-rss
npm install
serverless deploy
```

Then subscribe to each TikTok user in your RSS reader (like Feedly) using a URL like:

```
https://your-URL-for-your-serverless-function/dev/rss?user=iamtabithabrown
```

(Assumes you have your AWS config already setup)

LICENSE Apache-2.0

Copyright Conor O'Neill 2021, conor@conoroneill.com
