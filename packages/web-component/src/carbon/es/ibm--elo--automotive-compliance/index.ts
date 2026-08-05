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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-elo-automotive-compliance`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m29.9467,13.9356h-2c-.7368,0-1.3748.4051-1.7218,1H6.0151l2.625-7h7.3073v-2h-7.3073c-.8291,0-1.5811.521-1.873,1.2974l-2.5137,6.7026-2.3066-.0005v2l2,.0002v9.0002c0,1.103.8975,2,2,2v3h2v-3h16v3h2v-3c1.1025,0,2-.897,2-2v-9h2v-2ZM5.9467,24.9356v-3h3v-2h-3v-3h20v3h-3v2h3v3H5.9467Z" /><path stroke-width="0" d="M11.979 19.941H19.979V21.941H11.979z" /><path stroke-width="0" d="M29.5367 2.5256 22.9467 9.1154 20.3567 6.5255 18.9467 7.9356 22.9467 11.9356 30.9467 3.9356 29.5367 2.5256z" /></svg>`;
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
