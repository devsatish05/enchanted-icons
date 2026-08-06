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

export const ICON_NAME = `${ICON_PREFIX}icon-instance-cx`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="9" cy="27" r="1" /><path d="M22 5 20 5 18 8.897 16 5 14 5 16.905 10 14 15 16 15 18 11.201 20 15 22 15 19.098 10 22 5z" /><path d="M12,15H6a2.0023,2.0023,0,0,1-2-2V4A2.002,2.002,0,0,1,6,2h6V4H6v9h6Z" /><path d="M2 18H6V20H2z" /><path d="M8 18H12V20H8z" /><path d="M14 18H18V20H14z" /><path d="M20 18H24V20H20z" /><path d="M26 18H30V20H26z" /><path d="M26,31H6a2.0021,2.0021,0,0,1-2-2V25a2.0021,2.0021,0,0,1,2-2H26a2.0021,2.0021,0,0,1,2,2v4A2.0021,2.0021,0,0,1,26,31ZM6,25v4H26V25Z" /></svg>`;
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
