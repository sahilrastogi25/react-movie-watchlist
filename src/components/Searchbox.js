export const Searchbox = ({ searchVal, setSearchVal }) => {
  return (
    <div className="col-lg-3 d-flex ml-4 mt-3 col-sm-4 mb-5">
      <input
        type="text"
        className="form-control"
        placeholder="Search a movie or show ..."
        value={searchVal}
        onChange={(event) => {
          setSearchVal(event.target.value);
        }}
      />
    </div>
  );
};
