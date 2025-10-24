import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import { NotificationProvider } from './components/NotificationToast'

function App() {
  const [devMode, setDevMode] = useState(false)

  return (
    <NotificationProvider>
      <div className="min-h-screen">
        <NavBar devMode={devMode} setDevMode={setDevMode} />
        <main className="container mx-auto px-4 py-8">
          <Dashboard devMode={devMode} />
        </main>
      </div>
    </NotificationProvider>
  )
}

export default App
