import React from 'react';
import ThemeProvider from './theme';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Protected from './routes/Protected';

function App() {
  const user = useSelector((state) => state?.login?.user);

  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, Component, isProtected, name }) => {
            if (isProtected) {
              return (
                <Route
                  key={path}
                  exact
                  path={path}
                  element={
                    <Protected name={name} user={user}>
                      <Component />
                    </Protected>
                  }
                />
              );
            }
            return (
              <Route key={path} exact path={path} element={<Component />} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
