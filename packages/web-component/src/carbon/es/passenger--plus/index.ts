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

export const ICON_NAME = `${ICON_PREFIX}icon-passenger-plus`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M10.5,9A3.5,3.5,0,1,1,14,5.5,3.5042,3.5042,0,0,1,10.5,9Zm0-5A1.5,1.5,0,1,0,12,5.5,1.5017,1.5017,0,0,0,10.5,4Z" /><path d="M22.4739,31.313,19.34,24H12.2385a4.0072,4.0072,0,0,1-3.8662-2.9707l-1.6338-6.126a3.8988,3.8988,0,0,1,7.5342-2.0092L15.1008,16H21v2H13.5637l-1.2226-4.5908a1.9,1.9,0,0,0-3.6709.979l1.6338,6.1255A2.0051,2.0051,0,0,0,12.2385,22h8.42l3.6543,8.5254Z" /><path d="M30 6 26 6 26 2 24 2 24 6 20 6 20 8 24 8 24 12 26 12 26 8 30 8 30 6z" /><path d="M18,28H7.7676A2.0025,2.0025,0,0,1,5.835,26.5151L2.033,12.2576l1.9326-.5152L7.7676,26H18Z" /></svg>`;
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
