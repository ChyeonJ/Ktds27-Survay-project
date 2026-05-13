package com.ktdsuniversity.edu.domain.user.dao;

import com.ktdsuniversity.edu.domain.user.vo.request.RegistVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao {
    int insertUser(RegistVO registVO);
}
