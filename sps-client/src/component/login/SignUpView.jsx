import styles from './css/LoginModal.module.css';
import spsLogo from './image/SPS_logo.png';
import { AuthInput } from './layout/AuthInput';

export const SignUpView = () => {
  return (
    <>
      <div className={styles.signUpWrapper}>
        <div className={styles.signUpForm}>
          <div className={styles.signLogoSection}>
            <img src={spsLogo} alt="SPS Logo" className={styles.mainLogo} />
            <h1 className={styles.welcomeText}>환영합니다!</h1>
          </div>

          <div className={styles.signFormSection}>
            <h2 className={styles.title}>회원가입</h2>

            <AuthInput label="이름" />
            <AuthInput label="회사명" />
            <AuthInput label="이메일" type="email" />
            <AuthInput label="비밀번호" type="password" />
            <AuthInput label="비밀번호 확인" type="password" />

            <div className={styles.buttonRow}>
              <button className={styles.signUpBtn}>회원가입</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
