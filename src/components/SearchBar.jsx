import { memo } from "react";
import PropTypes from "prop-types";

const SearchBarComponent = ({ onChange }) => {
  console.log("searchbar rendered!");
  return (
    <input
      className="border w-full border-gray-400 rounded-md"
      type="text"
      name="text"
      autoComplete="on"
      required={true}
      onChange={(ev) => onChange(ev.target.value)}
    />
  );
};

const SearchBar = memo(SearchBarComponent);

export default SearchBar;

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
SearchBar.defaultProps = {
  onChange: () => {},
};
