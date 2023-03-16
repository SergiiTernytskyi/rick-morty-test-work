import FacebookLogin from '@greatsumini/react-facebook-login';

export const FacebookButton = ({ onLogin, onUser, onError }) => {
  return (
    <FacebookLogin
      appId="173001335542381"
      style={{
        backgroundColor: '#4267b2',
        color: '#fff',
        fontSize: '16px',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '4px',
      }}
      onSuccess={response => {
        if (response.accessToken) {
          onLogin();
        }
      }}
      onFail={error => {
        onError(error);
      }}
      onProfileSuccess={response => {
        onUser(response);
      }}
    />
  );
};
