export const Searchbox = (props) => {
  return (
    <div className="col-lg-3 d-flex ml-3 mt-3 col-sm-4 mb-5">
      <input
        type="text"
        className="form-control"
        placeholder="Type to search"
        value={props.searchValue}
        onChange={(event) => {
          props.setSearchValue(event.target.value);
        }}
      />
    </div>
  );
};
