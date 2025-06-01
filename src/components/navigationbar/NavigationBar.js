import './NavigationBar.css';

const NavigationBar = ({ instituteName }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">{instituteName}</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#faculty">Faculty</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;