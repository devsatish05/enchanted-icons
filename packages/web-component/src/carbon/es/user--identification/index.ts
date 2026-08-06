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

export const ICON_NAME = `${ICON_PREFIX}icon-user-identification`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22,11h4a1,1,0,0,1,1,1v2a0,0,0,0,1,0,0H21a0,0,0,0,1,0,0V12A1,1,0,0,1,22,11Z" /><circle cx="24" cy="8" r="2" /><path d="M30,18H18a2.0023,2.0023,0,0,1-2-2V4a2.002,2.002,0,0,1,2-2H30a2.0023,2.0023,0,0,1,2,2V16A2.0027,2.0027,0,0,1,30,18ZM18,4V16H30.001L30,4Z" /><path d="M15,30H13V26a2.9465,2.9465,0,0,0-3-3H6a2.9465,2.9465,0,0,0-3,3v4H1V26a4.9514,4.9514,0,0,1,5-5h4a4.9514,4.9514,0,0,1,5,5Z" /><path d="M8,11a3,3,0,0,1,0,6,3,3,0,0,1,0-6M8,9A5,5,0,0,0,8,19,5,5,0,0,0,8,9Z" /></svg>`;
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
