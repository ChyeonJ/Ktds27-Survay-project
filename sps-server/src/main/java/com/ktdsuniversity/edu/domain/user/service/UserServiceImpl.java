package com.ktdsuniversity.edu.domain.user.service;

import com.ktdsuniversity.edu.domain.user.dao.UserDao;
import com.ktdsuniversity.edu.domain.user.vo.request.RegistVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public boolean createUser(RegistVO registVO) {
        String encodePassword = passwordEncoder.encode(registVO.getUsrPassword());
        registVO.setUsrPassword(encodePassword);

        int successCount = this.userDao.insertUser(registVO);
        return successCount == 1;
    }
}
