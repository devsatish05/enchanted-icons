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

export const ICON_NAME = `${ICON_PREFIX}icon-user-service`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m23.019,10.4332c-.595.3514-1.2795.5668-2.019.5668-2.2056,0-4-1.7944-4-4,0-.3557.0615-.6943.1492-1.0228l2.4368,2.4368.0005-.0004c.3621.3621.8621.5864,1.4136.5864,1.103,0,2-.897,2-2,0-.5515-.2242-1.0515-.5864-1.4136l.0005-.0004-2.4368-2.4368c.3284-.0875.667-.1491,1.0227-.1491,2.2056,0,4,1.7944,4,4,0,.7396-.2155,1.4241-.5669,2.0191l5.5669,5.5668-1.4141,1.4141-5.5669-5.5668Z" /><path stroke-width="0" d="m16,30h-2v-5c-.0018-1.6561-1.3439-2.9982-3-3h-4c-1.6561.0018-2.9982,1.3439-3,3v5h-2v-5c.0033-2.7601,2.2399-4.9967,5-5h4c2.7601.0033,4.9967,2.2399,5,5v5Z" /><path stroke-width="0" d="m9,10c1.6569,0,3,1.3431,3,3s-1.3431,3-3,3-3-1.3431-3-3c.0019-1.6561,1.3439-2.9981,3-3m0-2c-2.7614,0-5,2.2386-5,5s2.2386,5,5,5,5-2.2386,5-5-2.2386-5-5-5Z" /></svg>`;
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
