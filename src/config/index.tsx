let { NODE_ENV } = process.env
const REACT_APP_API_URL = '-'
// if (!REACT_APP_API_URL) {

if (false) {
	console.warn('Configuration not completed. must setup envioraments.')
	console.info(process.env)
}

const isDev = NODE_ENV === 'development'

const config = {
	isDev,
	appPath: isDev ? '/' : '/texter/',
	activeJudgeSpan: { minutes: 5 },
	api: {
		url: REACT_APP_API_URL,
	},
	tabBarHeight: 40,
}

export default config
