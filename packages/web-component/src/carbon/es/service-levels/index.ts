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

export const ICON_NAME = `${ICON_PREFIX}icon-service-levels`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="7" cy="19" r="1" /><circle cx="16" cy="11" r="1" /><circle cx="25" cy="19" r="1" /><circle cx="10" cy="14" r="1" /><path d="m30,20h-2c0-1.2616-.1946-2.5042-.5786-3.6929l1.9033-.6146c.448,1.3876.6753,2.8369.6753,4.3075Z" /><path d="m29.8508,8.9775l-2.4368,2.4365-.0005-.0005c-.3621.3623-.8621.5864-1.4136.5864-1.103,0-2-.897-2-2,0-.5518.2241-1.0518.5864-1.4136l-.0005-.0005,2.4368-2.4365c-.3284-.0879-.667-.1494-1.0227-.1494-2.2056,0-4,1.7944-4,4,0,.7393.2153,1.4238.5669,2.019l-4.5479,4.5479c-.595-.3516-1.2795-.5669-2.019-.5669-2.2056,0-4,1.7944-4,4s1.7944,4,4,4,4-1.7944,4-4c0-.7397-.2153-1.4243-.5669-2.019l4.5479-4.5479c.595.3516,1.2795.5669,2.019.5669,2.2056,0,4-1.7944,4-4,0-.3555-.0615-.6943-.1492-1.0225Zm-13.8508,13.0225c-1.103,0-2-.8975-2-2s.897-2,2-2,2,.8975,2,2-.897,2-2,2Z" /><path d="m4,20h-2c0-7.7196,6.2803-14,14-14,1.4707,0,2.9199.2272,4.3074.6754l-.6147,1.9031c-1.1885-.3838-2.4309-.5785-3.6926-.5785-6.6167,0-12,5.3832-12,12Z" /></svg>`;
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
