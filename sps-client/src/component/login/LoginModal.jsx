import styles from './css/LoginModal.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { FindIdView } from './FindIdView';
import { FindPasswordView } from './FindPasswordView';
import { SignUpView } from './SignUpView';
import { LoginView } from './LoginView';
import { loginPageActions } from '../../toolkit/slices/loginPageSlice';
import { NotFoundUserView } from './NotFoundUserView';
import { FoundIdView } from './FoundIdView';
import { FoundPasswordView } from './FoundPasswordView';

export const LoginModal = () => {
  const { isOpen, view } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  if (!isOpen) {
    return <></>;
  }

  const renderContent = () => {
    switch (view) {
      case 'FIND_ID':
        return <FindIdView />;
      case 'FIND_PW':
        return <FindPasswordView />;
      case 'SIGN_UP':
        return <SignUpView />;
      case 'NOT_FOUND_USER':
        return <NotFoundUserView />;
      case 'FOUND_ID':
        return <FoundIdView />;
      case 'FOUND_PWD':
        return <FoundPasswordView />;
      default:
        return <LoginView />;
    }
  };

  return (
    <div
      className={styles.overlay}
      onClick={() => dispatch(loginPageActions.closeModal())}
    >
      <div className={styles.card} onClick={(event) => event.stopPropagation()}>
        {renderContent()}
      </div>
      <button
        className={styles.closeBtn}
        onClick={() => dispatch(loginPageActions.closeModal())}
      >
        ×
      </button>
    </div>
  );
};
