import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar.js';
import HomePage from './HomePage.js';
import ProfilePage from './ProfilePage.js';
import NotFoundPage from './NotFoundPage.js';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* BrowserRouter should be a parent of Link  component */}
        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} caseSensitive>
            <Route path=':id' element={<ProfilePage />} caseSensitive />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
