import "./css/aside.css"
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../toolkit/slices/uiSlice.js";
import {useState} from "react";
import {generatePath} from "../../utils/routerUtils.jsx";
import {Link} from "react-router-dom";
import rightarrowImg from "./image/rightarrow.png"
import underarrowImg from "./image/underarrow.png"


export const Aside = () => {
    const asideToggle = useSelector((state) => state.ui.asideToggle);
    const menuEnv = useSelector((state) => state.ui.menu);
    const dispatch = useDispatch();

    const [openMenus, setOpenMenus] = useState({});

    const onCloseHandler = () => {
        dispatch(uiActions.changeAsideToggle());
    };

    const toggleSubMenu = (e, id) => {
        e.preventDefault();
        setOpenMenus(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const asideMenuAdder = () => {
        const rootEnvId = menuEnv.find(item => item.parentId === "" || item.parentId === null);
        if (!rootEnvId) {
            return null;
        }

        const mainMenus = menuEnv.filter(item => item.parentId === rootEnvId.id);

        return mainMenus.map(main => {
            const subMenus = menuEnv.filter(sub => sub.parentId === main.id);
            const hasSub = subMenus.length > 0;
            const isOpen = openMenus[main.id];

            const mainPath = `/${generatePath(main.name)}`;
            console.log(mainPath);
            return (
                <div key={main.id} className="menu-group">
                    <Link to={hasSub ? "#" : mainPath}
                          onClick={(e) => hasSub ? toggleSubMenu(e, main.id) : onCloseHandler()}
                          className={hasSub ? "has-sub" : "no-sub"}>
                        {hasSub ? (
                            isOpen ?
                                <img className="arrow-img" src={underarrowImg} alt="v"/> :
                                <img className="arrow-img" src={rightarrowImg} alt=">"/>
                        ) : (
                            <div className="arrow-spacer" />
                        )} <span>{main.name}</span>
                    </Link>

                    {hasSub && isOpen && (
                        <div className="sub-menu-list">
                            {subMenus.map(sub => (
                                <Link key={sub.id}
                                      to={`${mainPath}/${generatePath(sub.name)}`}
                                      className="sub-item"
                                      onClick={onCloseHandler}>
                                    {sub.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <>
            <div className={asideToggle ? "aside-active" : "aside-disable"} onClick={onCloseHandler}/>
            <aside className={asideToggle ? "open" : ""}>
                <div className="aside-content">
                    {asideMenuAdder()}
                </div>
            </aside>
        </>
    );
}