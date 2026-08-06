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

export const ICON_NAME = `${ICON_PREFIX}icon-production-environment`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M6,6c0-.5522.4477-1,1-1s1,.4478,1,1-.4478,1-1,1-1-.4476-1-1ZM11,7c.5522,0,1-.4476,1-1s-.4478-1-1-1-1,.4478-1,1,.4477,1,1,1ZM30,4v12.0001h-2v-6.0001H4v18.0001h7.9999v2h-7.9999c-1.1046,0-2-.8954-2-2V4c0-1.1046.8954-2,2-2h24c1.1046,0,2,.8954,2,2ZM28,4H4v4h24v-4ZM25.58,22.4101l1.42-1.41,4,4-4,4-1.41-1.42,2.58-2.58-2.59-2.59ZM19.42,27.5901l-1.42,1.41-4-4,4-4,1.41,1.42-2.58,2.58,2.59,2.59ZM24.915,20.5771l-1.915-.577-2.915,9.423,1.915.577,2.915-9.423Z" /></svg>`;
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
