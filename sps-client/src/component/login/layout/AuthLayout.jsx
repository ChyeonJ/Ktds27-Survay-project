import styles from '../css/LoginModal.module.css';
import spsLogo from '../image/SPS_logo.png';
import { useDispatch } from 'react-redux';
import { loginPageActions } from '../../../toolkit/slices/loginPageSlice';

export const AuthLayout = ({ children, title }) => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(loginPageActions.closeModal());
  return (
    <>
      <div className={styles.logoSection}>
        <img src={spsLogo} alt="SPS Logo" className={styles.mainLogo} />
        <h1 className={styles.welcomeText}>환영합니다!</h1>
      </div>

      <div className={styles.formSection}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>

      <button className={styles.closeBtn} onClick={handleClose}>
        ×
      </button>
    </>
  );
};
