import type { App } from 'vue';

import { Field, Button, Select } from './components';

export default {
  install: (app: App) => {
    app.component('Field', Field);
    app.component('Button', Button);
    app.component('Select', Select);
  }
};

export { Field, Button, Select };