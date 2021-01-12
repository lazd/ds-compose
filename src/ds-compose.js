// Base theme
import '@spectrum-web-components/theme/sp-theme';
import '@spectrum-web-components/theme/theme-dark.js';
import '@spectrum-web-components/theme/scale-medium.js';

import { DsCompose } from './DsCompose.js';

customElements.define('ds-compose', DsCompose);

// While https://github.com/open-wc/open-wc/issues/1210 and
// go https://github.com/popperjs/popper-core/issues/933 persist
// without an acceptable outcome, this allows the built storybook
// to function with `process.env.NODE_ENV`... :/
window.process = window.process || {};
window.process.env = window.process.env || {};
window.process.env.NODE_ENV = window.process.env.NODE_ENV || 'production';
