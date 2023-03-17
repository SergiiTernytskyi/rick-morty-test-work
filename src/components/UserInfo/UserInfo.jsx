import { StyledUser, UserImage, UserMeta } from './UserInfo.styled';

export const UserInfo = ({ name, picture }) => {
  return (
    <StyledUser>
      <UserMeta>
        Hello, {name}
        <UserImage src={picture} alt={name} />
      </UserMeta>
    </StyledUser>
  );
};
