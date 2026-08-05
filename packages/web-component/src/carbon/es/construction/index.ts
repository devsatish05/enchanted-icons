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

export const ICON_NAME = `${ICON_PREFIX}icon-construction`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29.34,16.06a1.0007,1.0007,0,0,0-1.1084.3L24.46,20.8857l-5.4355-.9882-3.602-8.9512A3.014,3.014,0,0,0,12.6138,9h-4.06A3.0018,3.0018,0,0,0,7.01,9.4277L2,12.4336v6.4009l5,.9092V30H9V20.1074l3.5652.648L14,24.2V30h2V23.8l-1.0911-2.6182L22.99,22.6509,18.2319,28.36A1,1,0,0,0,19,30H29a1,1,0,0,0,1-1V17A1,1,0,0,0,29.34,16.06ZM4,17.1655V13.5664l3-1.8v5.9448Zm5,.9092V11h3.6138a1.0141,1.0141,0,0,1,.9453.6709l3.14,7.8037ZM28,28H21.1353L28,19.7617Z" /><path d="M12.5,8A3.5,3.5,0,1,1,16,4.5,3.5042,3.5042,0,0,1,12.5,8Zm0-5A1.5,1.5,0,1,0,14,4.5,1.5017,1.5017,0,0,0,12.5,3Z" /></svg>`;
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
