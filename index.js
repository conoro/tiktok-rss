// tiktok-rss - Copyright Conor O'Neill 2021, conor@conoroneill.com
// LICENSE Apache-2.0
// Invoke like https://url.of.serverless.function/dev/rss?user=iamtabithabrown


module.exports.check = (event, context, callback) => {

    async function getTikTokVideos() {

        const TikTokScraper = require('tiktok-scraper');
        const RSS = require('rss');

        const user = event.query.user;

        if (user) {
            const maxItems = 20;
            const feed = new RSS({
                title: `TikTok user @${user}`,
                feed_url: `http://example.com/rss.xml`,
                site_url: `http://tiktok.com/@${user}`
            })

            // User feed by username
            try {
                const posts = await TikTokScraper.user(user, { number: maxItems });
                for (const post of posts.collector) {
                    feed.item({
                        guid: post.id,
                        title: post.text,
                        description: post.text,
                        url: post.webVideoUrl,
                        date: new Date(parseInt(post.createTime, 10) * 1000)
                    })
                }

                var xml = feed.xml();
                context.succeed(xml);

            } catch (error) {
                console.log('ERROR', error);
                $respond({
                    status: 500,
                    body: JSON.stringify(error)
                })
            }
        }

    }
    getTikTokVideos();

};
