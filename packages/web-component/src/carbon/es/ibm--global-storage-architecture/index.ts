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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-global-storage-architecture`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,26c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2ZM5,26c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2ZM27,26c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2ZM6,24v-3h9v3h2v-3h9v3h2v-3c0-1.1-.9-2-2-2h-9v-3h-2v3H6c-1.1,0-2,.9-2,2v3h2ZM21.7,6.1c-.8-2.4-3.1-4.1-5.7-4.1s-4.9,1.7-5.7,4.1c-1.9.3-3.3,1.9-3.3,3.9s1.8,4,4,4h10c2.2,0,4-1.8,4-4s-1.4-3.6-3.3-3.9ZM21,12h-10c-1.1,0-2-.9-2-2s.9-2,2-2h1c0-2.2,1.8-4,4-4s4,1.8,4,4h1c1.1,0,2,.9,2,2s-.9,2-2,2Z" /></svg>`;
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
