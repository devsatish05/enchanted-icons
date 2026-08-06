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

export const ICON_NAME = `${ICON_PREFIX}icon-subject-definition`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m22.7749,20.5022h-.0862c-.3101.8959-1.0334,1.7056-2.5151,1.7056-1.8433,0-2.877-1.2749-2.877-3.5144v-5.6849h2.2051v5.4609c0,1.2404.4651,1.9122,1.5161,1.9122.8784,0,1.7571-.4651,1.7571-1.4298v-5.9434h2.2051v8.9926h-2.2051v-1.4988Z" /><path stroke-width="0" d="m6.6195,20.2094l1.5332-1.4816c.8269.9647,1.8433,1.4816,3.0837,1.4816,1.3953,0,2.1189-.6719,2.1189-1.6882,0-.8097-.3789-1.3093-1.6367-1.5332l-1.137-.1724c-2.429-.3789-3.6003-1.5332-3.6003-3.4971,0-2.1534,1.6709-3.5488,4.3584-3.5488,1.8088,0,3.1526.6202,4.1172,1.7744l-1.5503,1.4644c-.5857-.7408-1.4126-1.2404-2.6875-1.2404-1.292,0-1.9639.5168-1.9639,1.4126,0,.9131.5168,1.292,1.6711,1.4988l1.1196.2067c2.429.4308,3.5662,1.516,3.5662,3.4972,0,2.2739-1.6367,3.8245-4.5137,3.8245-2.05,0-3.4626-.8097-4.479-1.9984Z" /><path stroke-width="0" d="m28,30H4c-1.1046,0-2-.8954-2-2V4c0-1.1046.8954-2,2-2h24c1.1046,0,2,.8954,2,2v24c0,1.1046-.8954,2-2,2Zm-24-2h24V4H4v24Z" /></svg>`;
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
