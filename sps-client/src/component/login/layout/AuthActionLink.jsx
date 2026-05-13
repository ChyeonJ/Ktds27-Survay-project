import { Link } from 'react-router-dom';
import styles from '../css/LoginModal.module.css';

export const AuthActionLink = ({
  text,
  onClick,
  to,
  isFullText = false,
  linkText,
}) => {
  // 클릭액션만 있는 경우
  if (!isFullText) {
    return (
      <span className={styles.link} onClick={onClick}>
        {text}
      </span>
    );
  }

  // 문장형인 경우
  return (
    <p className={styles.footerText}>
      {text}{' '}
      {to ? (
        <Link to={to} className={styles.signupLink} onClick={onClick}>
          {linkText}
        </Link>
      ) : (
        <span className={styles.signupLink} onClick={onClick}>
          {linkText}
        </span>
      )}
    </p>
  );
};
