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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-cloud-security`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,23h-8c-2.21,0-4-1.79-4-4,0-1.85,1.28-3.46,3.08-3.89.42-2.33,2.47-4.11,4.92-4.11s4.5,1.77,4.92,4.11c1.8.43,3.08,2.04,3.08,3.89,0,2.21-1.79,4-4,4ZM18,21h8c1.1,0,2-.9,2-2s-.9-2-2-2h-1v-1c0-1.65-1.35-3-3-3s-3,1.35-3,3v1h-1c-1.1,0-2,.9-2,2s.9,2,2,2ZM24,2H6c-1.1,0-2,.9-2,2v14.3c0,3.9,2.1,7.5,5.5,9.5l5.5,3.2,5.4-3.2c.5-.29.97-.62,1.42-.98l-1.37-1.37c-.3.23-.62.45-.94.66l-4.5,2.7-4.5-2.7c-2.8-1.6-4.5-4.6-4.5-7.8V4h18v5h2v-5c0-1.1-.9-2-2-2h-.01Z" /></svg>`;
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
