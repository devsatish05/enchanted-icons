/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */

/* auto generated file - do not edit */
import { html } from 'lit';
import { BaseIcon } from '../../../utils/base-icon';
import { canDefine } from '../../../utils';
import { ICON_PREFIX } from '../../../utils/tags';

export const ICON_NAME = `${ICON_PREFIX}icon-utility-expense`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22,21v2h4c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2h-1v2h-2v-2h-3v-2h6v-2h-4c-1.1,0-2-.9-2-2v-2c0-1.1.9-2,2-2h1v-2h2v2h3v2h-6ZM22.79,12.61l-13,17c-.19.25-.49.39-.79.39-.13,0-.27-.03-.39-.08-.42-.18-.67-.62-.6-1.07l.77-4.99,1.05-6.86h-4.83c-.3,0-.59-.14-.78-.38-.1899-.24-.2599-.55-.1899-.85L7.03,2.77c.1-.45.5-.77.97-.77h10c.3,0,.59.14.78.37.1899.24.2599.55.2.85l-1.34,6.01-.39,1.77h4.75c.38,0,.73.22.9.56.17.34.13.75-.11,1.05ZM19.98,13h-5.23l.27-1.22,1.73-7.78h-7.95l-2.54,11h5.91l-1.41,9.16-.18,1.12,9.4-12.28Z" /></svg>`;
  }
}

if (canDefine && !customElements.get(ICON_NAME)) {
  customElements.define(ICON_NAME, WebComponentIcon);
}

declare global {
  interface HTMLElementTagNameMap {
    [ICON_NAME]: WebComponentIcon;
  }
}
