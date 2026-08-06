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

export const ICON_NAME = `${ICON_PREFIX}icon-traffic-weather-incident`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M2 24H4V30H2z" /><path d="M28 2H30V30H28z" /><path d="M15 2H17V6H15z" /><path d="M15 10H17V14H15z" /><path d="M15 18H17V22H15z" /><path d="M15 26H17V30H15z" /><path d="M6,12A3.8978,3.8978,0,0,1,2,8.223a3.9017,3.9017,0,0,1,.6533-2.0639L5.17,2.4141a1.0381,1.0381,0,0,1,1.6592,0L9.3154,6.11A3.9693,3.9693,0,0,1,10,8.223,3.8978,3.8978,0,0,1,6,12Zm0-7.2368L4.3438,7.2257A1.89,1.89,0,0,0,4,8.223a1.9007,1.9007,0,0,0,2,1.7775A1.9007,1.9007,0,0,0,8,8.223a1.98,1.98,0,0,0-.375-1.0466Z" /><path d="M11,11.7627,9.3438,14.2253A1.89,1.89,0,0,0,9,15.2226,1.9007,1.9007,0,0,0,11,17a1.9007,1.9007,0,0,0,2-1.7774,1.98,1.98,0,0,0-.375-1.0467Z" /><path d="M6,15.7627,4.3438,18.2253A1.89,1.89,0,0,0,4,19.2226,1.9007,1.9007,0,0,0,6,21a1.9007,1.9007,0,0,0,2-1.7774,1.98,1.98,0,0,0-.375-1.0467Z" /></svg>`;
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
