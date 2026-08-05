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

export const ICON_NAME = `${ICON_PREFIX}icon-chart-donut`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,4.0194c-6.6167,0-12,5.3833-12,12s5.3833,12,12,12,12-5.3833,12-12-5.3833-12-12-12ZM11,16.0194c0-2.7568,2.2432-5,5-5s5,2.2432,5,5-2.2432,5-5,5-5-2.2432-5-5ZM6,16.0194c0-5.1766,3.9537-9.4459,9-9.9493v3.0292c-3.3866.4878-6,3.4006-6,6.9202,0,1.5647.5223,3.0061,1.393,4.1729l-2.14,2.14c-1.4066-1.723-2.2531-3.9203-2.2531-6.3129h.0001ZM16,26.0194c-2.4028,0-4.6096-.8528-6.3358-2.2703l2.14-2.1399c1.1708.8811,2.6209,1.4102,4.1958,1.4102,3.8599,0,7-3.1401,7-7,0-3.5195-2.6134-6.4324-6-6.9202v-3.0292c5.0463.5034,9,4.7727,9,9.9493,0,5.5142-4.4858,10-10,10h0Z" /></svg>`;
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
