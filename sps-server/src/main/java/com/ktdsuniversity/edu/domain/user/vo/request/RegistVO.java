package com.ktdsuniversity.edu.domain.user.vo.request;

public class RegistVO {
    private String usrId;
    private String usrEmail;
    private String usrName;
    private String usrPassword;
    private String usrCompanyName;
    private String fileGroupId;
    private String envRoleId;

    public String getUsrId() {
        return usrId;
    }

    public void setUsrId(String usrId) {
        this.usrId = usrId;
    }

    public String getUsrEmail() {
        return usrEmail;
    }

    public void setUsrEmail(String usrEmail) {
        this.usrEmail = usrEmail;
    }

    public String getUsrName() {
        return usrName;
    }

    public void setUsrName(String usrName) {
        this.usrName = usrName;
    }

    public String getUsrPassword() {
        return usrPassword;
    }

    public void setUsrPassword(String usrPassword) {
        this.usrPassword = usrPassword;
    }

    public String getUsrCompanyName() {
        return usrCompanyName;
    }

    public void setUsrCompanyName(String usrCompanyName) {
        this.usrCompanyName = usrCompanyName;
    }

    public String getFileGroupId() {
        return fileGroupId;
    }

    public void setFileGroupId(String fileGroupId) {
        this.fileGroupId = fileGroupId;
    }

    public String getEnvRoleId() {
        return envRoleId;
    }

    public void setEnvRoleId(String envRoleId) {
        this.envRoleId = envRoleId;
    }
}
