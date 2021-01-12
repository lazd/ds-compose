import { LitElement, html, css } from 'lit-element';

import '@spectrum-web-components/theme/sp-theme';
import '@spectrum-web-components/button/sp-button';

export class DsCompose extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Compose';
  }

  render() {
    return html`
      <sp-theme scale="large" color="dark">
        <sp-button>I'm supposed to be a button!</sp-button>

      </sp-theme>
    `;
  }
}
