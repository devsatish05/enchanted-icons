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

export const ICON_NAME = `${ICON_PREFIX}icon-upstream`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m10,24c0,3.3137,2.6863,6,6,6s6-2.6863,6-6-2.6863-6-6-6-6,2.6863-6,6Zm2,0c0-2.2056,1.7944-4,4-4s4,1.7944,4,4-1.7944,4-4,4-4-1.7944-4-4Z" /><path d="m30,5c0-1.6567-1.3433-3-3-3s-3,1.3433-3,3c0,1.3042.8374,2.4028,2,2.8164v5.1836c0,1.7217-.752,3.3438-2,4.4673v-2.4673h-2v6h6v-2h-2.7168c1.6938-1.4995,2.7168-3.6816,2.7168-6v-5.1836c1.1626-.4136,2-1.5122,2-2.8164Zm-3,1c-.5522,0-1-.4478-1-1s.4478-1,1-1,1,.4478,1,1-.4478,1-1,1Z" /><path d="m18.586,11.5859l-1.5859,1.5859v-5.3555c1.1626-.4136,2-1.5122,2-2.8164,0-1.6567-1.3433-3-3-3s-3,1.3433-3,3c0,1.3042.8374,2.4028,2,2.8164v5.3555l-1.5859-1.5859-1.4141,1.4141,4,4,4-4-1.4141-1.4141Zm-2.5859-7.5859c.5522,0,1,.4478,1,1s-.4478,1-1,1-1-.4478-1-1,.4478-1,1-1Z" /><path d="m8,15v2.4673c-1.248-1.1235-2-2.7456-2-4.4673v-5.1836c1.1626-.4136,2-1.5122,2-2.8164,0-1.6567-1.3433-3-3-3s-3,1.3433-3,3c0,1.3042.8374,2.4028,2,2.8164v5.1836c0,2.3184,1.0229,4.5005,2.7168,6h-2.7168v2h6v-6h-2Zm-3-11c.5522,0,1,.4478,1,1s-.4478,1-1,1-1-.4478-1-1,.4478-1,1-1Z" /></svg>`;
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
