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

export const ICON_NAME = `${ICON_PREFIX}icon-timing-belt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="16" cy="24" r="1" stroke-width="0" /><path stroke-width="0" d="m30,12c0-1.8237-1.2344-3.3496-2.9062-3.8286L7.2087,2.207c-.3838-.123-.7847-.207-1.2087-.207-2.2056,0-4,1.7944-4,4,0,.6025.1438,1.1689.3835,1.6816l8.1016,18.6782c.9185,2.1382,3.0442,3.6401,5.5149,3.6401,2.252,0,4.2161-1.249,5.2422-3.0889l8.002-12.5894c.4712-.6562.7559-1.4541.7559-2.3218Zm-14,6c-2.4155,0-4.4971,1.438-5.4475,3.5005l-5.0149-11.5474c.1536.0181.3042.0469.4624.0469,2.2056,0,4-1.7944,4-4,0-.3193-.0474-.6255-.1182-.9233l13.3882,4.0161c-.7771.73-1.27,1.7593-1.27,2.9072,0,2.1465,1.7029,3.8896,3.8267,3.9824l-4.0593,6.3809c-.7148-2.5146-3.0271-4.3633-5.7673-4.3633Zm12-6c0,1.1025-.8972,2-2,2s-2-.8975-2-2,.8972-2,2-2,2,.8975,2,2ZM6,4c1.1028,0,2,.8975,2,2s-.8972,2-2,2-2-.8975-2-2,.8972-2,2-2Zm10,24c-2.2056,0-4-1.7944-4-4s1.7944-4,4-4,4,1.7944,4,4-1.7944,4-4,4Z" /></svg>`;
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
