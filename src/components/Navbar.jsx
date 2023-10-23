import logo from "../copy1.jpg";
import { Nav, Ul, Li, Btn } from "../style";

const Navbar = () => {
  return (
    <Nav>
      <img src={logo} alt="logo" />
      <Ul>
        <Li>HOME</Li>
        <Li>ABOUT US</Li>
        <Li>CONTACT US</Li>
        <Li>DOCS</Li>
        <Li>
          <Btn btnPadding="20px 40px">Buy Now</Btn>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
