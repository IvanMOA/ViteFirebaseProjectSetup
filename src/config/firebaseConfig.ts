
const prodConfig = {
	apiKey: "AIzaSyARmsuzZ0Rrjjs8zGJ6zbK1Madvq1UViV8",
	authDomain: "testprod-d259a.firebaseapp.com",
	projectId: "testprod-d259a",
	storageBucket: "testprod-d259a.appspot.com",
	messagingSenderId: "697894710328",
	appId: "1:697894710328:web:65607c257c5b3b6fcc8acd"
}

const qaConfig = {
	apiKey: "AIzaSyDABEApl5Ni2o_itSn4gud40mkqek2yoRo",
	authDomain: "testqa-8fabe.firebaseapp.com",
	projectId: "testqa-8fabe",
	storageBucket: "testqa-8fabe.appspot.com",
	messagingSenderId: "920164129707",
	appId: "1:920164129707:web:4b946a8c10d337ba6790ee"
}

export const firebaseConfig = import.meta.env.VITE_FIREBASE_PROJECT === 'prod' ? prodConfig : qaConfig