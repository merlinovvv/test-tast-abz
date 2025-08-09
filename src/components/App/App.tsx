import Header from '../Header/Header.tsx';
import MainBlock from '../MainBlock/MainBlock.tsx';
import UsersBlock from '../UsersBlock/UsersBlock.tsx';
import './App.scss';
import RegisterUserBlock from '../RegisterUserBlock/RegisterUserBlock.tsx';
import { Footer } from '../Footer/Footer.tsx';
import UsersProvider from '../../context/UsersContext.tsx';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <MainBlock />

        {/* Провайдер контексту користувачів, щоб UsersBlock та RegisterUserBlock могли працювати з даними */}
        <UsersProvider>
          <UsersBlock />
          <RegisterUserBlock />
        </UsersProvider>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
