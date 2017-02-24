'use strict';

import path from 'path';
import express from 'express';
import Vue from 'vue';
import {createRenderer} from 'vue-server-renderer';

const port = process.env.PORT || 3000;
const app = express();
const renderer = createRenderer();


const vm = new Vue({
  template: '<div id=app>world</div>'
});

app.get('*', (req, res) => {
  renderer.renderToString(vm, (err, html) => {
    if (err) {
      console.error(err);
      return res.send('Server Error')
    }

    console.log(html);
    res.send(html);
  });
})

app.listen(port, (err) => {
  if(err) throw err;
  console.log('Server is running at localhost:3000');
})
