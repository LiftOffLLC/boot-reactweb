import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router';
import { preloadModules, ServerStateProvider } from 'react-router-server'
import { Root } from './src/ui/web/containers'
import { ConfigureStore } from './src/state/store'

const rootEl = document.getElementById('root');

preloadModules(window.__INITIAL_MODULES__).then(() => {
  const store = ConfigureStore(window.__INITIAL_STATE__[1]);
  render((
    <ServerStateProvider state={window.__INITIAL_STATE__}>
      <BrowserRouter>
        {
           ({ action, location, router }) => <Root router={router} action={action} location={location} store={store} />
        }
      </BrowserRouter>
    </ServerStateProvider>
  ), rootEl);
});
