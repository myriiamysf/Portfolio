import "../styles/Navbar2.css";

const Navbar2: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#presentation">Présentation</a>
        </li>
        <li>
          <a href="#competences">Compétences</a>
        </li>
        <li>
          <a href="#projet">Projet</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
