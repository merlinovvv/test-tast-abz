import { Container } from '../Container/Container.tsx';
import './UsersBlock.scss';
import UserCard from './UserCard.tsx';
import { useContext } from 'react';
import Button from '../Button/Button.tsx';
import type { JSX } from 'react/jsx-runtime';
import type { UserType } from '../../types/Users.ts';
import { UsersContext } from '../../context/UsersContext.tsx';

function UsersBlock() {
  const { usersFiltered, totalPages, params, setParams } = useContext(UsersContext);

  // При натисканні "Show more" підвантажуємо наступну сторінку користувачів
  function handleShowMore() {
    setParams({ ...params, page: params.page + 1 });
  }

  return (
    <Container>
      <section id="users" className="users-block">
        <h2>Working with GET request</h2>

        {/* Відображаємо список користувачів з фільтром */}
        <div className="users-block__list">
          {usersFiltered?.map((user: JSX.IntrinsicAttributes & UserType, index: any) => (
            <UserCard key={`${user.id}_${index}`} {...user} />
          ))}
        </div>

        {/* Кнопка для підвантаження наступної сторінки, якщо вона є */}
        {totalPages > params?.page && <Button onClick={handleShowMore}>Show more</Button>}
      </section>
    </Container>
  );
}

export default UsersBlock;
