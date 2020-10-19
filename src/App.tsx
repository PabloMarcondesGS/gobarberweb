import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
// import ToastContainer from './components/ToastContainer';

import AppProvider from './hooks';

const App: React.FC = () => (
    <>
        <AppProvider>
            <SignIn />
            {/* <SignUp /> */}
        </AppProvider>

        <GlobalStyle />
    </>
);

export default App;
