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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-engineering-systems-design-rhapsody`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m4,10h4c1.1046,0,2-.8954,2-2v-4c0-1.1046-.8954-2-2-2h-4c-1.1046,0-2,.8954-2,2v4c0,1.1046.8954,2,2,2Zm0-6h4v4h-4v-4Z" /><path stroke-width="0" d="m28,22h-4c-1.1046,0-2,.8954-2,2v4c0,1.1046.8954,2,2,2h4c1.1046,0,2-.8954,2-2v-4c0-1.1046-.8954-2-2-2Zm0,6h-4v-4h4v4Z" /><path stroke-width="0" d="m21.414,12.586l-1.414,1.414,6,6,6-6-1.414-1.414-3.586,3.586V7c0-1.1046-.8954-2-2-2h-13v2h13v9.172l-3.586-3.586Z" /><path stroke-width="0" d="m7,15.828l3.586,3.586,1.414-1.414-6-6L0,18l1.414,1.414,3.586-3.586v9.172c0,1.1046.8954,2,2,2h13v-2H7v-9.172Z" /></svg>`;
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
