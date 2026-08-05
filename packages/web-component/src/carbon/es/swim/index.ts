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

export const ICON_NAME = `${ICON_PREFIX}icon-swim`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,26H28a4.9316,4.9316,0,0,1-4-1.9873,5.0192,5.0192,0,0,1-8,0,5.0192,5.0192,0,0,1-8,0A4.9316,4.9316,0,0,1,4,26H2V24H4a3.44,3.44,0,0,0,3.0532-2.3215A.9712.9712,0,0,1,8,21a1.0069,1.0069,0,0,1,.9487.6838A3.4381,3.4381,0,0,0,12,24a3.44,3.44,0,0,0,3.0532-2.3215A.99.99,0,0,1,16,21a1.0069,1.0069,0,0,1,.9487.6838A3.4381,3.4381,0,0,0,20,24a3.44,3.44,0,0,0,3.0532-2.3215,1,1,0,0,1,1.8955.0053A3.4381,3.4381,0,0,0,28,24h2Z" /><path d="M23,17.5859l-8.707-8.707A2.9791,2.9791,0,0,0,12.1714,8H4v2h8.1714a.9933.9933,0,0,1,.7075.293L15.5859,13,10,18.5859,11.4141,20,17,14.4141,21.5859,19Z" /><path d="M20,10a4,4,0,1,1,4,4A4.0042,4.0042,0,0,1,20,10Zm2,0a2,2,0,1,0,2-2A2.0023,2.0023,0,0,0,22,10Z" /></svg>`;
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
