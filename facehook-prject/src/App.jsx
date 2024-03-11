
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegistrationPage from './pages/RegistrationPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path='/' exact />
        <Route element={<LoginPage />} path='/login' />
        <Route element={<RegistrationPage />} path='/register' />
        <Route element={<ProfilePage />} path='/profile' />

        <Route element={<NotFoundPage />} path='*' />
      </Routes>
    </>
  )
}

export default App
