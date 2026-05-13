const Pagination = () => {
  return (
    <div className="pagination">
      <button type="button">&lt;</button>
      <button type="button" className="active">
        1
      </button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <span>...</span>
      <button type="button">14</button>
      <button type="button">&gt;</button>
    </div>
  );
};
export default Pagination;
