import { Config } from '../types/types'
import { schedule, scheduleOnce } from '../modules/schedule'

import categoryIds from './youtube-categories'
import { getBase64ThumbnailLogo } from './utils'

export const start = () => {
	const config: Config = {
		scheduleRepeats: 'all',
		cron: '0 */11 * * *',
		channelName: 'ant-on-gold-bin',
		//Type of content
		contentType: 'reddit',
		//Youtube configs
		youtubeLoginToken: JSON.parse(process.env.YOUTUBE_LOGIN_TOKEN),
		youtubeSecret: JSON.parse(process.env.YOUTUBE_SECRET),
		youtubeVideoTitle: 'Funny animals I found on TikTok #shorts',
		youtubeVideoDescription:
			'Subscribe and watch the newest shorts founded by the Ant',
		youtubeVideoTags: [
			'funny',
			'compilation',
			'dog',
			'cat',
			'aww',
			'animals',
			'tiktok compilation',
			'shorts',
			'lol',
			'tiktok',
			'funnyanimals',
			'dogvideos',
			'catvideos',
			'animalantics',
			'petslovers',
			'petvideos',
			'funnypets',
			'petcomedy',
			'animalcomedy',
			'dogcomedy',
			'catcomedy',
			'cutepets',
			'funnydogvideos',
			'funnycatvideos',
			'adorablepets',
			'petfails',
			'animalbloopers',
			'petpranks',
			'animalmemes',
			'dogmemes',
			'catmemes',
			'petvines',
			'animalshorts',
			'dogshorts',
			'catshorts',
			'funnyanimalclips',
			'petouttakes',
			'animalfunnyvideos',
			'dogs',
			'puppies',
			'cuteanimals',
			'cats',
			'kittens',
			'animallovers',
			'petsofinstagram',
			'dogsofinstagram',
			'catsofinstagram',
			'funnypets',
			'adorableanimals',
			'petfun',
			'petfriends',
			'funnycats',
			'funnydogs',
			'petswithattitude',
			'doglovers',
			'catlovers',
			'petsrule',
		],
		categoryId: categoryIds.Comedy,
		// youtubeClientSecret: '../raccoon-youtube-secret.json',
		videoOnly: true,

		//Reddit configs
		snoowrapClientId: process.env.AVOCADO_SNOOWRAP_CLIENT_ID,
		snoowrapSecret: process.env.AVOCADO_SNOOWRAP_CLIENT_SECRET,
		snoowrapToken: process.env.AVOCADO_SNOOWRAP_REFRESH_TOKEN,
		redditPostLimit: 100,
		isAdult: false,
		thumbnailLogo: getBase64ThumbnailLogo(),

		uploadCount: 1,
	}

	process.env.SCHEDULE === 'true' ? schedule(config) : scheduleOnce(config)
}
