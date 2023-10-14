import SignUp from 'features/SignUp';

import appStyles from 'styles/modules/App.module.css';

const App = () => (
  <div className={appStyles.app}>
    <SignUp />
  </div>
);

export default App;