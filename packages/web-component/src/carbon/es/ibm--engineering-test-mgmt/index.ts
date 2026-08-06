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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-engineering-test-mgmt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m16,30c-7.7197,0-14-6.2803-14-14h2c0,6.6167,5.3833,12,12,12s12-5.3833,12-12h2c0,7.7197-6.2803,14-14,14Z" /><path stroke-width="0" d="m16,26c-5.5139,0-10-4.4861-10-10h2c0,4.4111,3.5889,8,8,8s8-3.5889,8-8h2c0,5.5139-4.4861,10-10,10Z" /><path stroke-width="0" d="m16,20c-2.2056,0-4-1.7944-4-4s1.7944-4,4-4,4,1.7944,4,4-1.7944,4-4,4Zm0-6c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Z" /><path stroke-width="0" d="m16,2c-4.9719,0-9.4933,2.6113-12,6.7883v-4.7883h-2v8h8v-2h-4.3881c2.126-3.6848,6.0558-6,10.3881-6,3.2051,0,6.2188,1.248,8.4854,3.5146l1.4141-1.4141c-2.644-2.6445-6.1597-4.1006-9.8994-4.1006Z" /></svg>`;
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
