// @flow

import _combineReducers from './combineReducers'
let {
	NODE_ENV,
	REACT_APP_FIREBASE_API_KEY,
	REACT_APP_FIREBASE_AUTH_DOMAIN,
	REACT_APP_FIREBASE_DATABASE_URL,
	REACT_APP_FIREBASE_PROJECT_ID,
	REACT_APP_FIREBASE_STOREACT_APPGE_BUCKET,
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
} = process.env
const REACT_APP_API_URL = '-'
// if (!REACT_APP_API_URL) {
if (false) {
	console.warn('Configuration not completed. must setup envioraments.')
	console.info(process.env)
}

type Config = {
	+isDev: boolean,
	+firebase: $npm$firebase$Config,
	+appName: string,
	+appPath: string,
	+activeJudgeSpan: { [key: string]: number },
	+tabBarHeight: number,
	+api: {
		+url: string,
	},
}
const isDev = NODE_ENV === 'development'

const configDevelopment = {
	appName: 'FarmController (Dev)',
}
const configProduction = {
	appName: 'FarmController',
}

const config: Config = {
	isDev,
	firebase: {
		apiKey: REACT_APP_FIREBASE_API_KEY || '',
		authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN || '',
		databaseURL: REACT_APP_FIREBASE_DATABASE_URL || '',
		projectId: REACT_APP_FIREBASE_PROJECT_ID || '',
		storageBucket: REACT_APP_FIREBASE_STOREACT_APPGE_BUCKET || '',
		messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID || '',
	},
	appPath: '/',
	activeJudgeSpan: { minutes: 5 },
	api: {
		url: REACT_APP_API_URL,
	},
	tabBarHeight: 40,
	...(isDev ? configDevelopment : configProduction),
}

export const combineReducers = _combineReducers

export default config
