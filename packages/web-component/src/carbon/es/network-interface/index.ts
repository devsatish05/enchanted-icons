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

export const ICON_NAME = `${ICON_PREFIX}icon-network-interface`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m28,18h-2V6h-13v-2h13c1.1028,0,2,.8972,2,2v12Z" /><path d="m18,28H6c-1.1028,0-2-.8972-2-2v-13h2v13h12v2Z" /><path d="m26,21l-1.793,1.793-5.5076-5.5078c.187-.3911.3005-.8232.3005-1.2852,0-1.6543-1.3457-3-3-3-.4617,0-.894.1133-1.2852.3008l-5.2817-5.2817c.3513-.5947.5669-1.2793.5669-2.019,0-2.2056-1.7944-4-4-4S2,3.7944,2,6s1.7944,4,4,4c.7395,0,1.4241-.2153,2.019-.5669l5.2815,5.2817c-.187.3911-.3005.8232-.3005,1.2852,0,1.6543,1.3457,3,3,3,.4617,0,.894-.1133,1.2852-.3008l5.5078,5.5078-1.793,1.793,5,5,5-5-5-5ZM4,6c0-1.1025.8972-2,2-2s2,.8975,2,2-.8972,2-2,2-2-.8975-2-2Zm11,10c0-.5513.4485-1,1-1s1,.4487,1,1-.4485,1-1,1-1-.4487-1-1Zm8.8286,10l2.1714-2.1714,2.1714,2.1714-2.1714,2.1714-2.1714-2.1714Z" /></svg>`;
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
