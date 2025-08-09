import { Container } from '../Container/Container.tsx';
import BG_IMG from '../../images/photos/bg.jpg';
import Button from '../Button/Button.tsx';
import './MainBlock.scss';

function MainBlock() {
  return (
    <section style={{ backgroundImage: `url(${BG_IMG})` }} className="main-block">
      <div className="main-block__background"></div>
      <Container>
        <div className="main-block__content">
          <article>
            <h1 className="main-block__title">Test assignment for front-end developer</h1>
            <p className="main-block__description">
              What defines a good front-end developer is one that has skilled knowledge of HTML,
              CSS, JS with a vast understanding of User design thinking as they'll be building web
              interfaces with accessibility in mind. They should also be excited to learn, as the
              world of Front-End Development keeps evolving.
            </p>
          </article>
          <Button href="#signup">Sign up</Button>
        </div>
      </Container>
    </section>
  );
}

export default MainBlock;
