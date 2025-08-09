import Tooltip from '../Tooltip/Tooltip.tsx';
import UserImage from './UserImage.tsx';
import type { UserType } from '../../types/Users.ts';

function UserCard({ photo, name, position, email, phone }: UserType) {
  return (
    <section className="users-block__user">
      <UserImage img={photo} alt={'qwe'} />
      <Tooltip as="p">{name}</Tooltip>
      <div style={{ width: '100%' }}>
        <Tooltip as="p">{position}</Tooltip>
        <Tooltip as="p">{email}</Tooltip>
        <Tooltip as="p">{phone}</Tooltip>
      </div>
    </section>
  );
}

export default UserCard;
