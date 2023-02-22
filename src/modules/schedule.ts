import * as cron from 'node-schedule'
import { Config } from '../types/types'
import axios from 'axios'

export const schedule = (config: Config) => {
	cron.scheduleJob(config.cron, () => {
		axios
			.post(`http://${process.env.SHORTS_SERVER}/youtube-shorts`, config)
			.then((res) => {
				console.log('post request has been sended')
			})
			.catch((err) => console.log(err))
	})
}

//Instant post with no schedule

// export const schedule = (config: Config) => {
// 	axios
// 		.post('http://localhost:3000/youtube-shorts', config)
// 		.then((res) => {
// 			console.log('post request has been sended')
// 		})
// 		.catch((err) => console.log(err))
// }
