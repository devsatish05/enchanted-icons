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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-quantum-safe-advisor`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,16.44c0,4.96-4.68,7.7-8.45,9.9-.54.32-1.07.62-1.55.92-.49-.3-1.01-.61-1.55-.92-3.76-2.2-8.45-4.94-8.45-9.9V4h21v-2H6c-1.1,0-2,.9-2,2v12.44c0,6.11,5.45,9.3,9.44,11.63.72.42,1.41.82,2.02,1.22l.54.35.54-.35c.61-.39,1.3-.79,2.02-1.22,3.98-2.33,9.44-5.52,9.44-11.63v-3.62c1.16-.41,2-1.51,2-2.82,0-1.65-1.35-3-3-3s-3,1.35-3,3c0,1.3.84,2.4,2,2.82v3.62ZM27,11c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1ZM21,9h-8v-2h8v2ZM21,21h-8v-2h8v2ZM15,13h8v1.99h-8v-1.99ZM9.71,17.71l-1.41-1.41,2.29-2.29-2.29-2.29,1.41-1.41,3.71,3.71-3.71,3.71v-.02Z" /></svg>`;
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
