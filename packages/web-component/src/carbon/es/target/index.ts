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

export const ICON_NAME = `${ICON_PREFIX}icon-target`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M17,30h-2v-2.041c-5.8208-.4824-10.4761-5.1387-10.9585-10.959h-2.0415v-2h2.0415c.4824-5.8208,5.1377-10.4761,10.9585-10.9585v-2.0415h2v2.0415c5.8203.4824,10.4766,5.1377,10.959,10.9585h2.041v2h-2.041c-.4824,5.8203-5.1387,10.4766-10.959,10.959v2.041ZM15,22h2v3.9502c4.7168-.4707,8.4795-4.2334,8.9502-8.9502h-3.9502v-2h3.9502c-.4707-4.7173-4.2334-8.48-8.9502-8.9502v3.9502h-2v-3.9502c-4.7173.4702-8.48,4.2329-8.9502,8.9502h3.9502v2h-3.9502c.4702,4.7168,4.2329,8.4795,8.9502,8.9502v-3.9502ZM18.8281,20.2422l-2.8286-2.8281-2.8281,2.8281-1.4141-1.4141,2.8281-2.8286-2.8281-2.8281,1.4141-1.4141,2.8281,2.8281,2.8286-2.8281,1.4141,1.4141-2.8281,2.8281,2.8281,2.8286-1.4141,1.4141Z" /></svg>`;
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
