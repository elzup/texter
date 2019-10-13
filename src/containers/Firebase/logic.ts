import firebase from 'firebase'
import { ThunkAction } from '../../types'

import { initializeFirebase } from '../../services/firebase'

initializeFirebase()
const firebaseDb = firebase.database()

export function doLogin(): ThunkAction {
	return () => {
		const provider = new firebase.auth.GoogleAuthProvider()

		firebase.auth().signInWithPopup(provider)
	}
}

export function doLogout(): ThunkAction {
	return async () => {
		await firebase.auth().signOut()
		// actions.googleLogout()
	}
}

export function addPotato(text: string): ThunkAction {
	return () => {
		const user = firebase.auth().currentUser

		if (!user) {
			console.error('no auth login')
			return
		}
		const myPotatoesRef = firebaseDb.ref(`users/${user.uid}/`).child('potatoes')

		myPotatoesRef
			.push({
				publish: false,
				text: text,
				timestamp: firebase.database.ServerValue.TIMESTAMP,
			})
			.catch(error => console.error(error.message))
	}
}
