import "./styles/Navbar.css";

let Navbar = ({ handleChange }) => {
  return (
    <div className="navbar">
      <h1 className="brand">Robots</h1>

      <input
        type="text"
        placeholder="Search Robot"
        onChange={handleChange}
        className="search-robot"
      />
    </div>
  );
};

export default Navbar;
