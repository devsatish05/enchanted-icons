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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-quantum-safe-explorer`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M10,18h8v2h-8v-2ZM28,12.82v3.62c0,6.11-5.45,9.3-9.44,11.63-.72.42-1.41.82-2.02,1.22l-.54.35-.54-.35c-.61-.39-1.3-.79-2.02-1.22-3.98-2.33-9.44-5.52-9.44-11.63V4c0-1.1.9-2,2-2h21v2H6v9h6v2h-6v1.44c0,4.96,4.68,7.7,8.45,9.9.54.32,1.07.62,1.55.92.49-.3,1.01-.61,1.55-.92,2.75-1.6,5.97-3.5,7.52-6.33h-5.08v-2h5.83c.11-.5.17-1.01.17-1.56v-3.62c-1.16-.41-2-1.51-2-2.82,0-1.65,1.35-3,3-3s3,1.35,3,3c0,1.3-.84,2.4-2,2.82l.01-.01ZM28,10c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1ZM22,13h-8v2h8v-2ZM18,8h-8v2h8v-2Z" /></svg>`;
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
