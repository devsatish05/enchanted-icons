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

export const ICON_NAME = `${ICON_PREFIX}icon-generate-pdf`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M24,24v4H8V24H6v4H6a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2h0V24Z" /><path d="M21 21 19.586 19.586 17 22.172 17 14 15 14 15 22.172 12.414 19.586 11 21 16 26 21 21z" /><path d="M28 4 28 2 22 2 22 12 24 12 24 8 27 8 27 6 24 6 24 4 28 4z" /><path d="M17,12H13V2h4a3.0033,3.0033,0,0,1,3,3V9A3.0033,3.0033,0,0,1,17,12Zm-2-2h2a1.0011,1.0011,0,0,0,1-1V5a1.0011,1.0011,0,0,0-1-1H15Z" /><path d="M9,2H4V12H6V9H9a2.0027,2.0027,0,0,0,2-2V4A2.0023,2.0023,0,0,0,9,2ZM6,7V4H9l.001,3Z" /></svg>`;
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
