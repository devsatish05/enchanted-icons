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

export const ICON_NAME = `${ICON_PREFIX}icon-battery-error`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27,11h-1v-1c0-1.1-.9-2-2-2h-7v2h7v3h3v6h-3v3H6v-5h-2v5c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2v-1h1c1.1,0,2-.9,2-2v-6c0-1.1-.9-2-2-2ZM9,15c3.31,0,6-2.69,6-6s-2.69-6-6-6-6,2.69-6,6,2.69,6,6,6ZM9,5c2.21,0,4,1.79,4,4,0,.71-.2,1.41-.57,2.02l-5.45-5.45c.61-.37,1.31-.56,2.02-.57ZM5.57,6.98l5.45,5.45c-.61.37-1.31.56-2.02.57-2.21,0-4-1.79-4-4,0-.71.2-1.41.57-2.02Z" /></svg>`;
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
