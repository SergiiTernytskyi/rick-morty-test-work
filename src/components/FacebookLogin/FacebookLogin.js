import FacebookLogin from '@greatsumini/react-facebook-login';

export const FacebookButton = ({ onLogin, onUser }) => {
  return (
    <FacebookLogin
      appId="173001335542381"
      style={{
        backgroundColor: '#4267b2',
        color: '#fff',
        fontSize: '14px',
        padding: '8px 8px',
        border: 'none',
        borderRadius: '4px',
      }}
      onSuccess={response => {
        if (response.accessToken) {
          onLogin();
        }
      }}
      onProfileSuccess={response => {
        const {
          name,
          picture: {
            data: { url },
          },
        } = response;

        onUser({ name, picture: url });
      }}
    />
  );
};
