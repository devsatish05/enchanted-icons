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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-unstructured-data-processor`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22,10c-2.2061,0-4-1.7944-4-4s1.7939-4,4-4,4,1.7944,4,4-1.7939,4-4,4ZM22,4c-1.1025,0-2,.897-2,2s.8975,2,2,2,2-.897,2-2-.8975-2-2-2Z" /><path d="M21,19h-7v-7h7v7ZM16,17h3v-3h-3v3Z" /><path d="M12.6182,12H3.3818L8,2.7642l4.6182,9.2358ZM6.6182,10h2.7637l-1.3818-2.7642-1.3818,2.7642Z" /><path d="M20,30h-8c-1.103,0-2-.8975-2-2v-4.4648l-5.1094-3.4062c-.5576-.3721-.8906-.9941-.8906-1.6641v-4.4648h2v4.4648l5.1094,3.4062c.5576.3721.8906.9941.8906,1.6641v4.4648h8v-4.4648c0-.6699.333-1.292.8906-1.6641l5.1094-3.4062v-6.4648h2v6.4648c0,.6699-.333,1.292-.8906,1.6641l-5.1094,3.4062v4.4648c0,1.1025-.8975,2-2,2Z" /></svg>`;
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
