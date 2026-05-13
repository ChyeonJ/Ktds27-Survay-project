import { loginPageActions } from '../../toolkit/slices/loginPageSlice';
import { useDispatch } from 'react-redux';
import { AuthActionLink } from './layout/AuthActionLink';
import { AuthInput } from './layout/AuthInput';
import { AuthLayout } from './layout/AuthLayout';

export const FindPasswordView = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(loginPageActions.closeModal());
  };

  const handleChangeView = (view) => {
    dispatch(loginPageActions.changeView(view));
  };

  return (
    <AuthLayout title="비밀번호 찾기">
      <AuthInput label="회사명" />
      <AuthInput label="회원명" />
      <AuthInput label="이메일" />
      <AuthInput label="아이디" />

      <AuthActionLink
        isFullText
        text="로그인하러갈래?"
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
