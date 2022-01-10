import './searchBar.css';

import magnifyingglass from '../../images/magnifyingglass.svg';

export default function SearchBar(props: any) {
  const {placeholderText, isLarge} = props;

  return (
    <div className={`base ${isLarge && 'base-large'}`}>
      <input
        className="search-bar"
        type="text"
        name="address"
        placeholder={placeholderText}
      />
    </div>
  );
}
