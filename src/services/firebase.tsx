import firebase from 'firebase/app'
import config from '../config'

export const initializeFirebase = () => {
	if (firebase.apps.length === 0) {
		firebase.initializeApp(config.firebase)
	}
}
