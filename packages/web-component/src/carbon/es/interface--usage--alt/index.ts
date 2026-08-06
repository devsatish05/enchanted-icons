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

export const ICON_NAME = `${ICON_PREFIX}icon-interface-usage-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,19h-3c-2.2056,0-4,1.7944-4,4h-2v-14c0-1.1025-.8972-2-2-2h-2v-1c0-2.2056-1.7944-4-4-4h-3c-2.2056,0-4,1.7944-4,4v3c0,2.2056,1.7944,4,4,4h3c2.2056,0,4-1.7944,4-4h2v14c0,1.1025.8972,2,2,2h2v1c0,2.2056,1.7944,4,4,4h3c2.2056,0,4-1.7944,4-4v-3c0-2.2056-1.7944-4-4-4ZM11,9c0,1.1025-.8972,2-2,2h-3c-1.1028,0-2-.8975-2-2v-3c0-1.1025.8972-2,2-2h3c1.1028,0,2,.8975,2,2v3ZM28,26c0,1.1025-.8972,2-2,2h-3c-1.1028,0-2-.8975-2-2v-3c0-1.1025.8972-2,2-2h3c1.1028,0,2,.8975,2,2v3Z" /></svg>`;
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
