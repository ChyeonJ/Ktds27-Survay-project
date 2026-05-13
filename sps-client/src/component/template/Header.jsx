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
import {Link} from "react-router-dom";
import {generatePath} from "../../utils/routerUtils.jsx";

export const Header = () => {
    const [user, setUser] = useState(wonyoungImg);
    const asideToggle = useSelector((state) => state.ui.asideToggle);
    const menuList = useSelector((state) => state.ui.menu);
    const dispatch = useDispatch();

    const onClickMenuHandler = () => {
        dispatch(uiActions.changeAsideToggle());
    }

    const rootItem = menuList.find(item => item.parentId === null || item.parentId === "");
    const topMenu = rootItem ? menuList.filter(item => item.parentId === rootItem.id) : [];

    // TODO 환경변수로 관리하도록 리펙토링
    return (
        <>
            <header>
                <div className="main-nav">
                    <Link to="/">
                        <img className="logo-img" src={logoImg} alt="logo 이미지" />
                    </Link>
                    {topMenu.map((menu) => (
                        <Link key={menu.id} to={`/${generatePath(menu.name)}`}>
                            <div>{menu.name}</div>
                        </Link>
                    ))}
                </div>
                <div className="user-info">
                    <a href="#">
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
                        <img className="logout-img" src={logoutImg} alt="logout 이미지"/>
                    </a>
                    <div onClick={onClickMenuHandler}>
                        {!asideToggle ?
                            <img className="menu-img" src={menuImg} alt="menu 이미지"/> :
                            <img className="cancel-img" src={cancelImg} alt="cancle 이미지"/>}
                    </div>
                </div>
            </header>
            {/*<BreadcrumbItems/>*/}
        </>
    );
}