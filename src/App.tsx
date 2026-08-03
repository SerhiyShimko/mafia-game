import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { MainPage } from './pages/MainPage'
import { GamePage } from './pages/GamePage'
import { LobbyPage } from './pages/LobbyPage'
import { RulesPage } from './pages/RulesPage'
import { ResultsPage } from './pages/ResultsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RoleRevealPage } from './pages/RoleRevealPage'
import { Header } from './components/Header'

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/game' element={<GamePage />} />
          <Route path='/rules' element={<RulesPage />} />
          <Route path='/lobby' element={<LobbyPage />} />
          <Route path='/results' element={<ResultsPage />} />
          <Route path='/role-reveal' element={<RoleRevealPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
