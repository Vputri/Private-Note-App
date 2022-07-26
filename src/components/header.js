import Input from "./input";

const Header = ({ search, updateQuery }) => {
  return (
    <div class="d-flex justify-content-around">
      <h2>Private Note</h2>
      <Input
        class="col-3"
        value={search}
        onChange={updateQuery}
        type='search'
        placeholder='Find notes...'
      />
    </div>
  );
};

export default Header;