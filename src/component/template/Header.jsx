import "./css/header.css";
import logoImg from "./image/logo.png";
import userImg from "./image/user.png"
import logoutImg from "./image/logout.png"
import menuImg from "./image/menu.png"
import wonyoungImg from "./image/wonyoung.jpg"
import cancelImg from "./image/cancle.png"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../toolkit/slices/uiSlice.js";

export const Header = () => {

    const [user, setUser] = useState(wonyoungImg);
    const asideToggle = useSelector((state) => state.ui.asideToggle);
    const dispatch = useDispatch();

    const onClickMenuHandler = () => {
        dispatch(uiActions.changeAsideToggle());
    }

    // TODO 환경변수로 관리하도록 리펙토링
    return (
        <>
            <header>
                <div className="main-nav">
                    <a href="#">
                        <img className="logo-img" src={logoImg} alt="logo 이미지"/>
                    </a>
                    <a href="#">
                        <div>Menu 1</div>
                    </a>
                    <a href="#">
                        <div>Menu 2</div>
                    </a>
                    <a href="#">
                        <div>Menu 3</div>
                    </a>
                    <a href="#">
                        <div>Menu 4</div>
                    </a>
                    <a href="#">
                        <div>Menu 5</div>
                    </a>
                </div>
                <div className="user-info">
                    <a href="#">
                        {/* 저작권 https://www.flaticon.com/kr/free-icons/ */}
                        {!user ?
                            <img className="user-img" src={userImg} alt="user 이미지"/> :
                            <img className="user-img" src={wonyoungImg} alt="user-img"/>
                        }
                    </a>
                    <div>
                        <div>ㅇㅇㅇ님</div>
                        <div>19:59</div>
                    </div>
                    <a href="#">
                        {/* 저작권 https://www.flaticon.com/kr/free-icons/- */}
                        <img className="logout-img" src={logoutImg} alt="logout 이미지"/>
                    </a>
                    {/* 저작권 https://www.flaticon.com/kr/free-icons/- */}
                    <div onClick={onClickMenuHandler}>
                        {!asideToggle ?
                            <img className="menu-img" src={menuImg} alt="menu 이미지"/> :
                            // 저작권 https://www.flaticon.com/kr/free-icons/
                            <img className="cancel-img" src={cancelImg} alt="cancle 이미지"/>}
                    </div>
                </div>
            </header>
            {/*<BreadcrumbItems/>*/}
        </>
    );
}