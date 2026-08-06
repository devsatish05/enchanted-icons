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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-lpa`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m30,30h-2v-2c0-.5513-.4482-1-1-1h-6c-.5518,0-1,.4487-1,1v2h-2v-2c0-1.6543,1.3457-3,3-3h6c1.6543,0,3,1.3457,3,3v2Z" /><path stroke-width="0" d="m24,24c-2.2061,0-4-1.7944-4-4s1.7939-4,4-4,4,1.7944,4,4-1.7939,4-4,4Zm0-6c-1.1025,0-2,.897-2,2s.8975,2,2,2,2-.897,2-2-.8975-2-2-2Z" /><path stroke-width="0" d="M8 20H10V22H8z" /><path stroke-width="0" d="M12 20H18V22H12z" /><path stroke-width="0" d="M8 16H10V18H8z" /><path stroke-width="0" d="M12 16H18V18H12z" /><path stroke-width="0" d="M8 12H10V14H8z" /><path stroke-width="0" d="M12 12H18V14H12z" /><path stroke-width="0" d="m21,5h-3v-1c0-1.103-.8975-2-2-2h-6c-1.1025,0-2,.897-2,2v1h-3c-1.1025,0-2,.897-2,2v19c0,1.103.8975,2,2,2h9v-2H5V7h3v2h10v-2h3v6.9999h2v-6.9999c0-1.103-.8975-2-2-2Zm-5,2h-6v-3h6v3Z" /></svg>`;
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
