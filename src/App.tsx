import { SignUpFormContextProvider } from 'context/SignUpFormContext';
import SignUp from 'features/SignUp';

import appStyles from 'styles/modules/App.module.css';

const App = () => (
  <div className={appStyles.app}>
    <SignUpFormContextProvider>
      <SignUp />
    </SignUpFormContextProvider>
  </div>
);

export default App;