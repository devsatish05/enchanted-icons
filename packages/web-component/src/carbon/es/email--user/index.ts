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

export const ICON_NAME = `${ICON_PREFIX}icon-email-user`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,30h-2v-2c0-.5518-.4482-1-1-1h-6c-.5518,0-1,.4482-1,1v2h-2v-2c0-1.6543,1.3457-3,3-3h6c1.6543,0,3,1.3457,3,3v2ZM15,26H4c-1.103,0-2-.8975-2-2V8c0-1.103.897-2,2-2h24c1.1025,0,2,.897,2,2v5h-2v-4.0918l-11.4307,7.9141c-.3428.2373-.7959.2373-1.1387,0l-11.4307-7.9141v15.0918h11v2ZM6.2017,8l9.7983,6.7837,9.7988-6.7837H6.2017ZM24,24c-2.2061,0-4-1.7939-4-4s1.7939-4,4-4,4,1.7939,4,4-1.7939,4-4,4ZM24,18c-1.1025,0-2,.8975-2,2s.8975,2,2,2,2-.8975,2-2-.8975-2-2-2Z" /></svg>`;
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
