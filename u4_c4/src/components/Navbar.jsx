import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
      <Link to='/products/men'>Men Products</Link>
      <Link to='/products/women'>Women Products</Link>
      <Link to='/products/kids'>Kids</Link>
      <Link to='/products/homedecor'>Home Decor</Link>
    </nav>
  );
};
