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

export const ICON_NAME = `${ICON_PREFIX}icon-calculator-check`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M24 26.59 21.41 24 20 25.41 24 29.41 31 22.41 29.59 21 24 26.59z" /><path d="M15 23H17V25H15z" /><path d="M9 23H11V25H9z" /><path d="M21 18H23V20H21z" /><path d="M15 18H17V20H15z" /><path d="M9 18H11V20H9z" /><path d="M21 13H23V15H21z" /><path d="M15 13H17V15H15z" /><path d="M9 13H11V15H9z" /><path d="M9 7H23V10H9z" /><path d="M17,30H6.0046A2.007,2.007,0,0,1,4,27.9951V3.9961A1.9984,1.9984,0,0,1,5.9961,2H26.0037A1.9985,1.9985,0,0,1,28,3.9961V18H26V4H6V28H17Z" /></svg>`;
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
