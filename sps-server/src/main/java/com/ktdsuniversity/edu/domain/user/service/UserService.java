package com.ktdsuniversity.edu.domain.user.service;

import com.ktdsuniversity.edu.domain.user.vo.request.RegistVO;
import jakarta.validation.Valid;

public interface UserService {
    boolean createUser(@Valid RegistVO registVO);
}
