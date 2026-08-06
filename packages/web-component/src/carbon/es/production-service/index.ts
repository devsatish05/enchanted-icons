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

export const ICON_NAME = `${ICON_PREFIX}icon-production-service`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M6,6c0-.5522.4477-1,1-1s1,.4478,1,1-.4478,1-1,1-1-.4476-1-1ZM11,7c.5522,0,1-.4476,1-1s-.4478-1-1-1-1,.4478-1,1,.4477,1,1,1ZM30,4v12.0001h-2v-6.0001H4v18h7.9999v2h-7.9999c-1.1046,0-2-.8954-2-2V4c0-1.1046.8954-2,2-2h24c1.1046,0,2,.8954,2,2ZM28,4H4v4h24v-4ZM31,27.0001c0,1.6543-1.3457,3-3,3s-3-1.3457-3-3c0-.2228.0283-.4384.0746-.6475l-2.0746-1.1977-2.0746,1.1977c.0463.209.0746.4247.0746.6475,0,1.6543-1.3457,3-3,3s-3-1.3457-3-3,1.3457-3,3-3c.7037,0,1.343.2536,1.8551.6607l2.1449-1.2383v-1.6068c-1.1615-.4141-2-1.5137-2-2.8157,0-1.6543,1.3457-3,3-3s3,1.3457,3,3c0,1.3019-.8385,2.4016-2,2.8157v1.6067l2.1449,1.2383c.5121-.4071,1.1514-.6607,1.8551-.6607,1.6543,0,3,1.3457,3,3h0ZM19,27.0001c0-.5518-.4482-1-1-1s-1,.4482-1,1,.4482,1,1,1,1-.4482,1-1ZM22,19.0001c0,.5513.4482,1,1,1s1-.4487,1-1-.4482-1-1-1-1,.4487-1,1ZM29,27.0001c0-.5518-.4482-1-1-1s-1,.4482-1,1,.4482,1,1,1,1-.4482,1-1Z" /></svg>`;
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
