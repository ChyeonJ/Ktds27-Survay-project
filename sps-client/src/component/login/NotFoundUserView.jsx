import styles from './css/LoginModal.module.css';

import { loginPageActions } from '../../toolkit/slices/loginPageSlice';
import { useDispatch } from 'react-redux';
import { AuthActionLink } from './layout/AuthActionLink';
import { AuthLayout } from './layout/AuthLayout';

export const NotFoundUserView = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(loginPageActions.closeModal());
  };

  const handleChangeView = (view) => {
    dispatch(loginPageActions.changeView(view));
  };

  return (
    <AuthLayout title="아이디 찾기">
      <h2 className={styles.notFoundUser}>회원 정보를 찾을 수 없습니다.</h2>

      <div className={styles.findLinks}>
        <AuthActionLink
          text="아이디 찾기"
          onClick={() => handleChangeView('FIND_ID')}
        />
        <AuthActionLink
          text="비밀번호 찾기"
          onClick={() => handleChangeView('FIND_PW')}
        />
      </div>

      <AuthActionLink
        isFullText
        text="로그인 하러갈래?"
        linkText="로그인 하러 가기"
        onClick={() => handleChangeView('LOGIN')}
      />

      <AuthActionLink
        isFullText
        text="아직 회원이 아니신가요?"
        linkText="회원가입"
        to="/sign-up"
        onClick={handleClose}
      />
    </AuthLayout>
  );
};
