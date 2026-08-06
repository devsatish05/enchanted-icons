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

export const ICON_NAME = `${ICON_PREFIX}icon-facility-group`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,2c-4.34,0-7.94,3.22-8.55,7.39-2.72,1.42-4.45,4.25-4.45,7.34,0,1.79.6,3.57,1.69,5.01.06.08.19.24.25.32l6.35,7.49,3.31-3.9-1.53-1.29-1.78,2.1-4.81-5.67-.19-.25c-.83-1.1-1.29-2.45-1.29-3.81,0-1.96.92-3.79,2.43-4.96.2,1.47.79,2.89,1.7,4.1.06.08.19.24.25.32l6.62,7.8,1.3-1.54-6.38-7.53-.2-.27c-.8799-1.16-1.36-2.58-1.36-4.0099,0-3.66,2.98-6.64,6.64-6.64,3.09,0,5.7,2.13,6.43,5h2.05c-.77-3.98-4.28-7-8.48-7ZM22,12c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4ZM22,18c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2ZM16,11c-1.1046,0-2-.8954-2-2s.8954-2,2-2,2,.8954,2,2-.8954,2-2,2Z" /></svg>`;
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
