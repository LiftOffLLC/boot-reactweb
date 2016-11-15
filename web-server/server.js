import React from 'react'
import { renderToString } from 'react-router-server'
import { ServerRouter, createServerRenderContext } from 'react-router'
import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import stats from './build/stats.json'

import { Root } from '../src/ui/web/containers/'
import { ConfigureStore } from '../src/state/store'


const app = express();
const context = createServerRenderContext();

app.use(express.static(path.join(__dirname, 'build')));
app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.get('*', function (req, res) {
  const store = ConfigureStore();
  const server = (
    <ServerRouter
      location={req.url}
      context={context}
    >
      {({action, location, router}) => <Root router={router} action={action} location={location} store={store} />}
    </ServerRouter>
  );
  renderToString(server, context)
    .then(markup => {
      const result = context.getResult();
      if (result.redirect) {
        // redirect
      } else if (result.missed) {
        // 404
      } else {
        res.render(
          path.join(__dirname, 'index.ejs'),
          {
            markup,
            initialState: context.getInitialState(),
            ...context.getModules(stats)
          }
        );
      }
    })
    .catch(err => console.error(err));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Serving now!!');
});
