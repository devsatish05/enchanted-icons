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

export const ICON_NAME = `${ICON_PREFIX}icon-accumulation-precipitation`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16 16H18V18H16z" /><path d="M18 18H20V20H18z" /><path d="M20 20H22V22H20z" /><path d="M20 16H22V18H20z" /><path d="M16 20H18V22H16z" /><path d="M20,12a3.8978,3.8978,0,0,1-4-3.777,3.9017,3.9017,0,0,1,.6533-2.0639L19.17,2.4141a1.0381,1.0381,0,0,1,1.6592,0L23.3154,6.11A3.9693,3.9693,0,0,1,24,8.223,3.8978,3.8978,0,0,1,20,12Zm0-7.2368L18.3438,7.2257A1.89,1.89,0,0,0,18,8.223,1.9,1.9,0,0,0,20,10a1.9,1.9,0,0,0,2-1.777,1.98,1.98,0,0,0-.375-1.0466Z" /><path d="M28,4a2.0023,2.0023,0,0,0-2,2V26H6V10H8v8l1,2,1-2V10h2v4l1,2,1-2V8H6V6A2.0023,2.0023,0,0,0,4,4H2V6H4V26a2.0023,2.0023,0,0,0,2,2H26a2.0023,2.0023,0,0,0,2-2V6h2V4Z" /></svg>`;
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
