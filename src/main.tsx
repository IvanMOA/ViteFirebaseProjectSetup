import React from 'react'
import ReactDOM from 'react-dom'
import { firebaseConfig } from './config/firebaseConfig'
import { firestore, shouldUseEmulators } from "./firebase"

console.log(firestore)

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h2>Application running in mode: {import.meta.env.MODE}</h2>
      <h2>Application optimized for production?: {import.meta.env.PROD ? "Yes" : "No"}</h2>
      <h2>Using firebase project: {firebaseConfig.projectId}</h2>
      <h2>Using api url: {import.meta.env.VITE_API_URL}</h2>
      <h2>Using emulators ?: {shouldUseEmulators ? "Yes" : "No"}</h2>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
