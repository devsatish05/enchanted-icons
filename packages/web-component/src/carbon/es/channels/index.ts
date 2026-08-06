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

export const ICON_NAME = `${ICON_PREFIX}icon-channels`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M10,15v-7.2l3.6,3.6,1.4-1.4-6-6-6,6,1.4,1.4,3.6-3.6v12.34c-1.72.45-3,2-3,3.86,0,2.21,1.79,4,4,4s4-1.79,4-4c0-1.86-1.28-3.41-3-3.86v-5.14ZM11,24c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2ZM27.6,20.6l-3.6,3.6v-12.34c1.72-.45,3-2,3-3.86,0-2.21-1.79-4-4-4s-4,1.79-4,4c0,1.86,1.28,3.41,3,3.86v12.34l-3.6-3.6-1.4,1.4,6,6,6-6-1.4-1.4ZM21,8c0-1.1.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2Z" /></svg>`;
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
