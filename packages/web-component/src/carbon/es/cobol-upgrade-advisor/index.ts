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

export const ICON_NAME = `${ICON_PREFIX}icon-cobol-upgrade-advisor`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25.57,6.4299l-1.46,1.4602-1.68-2.8901h-12.86l-6.41,11,6.41,11h7.43v2h-8c-.36,0-.68-.1899-.86-.5L1.14,16.5c-.1-.1499-.14-.3301-.14-.5s.04-.3501.14-.5L8.14,3.5c.18-.3101.5-.5.86-.5h14c.36,0,.68.1899.86.5l1.71,2.9299ZM19,11h-10v2h10v-2ZM17,15h-8v2h8v-2ZM15,19h-6v2h6v-2ZM26,11l-5,5,1.41,1.4099,2.59-2.5798v9.1699c0,1.6543-1.3457,3-3,3h-2v2h2c2.7568,0,5-2.2432,5-5v-9.1699l2.59,2.5798,1.41-1.4099-5-5Z" /></svg>`;
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
