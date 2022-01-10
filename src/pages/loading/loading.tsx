import './loading.css';
import '../../index.css';

import {SpinnerRoundOutlined} from 'spinners-react';

export default function LoadingPage() {
  return (
    <div className="page-base lo--page-base">
      <div className="page-body lo--page-body">
        <h3 className="lo--title">LOADING</h3>
        <SpinnerRoundOutlined color="#F4DDB5" speed={125} thickness={80} />
      </div>
    </div>
  );
}
