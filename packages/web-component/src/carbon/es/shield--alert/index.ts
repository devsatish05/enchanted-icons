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

export const ICON_NAME = `${ICON_PREFIX}icon-shield-alert`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M17,18h-2V7h2v11ZM14.5,22.5c0,.8284.6716,1.5,1.5,1.5s1.5-.6716,1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5,1.5ZM16.479,29.8779l5.7856-3.1562c3.5381-1.9297,5.7354-5.6543,5.7354-9.7217V4c0-1.103-.8975-2-2-2H6c-1.103,0-2,.897-2,2v13c0,4.0674,2.1978,7.792,5.7349,9.7217l5.7861,3.1562c.1494.0811.314.1221.479.1221s.3296-.041.479-.1221ZM26,4v13c0,3.335-1.7979,6.3867-4.6924,7.9658l-5.3076,2.8955-5.3071-2.8955c-2.8945-1.5791-4.6929-4.6309-4.6929-7.9658V4h20Z" /></svg>`;
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
