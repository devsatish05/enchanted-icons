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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-engineering-systems-design-rhapsody-model-manager`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m27,30h-8c-2.2061,0-4-1.7939-4-4,0-1.8887,1.3164-3.4766,3.0801-3.8936.4219-2.332,2.4678-4.1064,4.9199-4.1064s4.498,1.7744,4.9199,4.1064c1.7637.417,3.0801,2.0049,3.0801,3.8936,0,2.2061-1.7939,4-4,4Zm-8-2h8c1.1025,0,2-.8975,2-2s-.8975-2-2-2h-1v-1c0-1.6543-1.3457-3-3-3s-3,1.3457-3,3v1h-1c-1.1025,0-2,.8975-2,2s.8975,2,2,2Z" /><path stroke-width="0" d="m12,27h-2c-3.8599,0-7-3.1401-7-7v-2h2v2c0,2.7568,2.2432,5,5,5h2v2Z" /><path stroke-width="0" d="m27,15v-4c0-3.8599-3.1401-7-7-7h-7v2h7c2.7568,0,5,2.2432,5,5v4h2Z" /><path stroke-width="0" d="m10,8V4c0-1.1046-.8954-2-2-2H2v13h2v-5h1.48l2.34,5h2.18l-2.33-5h.33c1.1046,0,2-.8954,2-2ZM4,4h4v4h-4V4Z" /></svg>`;
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
