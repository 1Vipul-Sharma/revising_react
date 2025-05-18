import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>This is the About Page</h1>

      <nav>
        <Link to="team">Our Team</Link> | 
        <Link to="company">Our Company</Link>
      </nav>

      <Outlet /> {/* Nested route yahan render hoga */}
    </div>
  );
}

export default About;
