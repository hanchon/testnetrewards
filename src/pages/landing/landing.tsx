import './landing.css';
import '../../index.css';
import SearchBar from 'src/components/searchBar/searchBar';
import logo from '../../images/logo.svg';
import rektdrop from '../../images/rektdrop.svg';
import rewards from '../../images/rewards.svg';
import arrowright from '../../images/arrowright.svg';

export default function LandingPage(props: any) {
  const {searchForWallet} = props;
  const submitRequest = (event: any) => {
    event.preventDefault();

    const address = event.target[0].value ?? '';
    searchForWallet(address);
  };

  return (
    <form onSubmit={submitRequest}>
      <div className="page-base la--base">
        <div className="page-body">
          <img src={logo} alt="Evmos" className="la--logo" />
          <img src={rektdrop} alt="Rektdrop" className="la--title" />
          <img src={rewards} alt="Rewards" className="la--subtitle" />
          <div className="la--search">
            <SearchBar placeholderText="Enter your Evmos hex or bec32 address" />
            <button className="la--button" type="submit">
              <img src={arrowright} alt="Arrow Right" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
