import { LitElement, html, css } from 'lit-element';

import '@spectrum-web-components/button/sp-button';
import '@spectrum-web-components/top-nav/sp-top-nav';
import '@spectrum-web-components/action-menu/sp-action-menu';

export class DsCompose extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css `
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: center;

        background-color: var(--spectrum-alias-background-color-default);
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Compose';
  }

  render() {
    return html `
      <sp-top-nav>
        <sp-top-nav-item href="#">Compose</sp-top-nav-item>
        <sp-top-nav-item href="#page-1" style="margin-inline-start: auto;">
        System
        </sp-top-nav-item>
        <sp-top-nav-item href="#page-2">Components</sp-top-nav-item>
        <sp-top-nav-item href="#page-3">Publish</sp-top-nav-item>
        <sp-action-menu
            label="Account"
            placement="bottom-end"
            style="margin-inline-start: auto;"
        >
            <sp-menu>
                <sp-menu-item>
                    Account Settings
                </sp-menu-item>
                <sp-menu-item>
                    My Profile
                </sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item>
                    Share
                </sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item>
                    Help
                </sp-menu-item>
                <sp-menu-item>
                    Sign Out
                </sp-menu-item>
            </sp-menu>
        </sp-action-menu>
      </sp-top-nav>
      <sp-button>I'm a button!</sp-button>
    `;
  }
}
