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

export const ICON_NAME = `${ICON_PREFIX}icon-pricing-container`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m28,2h-5v2h5v24h-5v2h5c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2Z" /><path stroke-width="0" d="m23,20.52c0-4.62-3.78-5.14-6.82-5.56-3.31-.46-5.18-.86-5.18-3.71,0-2.39,2.51-3.24,4.65-3.24,2.32,0,4.14.86,5.57,2.63l1.56-1.26c-1.52-1.88-3.46-2.97-5.78-3.28v-3.1h-2v3.02c-3.62.22-6,2.26-6,5.22,0,4.73,3.83,5.26,6.91,5.69,3.25.45,5.09.84,5.09,3.58,0,3.03-3.13,3.48-5,3.48-3.43,0-4.88-.96-6.22-2.63l-1.56,1.26c1.77,2.19,3.73,3.17,6.78,3.34v3.04h2v-3.04c3.73-.3,6-2.33,6-5.44Z" /><path stroke-width="0" d="m4,4h5V2H4c-1.1,0-2,.9-2,2v24c0,1.1.9,2,2,2h5v-2H4V4Z" /></svg>`;
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
