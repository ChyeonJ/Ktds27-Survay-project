import "./css/index.css";
import Pagination from "./Pagination.jsx";
import TableArea from "./TableArea.jsx";
import TopArea from "./TopArea.jsx";

const Main = () => {
  return (
    <div className="wrapper">
      <TopArea />
      <TableArea />
      <Pagination />
    </div>
  );
};

export default Main;
