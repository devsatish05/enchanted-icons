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

export const ICON_NAME = `${ICON_PREFIX}icon-deployment-canary`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="23" cy="11" r="1" /><path d="M26.4632,7.4637c-.9373-.9372-2.2085-1.4637-3.534-1.4637h-.0107c-1.319,0-2.584.524-3.5167,1.4567l-2.9076,2.9076L8.4181,2.2855c-.3805-.3806-.9976-.3806-1.3781,0l-.5519.5521c-3.3182,3.3195-3.3174,8.7003.0017,12.0189l3.1455,3.145L1.0509,26.5858l1.4141,1.4142,9.9984-9.9985-4.5596-4.5591c-2.4756-2.4761-2.5327-6.4688-.1714-9.0142l8.3573,8.3603c1.223,1.2234,1.2228,3.2066-.0004,4.4298l-.7964.7964,1.4141,1.4141.7964-.7964c1.8623-1.8628,1.9683-4.7998.3638-6.813l2.9406-2.9406c.5626-.5626,1.3257-.8787,2.1214-.8787h0c.7952,0,1.5579.3159,2.1203.8781l2.1224,2.1219c-1.4878,1.4873-5.1719,5.1699-5.1719,5.1699v2.8301c0,3.866-3.134,7-7,7h-3v2h3c4.9706,0,9-4.0294,9-9v-2.0586c.7607-.7021,6-5.9414,6-5.9414l-3.5368-3.5363Z" /></svg>`;
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
