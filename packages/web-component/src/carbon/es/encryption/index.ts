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

export const ICON_NAME = `${ICON_PREFIX}icon-encryption`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29,21.2783V19a4,4,0,0,0-8,0v2.2783A1.9935,1.9935,0,0,0,20,23v5a2.0025,2.0025,0,0,0,2,2h6a2.0025,2.0025,0,0,0,2-2V23A1.9935,1.9935,0,0,0,29,21.2783ZM25,17a2.0025,2.0025,0,0,1,2,2v2H23V19A2.0025,2.0025,0,0,1,25,17ZM22,28V23h6v5Z" /><path d="M2 2H4V6H2z" /><path d="M14 2H16V6H14z" /><path d="M18 2H20V6H18z" /><path d="M2 8H4V16H2z" /><path d="M2 18H4V26H2z" /><path d="M14 18H16V26H14z" /><path d="M6 8H8V16H6z" /><path d="M18 8H20V14H18z" /><path d="M10,26H8a2.0023,2.0023,0,0,1-2-2V20a2.0023,2.0023,0,0,1,2-2h2a2.0023,2.0023,0,0,1,2,2v4A2.0023,2.0023,0,0,1,10,26ZM8,20v4h2V20Z" /><path d="M14,16H12a2.0023,2.0023,0,0,1-2-2V10a2.0023,2.0023,0,0,1,2-2h2a2.0023,2.0023,0,0,1,2,2v4A2.0023,2.0023,0,0,1,14,16Zm-2-6v4h2V10Z" /><path d="M10,6H8A2.0023,2.0023,0,0,1,6,4V2H8V4h2V2h2V4A2.0023,2.0023,0,0,1,10,6Z" /></svg>`;
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
