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

export const ICON_NAME = `${ICON_PREFIX}icon-humidity-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,12a3.8978,3.8978,0,0,1-4-3.777,3.9017,3.9017,0,0,1,.6533-2.0639L25.17,2.4141a1.0381,1.0381,0,0,1,1.6592,0L29.3154,6.11A3.9693,3.9693,0,0,1,30,8.223,3.8978,3.8978,0,0,1,26,12Zm0-7.2368L24.3438,7.2257A1.89,1.89,0,0,0,24,8.223a2.0139,2.0139,0,0,0,4,0,1.98,1.98,0,0,0-.375-1.0466Z" /><path d="M23.5,30H8.5A6.4962,6.4962,0,0,1,7.2,17.1381a8.9938,8.9938,0,0,1,17.6006,0A6.4964,6.4964,0,0,1,23.5,30ZM16,12a7,7,0,0,0-6.9414,6.1452l-.0991.8122-.8155.064A4.4962,4.4962,0,0,0,8.5,28h15a4.4962,4.4962,0,0,0,.3564-8.9786l-.8154-.064-.0986-.8122A7.0022,7.0022,0,0,0,16,12Z" /></svg>`;
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
