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

export const ICON_NAME = `${ICON_PREFIX}icon-mapping-show`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,4v4c0,1.1-.9,2-2,2h-4c-1.1,0-2-.9-2-2v-1h-2l-6.2,12.8c-.2.7-1,1.2-1.8,1.2h-2v1c0,1.1-.9,2-2,2h-4c-1.1,0-2-.9-2-2v-4c0-1.1.9-2,2-2h4c1.1,0,2,.9,2,2v1h2l5.8-12h-7.8v1c0,1.1-.9,2-2,2h-4c-1.1,0-2-.9-2-2v-4c0-1.1.9-2,2-2h4c1.1,0,2,.9,2,2v1h12v-1c0-1.1.9-2,2-2h4c1.1,0,2,.9,2,2ZM8,4h-4v4h4v-4ZM8,18h-4v4h4v-4ZM28,4h-4v4h4v-4ZM22,22c-1.103,0-2,.8975-2,2s.897,2,2,2,2-.8975,2-2-.897-2-2-2ZM29.7769,23.4785c-1.4229-3.3287-4.4761-5.4785-7.7769-5.4785s-6.3538,2.1499-7.7769,5.4785l-.2231.5215.2231.5215c1.4231,3.3287,4.4761,5.4785,7.7769,5.4785s6.354-2.1499,7.7769-5.4785l.2231-.5215-.2231-.5215ZM22,28c-2.2056,0-4-1.7944-4-4s1.7944-4,4-4,4,1.7944,4,4-1.7944,4-4,4Z" /></svg>`;
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
