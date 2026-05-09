import "./css/aside.css"
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../toolkit/slices/uiSlice.js";

export const Aside = () => {
    const asideToggle = useSelector((state) => state.ui.asideToggle);
    const dispatch = useDispatch();

    const onCloseHandler = () => {
        dispatch(uiActions.changeAsideToggle());
    };

    // TODO 환경변수로 관리하도록 리펙토링
    // TODO 상위메뉴의 하위메뉴로 드롭다운
    return (
        <>
            <div className={asideToggle ? "aside-active" : "aside-disable"} onClick={onCloseHandler} />
            <aside className={asideToggle ? "open" : ""}>
                <div className="aside-content">
                    <a href="">menu 1</a>
                    <a href="">menu 2</a>
                    <a href="">menu 3</a>
                    <a href="">menu 4</a>
                    <a href="">menu 5</a>
                    <a href="">menu 6</a>
                </div>
            </aside>
        </>
    );
}