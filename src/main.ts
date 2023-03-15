import type { App } from 'vue';

import { Field, Button } from './components';

export default {
  install: (app: App) => {
    app.component('Field', Field);
    app.component('Button', Button);
  }
};

export { Field, Button };