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

export const ICON_NAME = `${ICON_PREFIX}icon-top-programs`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29.999,28.5859l-2.832-2.832c.524-.7905.833-1.7356.833-2.7529,0-2.7568-2.2432-5-5-5s-5,2.2432-5,5,2.2432,5,5,5c1.0173,0,1.9624-.3091,2.7529-.833l2.832,2.832,1.4141-1.4141ZM23,26.001c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3,3,1.3457,3,3-1.3457,3-3,3ZM28,2H4c-1.103,0-2,.8975-2,2v20c0,1.1025.897,2,2,2h10v-2H4v-14h24v4h2V4c0-1.1025-.897-2-2-2ZM4,8v-4h24v4H4ZM7,6c0,.5523-.4477,1-1,1s-1-.4477-1-1,.4477-1,1-1,1,.4477,1,1ZM10,6c0,.5523-.4477,1-1,1s-1-.4477-1-1,.4477-1,1-1,1,.4477,1,1Z" /></svg>`;
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
