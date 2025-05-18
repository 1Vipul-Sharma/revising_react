import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/about/Team'
import Company from './pages/about/Company'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'

function App() {
  return (
    <>
      <nav>
        {/* Link me jo to chl rha h matlab h ki ye url hit honge */}
        {/* ab URL hit hone ke baad un routes par define karna padega ki kya show ho wo niche routes ki madat se karrkha h  */}
        
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/users"> Users </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="team" element={<Team/>}/>
          <Route path="company" element={<Company/>}/>
        </Route>
        <Route path="/users" element={<Users/>} />
        <Route path="/users/:id" element={<UserDetails/>} />
      </Routes>
    </>
  )
}

export default App
