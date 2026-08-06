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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-webmethods-b2b-integration`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M14.0014,22.9965l3.999,3.999-3.999,4-1.4141-1.4141,1.5853-1.5859h-4.1722c-.3715,0-.6823-.2112-.8547-.5116l-4.0134-6.9923,1.7363-.9922,3.712,6.4961h3.5917l-1.585-1.585,1.4141-1.4141ZM28,13c-.1606,0-.3149.023-.4688.0473l-4.6528-8.5303c-.1748-.3213-.5117-.5215-.8779-.5215h-4.1694l1.5845-1.585-1.4141-1.4141-3.998,3.999,3.998,3.999,1.4141-1.4141-1.5845-1.585h3.5757l4.3687,8.0084c-.4769.5311-.7754,1.2261-.7754,1.9961,0,.7684.2974,1.4618.7725,1.9926l-3.772,6.915L10.8784,4.517c-.1748-.3213-.5117-.5215-.8779-.5215s-.7021.2002-.8779.5215l-3.85,7.0571,1.7323,1.0002,2.9956-5.4909,11.1221,20.3906c.1748.3213.5117.5215.8779.5215s.7031-.2002.8779-.5215l4.6482-8.5217c.1552.0248.3113.0477.4734.0477,1.6569,0,3-1.3431,3-3s-1.3431-3-3-3ZM7.0004,15.9955c0-1.6543-1.3457-3-3-3s-3,1.3457-3,3,1.3457,3,3,3,3-1.3457,3-3ZM5.0004,15.9955c0,.5518-.4482,1-1,1s-1-.4482-1-1,.4482-1,1-1,1,.4482,1,1Z" /></svg>`;
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
