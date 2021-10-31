import { initializeApp } from "firebase/app"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import { firebaseConfig } from "./config/firebaseConfig"

const firebaseApp = initializeApp(firebaseConfig)

export const firestore = getFirestore(firebaseApp)

console.log(`
		Application running in mode ${import.meta.env.MODE}
		Using firebase project: ${firebaseConfig.projectId}

`)


console.log(`
		Functions http url is ${import.meta.env.VITE_API_URL}

`)

export const shouldUseEmulators = import.meta.env.MODE === "dev_local"

if (shouldUseEmulators) {
	connectFirestoreEmulator(firestore, 'localhost', 8080)
	console.log(`
		Using firebase emulators

`)
}

console.log(import.meta.env)