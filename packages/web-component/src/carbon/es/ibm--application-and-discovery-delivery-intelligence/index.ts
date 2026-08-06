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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-application-and-discovery-delivery-intelligence`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M9,6h-2v10h2V6ZM28.5039,8.1362L16.5039,1.1362c-.1558-.0908-.3298-.1362-.5039-.1362s-.3481.0454-.5039.1362l-4,2.3333c-.3071.1792-.4961.5081-.4961.8638v8.6667h2V4.9076l3-1.7499,11,6.4166v3.4257h2v-4c0-.3557-.189-.6846-.4961-.8638ZM4.9987,22.4315v-13.4315h-1.9987v14.006c0,.3559.1889.6849.4958.8642l10.4971,6.1298,1.0072-1.7282h-.0001s-10.0013-5.8403-10.0013-5.8403ZM22,26.9999h2v-9.9999h-2v9.9999ZM27,27h2v-6h-2v6ZM17,27h2v-8h-2v8Z" /></svg>`;
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
