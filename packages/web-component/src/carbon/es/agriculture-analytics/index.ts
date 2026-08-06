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

export const ICON_NAME = `${ICON_PREFIX}icon-agriculture-analytics`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M24.251,21.3691l2.1943,1.4629A1,1,0,0,0,27.8,22.6l3-4-1.6-1.2-2.4326,3.2437L24.5547,19.168a1,1,0,0,0-1.3687.2509L20,23.8789V16H18V26a2.0023,2.0023,0,0,0,2,2H30V26H20.9434Z" /><path d="M2 21H16V23H2z" /><path d="M2 26H16V28H2z" /><path d="M11,16V11h1a4.0046,4.0046,0,0,0,4-4V4H13a3.9782,3.9782,0,0,0-2.7468,1.1066A6.0033,6.0033,0,0,0,5,2H2V5a6.0066,6.0066,0,0,0,6,6H9v5H2v2H16V16ZM13,6h1V7a2.002,2.002,0,0,1-2,2H11V8A2.0019,2.0019,0,0,1,13,6ZM8,9A4.0046,4.0046,0,0,1,4,5V4H5A4.0045,4.0045,0,0,1,9,8V9Z" /></svg>`;
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
