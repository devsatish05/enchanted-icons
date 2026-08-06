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

export const ICON_NAME = `${ICON_PREFIX}icon-pricing-consumption`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m16,2v2c6.63,0,12,5.37,12,12s-5.37,12-12,12v2c7.73,0,14-6.27,14-14S23.73,2,16,2Z" /><path stroke-width="0" d="m8.24,25.14l-1.29,1.53c1.23,1.04,2.64,1.87,4.18,2.44l.68-1.88c-1.32-.49-2.53-1.2-3.58-2.09h.01Z" /><path stroke-width="0" d="m4.19,18l-1.97.41c.28,1.63.84,3.16,1.64,4.54l1.73-.95c-.68-1.18-1.16-2.61-1.4-4Z" /><path stroke-width="0" d="m5.59,10l-1.73-1c-.79,1.38-1.35,2.96-1.64,4.59l1.97.35c.24-1.39.72-2.75,1.4-3.93v-.01Z" /><path stroke-width="0" d="m11.82,4.76l-.68-1.88c-1.54.57-2.95,1.4-4.18,2.44l1.29,1.53c1.05-.89,2.26-1.6,3.58-2.09h-.01Z" /><path stroke-width="0" d="m21,12v-2h-4v-3h-2v3h-2c-1.103,0-2,.897-2,2v3c0,1.103.897,2,2,2h6v3h-8v2h4v3h2v-3h2c1.103,0,2-.8975,2-2v-3c0-1.103-.897-2-2-2h-6v-3h8Z" /></svg>`;
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
