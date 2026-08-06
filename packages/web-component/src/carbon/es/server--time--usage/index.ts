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

export const ICON_NAME = `${ICON_PREFIX}icon-server-time-usage`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M8,25c0,.5523-.4477,1-1,1s-1-.4477-1-1,.4477-1,1-1,1,.4477,1,1ZM30,28v-6c0-1.1025-.8975-2-2-2H4c-1.103,0-2,.8975-2,2v6c0,1.1025.897,2,2,2h24c1.1025,0,2-.8975,2-2ZM28,22v6H4l-.0015-6h24.0015ZM24,10c0-4.4111-3.5889-8-8-8s-8,3.5889-8,8,3.5889,8,8,8,8-3.5889,8-8ZM22,10c0,3.3086-2.6914,6-6,6s-6-2.6914-6-6,2.6914-6,6-6,6,2.6914,6,6ZM16,10h6c0-1.5907-.6326-3.1179-1.7574-4.2426s-2.652-1.7574-4.2426-1.7574v6Z" /></svg>`;
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
