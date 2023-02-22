export interface Config {
	channelName: string
	contentType: string
	youtubeLoginToken: any
	youtubeVideoTitle: string
	youtubeVideoDescription: string
	youtubeVideoTags: string[]
	categoryId: number
	youtubeSecret: any

	snoowrapClientId: string | undefined
	snoowrapSecret: string | undefined
	snoowrapToken: string | undefined
	redditPostLimit: number

	videoOnly: boolean
	isAdult: boolean

	scheduleRepeats: number | 'all'
	cron: string
}