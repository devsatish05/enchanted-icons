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

export const ICON_NAME = `${ICON_PREFIX}icon-weather-front-cold`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28.1655,2a13.0289,13.0289,0,0,0-12.542,9.5791l-1.1767,4.3154A11.0237,11.0237,0,0,1,3.8345,24H2v2H3.8345c.2975,0,.5918-.0171.8853-.0371l7.9291,2.9736A1,1,0,0,0,14,28V21.0923a12.9311,12.9311,0,0,0,.9121-1.313l6.3628-1.8179a1,1,0,0,0,.5059-1.5864L17.7843,11.38a10.9268,10.9268,0,0,1,1.1516-2.3472l5.7477,1.916A1,1,0,0,0,26,10V4.2251A10.8956,10.8956,0,0,1,28.1655,4H30V2ZM8.3354,25.1826A13.047,13.047,0,0,0,12,23.0943v3.4624Zm7.74-7.8154c.1107-.3105.2136-.625.3013-.9463l.732-2.6846L19.28,16.4512ZM24,8.6123l-3.7411-1.247A11.0712,11.0712,0,0,1,24,4.8306Z" /><path d="M10 4 10 8.586 3.414 2 2 3.414 8.586 10 4 10 4 12 12 12 12 4 10 4z" /></svg>`;
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
