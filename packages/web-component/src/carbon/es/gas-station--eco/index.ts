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

export const ICON_NAME = `${ICON_PREFIX}icon-gas-station-eco`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M8,10v2h7v-2h-7ZM29,9.41v15.09c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5v-7.5h-3v9h2v2h-6v-2h2V6H6v9h-2V5c0-.55.45-1,1-1h13c.55,0,1,.45,1,1v10h4c.55,0,1,.45,1,1v8.5c0,.83.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-10.5c-1.1,0-2-.9-2-2v-4.59l-3.01-3,1.42-1.42,5,5.01c.38.38.59.88.59,1.41ZM6,28H2v-4c0-3.3086,2.6914-6,6-6h4v4c0,3.3086-2.6914,6-6,6ZM5.4141,26h.5859c2.2056,0,4-1.7939,4-4v-2h-2c-2.2056,0-4,1.7939-4,4v.5859l2.293-2.293,1.4141,1.4141-2.293,2.293Z" /></svg>`;
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
