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

export const ICON_NAME = `${ICON_PREFIX}icon-emissions-management`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M4,2h-2v26c0,1.1046.8954,2,2,2h11v-2H4V2ZM23,4v2h3.5859l-7.5859,7.5859-4.293-4.293c-.3905-.3905-1.0236-.3905-1.4141,0l-7.293,7.293,1.4141,1.4141,6.5859-6.5859,4.293,4.293c.3905.3904,1.0236.3904,1.4141,0l8.293-8.293v3.5859h2v-7s-7,0-7,0ZM22.48,20.863c-.682-.54-1.544-.863-2.48-.863h-3v3c0,2.206,1.794,4,4,4h1v3h2v-3h1c2.757,0,5-2.243,5-5v-4h-3c-1.933.0016-3.6925,1.116-4.52,2.863ZM22,25h-1c-1.103,0-2-.897-2-2v-1h1c1.103,0,2,.897,2,2v1ZM28,22c0,1.654-1.346,3-3,3h-1v-2c0-1.654,1.346-3,3-3h1v2Z" /></svg>`;
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
