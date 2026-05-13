import styles from '../css/LoginModal.module.css';
export const AuthInput = ({ label, type = 'text', ...props }) => {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input type={type} className={styles.input} {...props} />
    </div>
  );
};
