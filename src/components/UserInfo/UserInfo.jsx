import { UserImage, UserMeta } from './UserInfo.styled';

export const UserInfo = ({ name, picture }) => {
  return (
    <>
      <UserMeta>
        <p>Hello,</p>
        <p>{name}</p>
        <UserImage src={picture} alt={name} />
      </UserMeta>
    </>
  );
};
