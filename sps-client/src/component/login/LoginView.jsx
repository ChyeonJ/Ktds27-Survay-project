import styles from './css/LoginModal.module.css';
import naverLogo from './image/naver_logo.png';
import googleLogo from './image/google_logo.png';
import githubLogo from './image/github_logo.png';

import { loginPageActions } from '../../toolkit/slices/loginPageSlice';
import { useDispatch } from 'react-redux';
import { AuthActionLink } from './layout/AuthActionLink';
import { AuthLayout } from './layout/AuthLayout';
import { AuthInput } from './layout/AuthInput';

export const LoginView = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(loginPageActions.closeModal());
  };

  const handleChangeView = (view) => {
    dispatch(loginPageActions.changeView(view));
  };

  return (
    <AuthLayout title="로그인">
      <AuthInput label="아이디" />
      <AuthInput label="비밀번호" type="password" />

      <div className={styles.buttonRow}>
        <button className={styles.loginBtn}>로그인</button>
      </div>

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

      <div className={styles.socialBox}>
        <p className={styles.socialTitle}>소셜 계정으로 로그인</p>
        <div className={styles.socialIcons}>
          <img src={naverLogo} alt="Naver" className={styles.socialIcon} />
          <img src={googleLogo} alt="Google" className={styles.socialIcon} />
          <img src={githubLogo} alt="Github" className={styles.socialIcon} />
        </div>
      </div>

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
