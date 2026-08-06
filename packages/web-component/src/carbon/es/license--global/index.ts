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

export const ICON_NAME = `${ICON_PREFIX}icon-license-global`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22,14a8,8,0,1,0,8,8A8.0092,8.0092,0,0,0,22,14Zm5.91,7H25.9563a12.03,12.03,0,0,0-1.2183-4.3325A6.01,6.01,0,0,1,27.91,21Zm-7.8545,0A10.0135,10.0135,0,0,1,22,16.0146,10.0121,10.0121,0,0,1,23.9448,21Zm3.89,2A10.01,10.01,0,0,1,22,27.9854,10.0121,10.0121,0,0,1,20.0552,23Zm-4.6831-6.332A12.0265,12.0265,0,0,0,18.0435,21H16.09A6.01,6.01,0,0,1,19.2617,16.668ZM16.09,23h1.9532a12.0265,12.0265,0,0,0,1.2182,4.332A6.01,6.01,0,0,1,16.09,23Zm8.6482,4.332A12.0242,12.0242,0,0,0,25.9565,23H27.91A6.0088,6.0088,0,0,1,24.7385,27.332Z" /><path d="M6 14H12V16H6z" /><path d="M6 6H18V8H6z" /><path d="M6 10H18V12H6z" /><path d="M6 24H12V26H6z" /><path d="M12,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H20a2.0021,2.0021,0,0,1,2,2v8H20V4H4V28h8Z" /></svg>`;
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
