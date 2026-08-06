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

export const ICON_NAME = `${ICON_PREFIX}icon-windy-snow`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25,28a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H6V18H25a5,5,0,0,1,0,10Z" /><path d="M23,15H10V13H23a3,3,0,1,0-3-3H18a5,5,0,1,1,5,5Z" /><path d="M11 23H13V25H11z" /><path d="M13 25H15V27H13z" /><path d="M15 27H17V29H15z" /><path d="M15 23H17V25H15z" /><path d="M11 27H13V29H11z" /><path d="M6 4H8V6H6z" /><path d="M8 6H10V8H8z" /><path d="M10 8H12V10H10z" /><path d="M10 4H12V6H10z" /><path d="M6 8H8V10H6z" /><path d="M2 26H4V28H2z" /><path d="M4 28H6V30H4z" /><path d="M6 30H8V32H6z" /><path d="M6 26H8V28H6z" /><path d="M2 30H4V32H2z" /></svg>`;
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
