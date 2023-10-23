import headerimg from "../copy2.jpg";
import { TopDiv } from "../style";
const Header = () => {
  return (
    <header>
      <TopDiv>
        <div>
          <img src={headerimg} alt="header image" />
        </div>
        <div>
          <h2>BECOME A SOCIAL MEDIA EXPERT</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            fugiat ducimus possimus modi assumenda qui necessitatibus deleniti
            dolores aperiam eligendi.
          </p>
          <button>OUR TRAININGS</button>
          <button>REGISTER NOW</button>
        </div>
      </TopDiv>
      <div>
        <h1>ABOUT OUR COMPANY</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          sapiente illum veniam quae mollitia in molestias a harum atque, quos
          beatae, suscipit nulla, praesentium recusandae ea adipisci nam dolores
          cupiditate aut ex ducimus. Incidunt nulla eos maxime voluptates
          molestiae temporibus quis dignissimos quam explicabo ipsam iusto
          expedita sapiente corporis tempora iure corrupti blanditiis quibusdam
          exercitationem obcaecati aliquid nobis, adipisci itaque? Iste, vitae
          commodi! Laboriosam alias beatae culpa cumque blanditiis dolorem amet,
          sed iusto pariatur laborum, vitae nulla, optio deleniti. Quos esse
          temporibus nisi aperiam assumenda laudantium, eos est sit corrupti
          doloremque iure, adipisci sapiente molestias quo, tenetur et!
          Recusandae, vel!
        </p>
      </div>
    </header>
  );
};

export default Header;
