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

export const ICON_NAME = `${ICON_PREFIX}icon-product-categories`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28,30h-8c-1.1025,0-2-.8975-2-2v-10.5195c0-.6108.2734-1.1797.75-1.5615l4-3.1997c.7363-.5903,1.7637-.5889,2.5,0l4,3.1997c.4766.3818.75.9507.75,1.5615v10.5195c0,1.1025-.8975,2-2,2ZM24,14.2808l-4,3.1997v10.5195h8v-10.5195l-4-3.1997ZM15,28H4c-1.103,0-2-.8975-2-2V4c0-1.103.897-2,2-2h22c1.1025,0,2,.897,2,2v6h-2v-6h-6v6c0,1.103-.8975,2-2,2h-6c-1.103,0-2-.897-2-2v-6h-6v22h11v2ZM12,4v6h6v-6h-6ZM26,20c0-1.1046-.8954-2-2-2s-2,.8954-2,2,.8954,2,2,2,2-.8954,2-2Z" /></svg>`;
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
