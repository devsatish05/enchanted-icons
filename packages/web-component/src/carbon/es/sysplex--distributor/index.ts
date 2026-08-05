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

export const ICON_NAME = `${ICON_PREFIX}icon-sysplex-distributor`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="M4 26H8V30H4z" /><path stroke-width="0" d="M14 26H18V30H14z" /><path stroke-width="0" d="M24 26H28V30H24z" /><path stroke-width="0" d="m25,18h-8v-2h-2v2H7c-1.1028,0-2,.8975-2,2v4h2v-4h8v4h2v-4h8v4h2v-4c0-1.1025-.8972-2-2-2Z" /><path stroke-width="0" d="m20,2h-8c-1.1028,0-2,.8975-2,2v8c0,1.1025.8972,2,2,2h8c1.1028,0,2-.8975,2-2V4c0-1.1025-.8972-2-2-2Zm-1.4141,2l-6.5859,6.5859v-6.5859h6.5859Zm-5.1719,8l6.5862-6.5859.001,6.5859h-6.5872Z" /></svg>`;
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
