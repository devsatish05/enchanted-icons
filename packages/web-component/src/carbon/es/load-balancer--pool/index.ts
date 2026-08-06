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

export const ICON_NAME = `${ICON_PREFIX}icon-load-balancer-pool`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M10 15H22V17H10z" /><path d="M8.7,6.2852A2.9665,2.9665,0,0,0,9,5,3,3,0,1,0,6,8a2.96,2.96,0,0,0,1.2852-.3008L10,10.4141V13h2V9.5859ZM6,6A1,1,0,1,1,7,5,1.0009,1.0009,0,0,1,6,6Z" /><path d="M19,5a3,3,0,1,0-4,2.8154V13h2V7.8159A2.9957,2.9957,0,0,0,19,5ZM16,6a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,16,6Z" /><path d="M26,2a3.0033,3.0033,0,0,0-3,3,2.9665,2.9665,0,0,0,.3,1.2852L20,9.5859V13h2V10.4141l2.7148-2.7149A2.96,2.96,0,0,0,26,8a3,3,0,0,0,0-6Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,26,6Z" /><path d="M12,19H10v2.5859L7.2854,24.3008A2.9609,2.9609,0,0,0,6,24a3,3,0,1,0,3,3,2.9665,2.9665,0,0,0-.3-1.2852L12,22.4141ZM6,28a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,6,28Z" /><path d="M17,24.1841V19H15v5.1841a3,3,0,1,0,2,0ZM16,28a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,16,28Z" /><path d="M26,24a2.9609,2.9609,0,0,0-1.2854.3008L22,21.5859V19H20v3.4141l3.3,3.3007A2.9665,2.9665,0,0,0,23,27a3,3,0,1,0,3-3Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,26,28Z" /></svg>`;
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
