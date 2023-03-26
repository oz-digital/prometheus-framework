import type { App } from 'vue';

// Define Styles
// ------------------------------------- //
import '@/styles/reset.scss';
import '@/styles/base.scss';
import '@/styles/typography.scss';
import '@/styles/layout.scss';
import '@/styles/responsive.scss';

// Define components
// ------------------------------------- //
import { 
  Field, 
  Button, 
  Select 
} from  './components';

export default {
  install: (app: App) => {
    app.component('Field', Field);
    app.component('Button', Button);
    app.component('Select', Select);
  }
};

export { Field, Button, Select }

