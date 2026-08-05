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

export const ICON_NAME = `${ICON_PREFIX}icon-snow-heavy`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M4 26H6V28H4z" /><path d="M6 28H8V30H6z" /><path d="M8 30H10V32H8z" /><path d="M8 26H10V28H8z" /><path d="M4 30H6V32H4z" /><path d="M8 18H10V20H8z" /><path d="M10 20H12V22H10z" /><path d="M12 22H14V24H12z" /><path d="M12 18H14V20H12z" /><path d="M8 22H10V24H8z" /><path d="M18 18H20V20H18z" /><path d="M20 20H22V22H20z" /><path d="M22 22H24V24H22z" /><path d="M22 18H24V20H22z" /><path d="M18 22H20V24H18z" /><path d="M14 26H16V28H14z" /><path d="M16 28H18V30H16z" /><path d="M18 30H20V32H18z" /><path d="M18 26H20V28H18z" /><path d="M14 30H16V32H14z" /><path d="M24.8008,9.1362a8.9943,8.9943,0,0,0-17.6006,0A6.4957,6.4957,0,0,0,6,21.4985v-2.26A4.4943,4.4943,0,0,1,8.144,11.019l.8155-.0639.0991-.812a6.9938,6.9938,0,0,1,13.8838,0l.0986.812.8154.0639A4.4944,4.4944,0,0,1,26,19.2383v2.26A6.4958,6.4958,0,0,0,24.8008,9.1362Z" /></svg>`;
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
