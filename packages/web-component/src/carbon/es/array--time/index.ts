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

export const ICON_NAME = `${ICON_PREFIX}icon-array-time`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M19.3,20.6999l-4.3-4.3v-6.4h2v5.6l3.7,3.7-1.4,1.4ZM16,8c4.4112,0,8,3.5889,8,8s-3.5888,8-8,8-8-3.5889-8-8,3.5888-8,8-8M16,6c-5.5229,0-10,4.4771-10,10s4.4771,10,10,10,10-4.4771,10-10-4.4771-10-10-10h0ZM4,2h4v2h-4v4h-2v-4c0-1.1046.8954-2,2-2ZM30,4v4h-2v-4h-4v-2h4c1.1046,0,2,.8954,2,2ZM8,28v2h-4c-1.1046,0-2-.8954-2-2v-4h2v4h4ZM30,24v4c0,1.1046-.8954,2-2,2h-4v-2h4v-4h2Z" /></svg>`;
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
