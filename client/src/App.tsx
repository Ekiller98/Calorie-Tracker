import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'




function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Navigation bar with clickable links */}
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        <Link to="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
        <Link to="/log-food" className="text-blue-600 hover:underline">Log Food</Link>
      </nav>

      {/* Define which component to show for each route */}
      <Routes>
        <Route path="/" element={<h1 className="text-3xl font-bold">Welcome to Lose N Bulk 🏋️</h1>} />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={<h1 className="text-2xl">Register Page</h1>} />
        <Route path="/dashboard" element={<h1 className="text-2xl">Dashboard</h1>} />
        <Route path="/log-food" element={<h1 className="text-2xl">Log Your Food</h1>} />
        <Route path="/log-workout" element={<h1 className="text-2xl">Log Your Workout</h1>} />
      </Routes>
    </div>
  )
}

export default App;
