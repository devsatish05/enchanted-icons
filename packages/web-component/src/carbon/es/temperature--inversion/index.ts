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

export const ICON_NAME = `${ICON_PREFIX}icon-temperature-inversion`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,8H24v6h2V11.541A5.939,5.939,0,0,1,28,16a6.0039,6.0039,0,0,1-5.0945,5.9243A7.0273,7.0273,0,0,0,20,17.2617V6a4,4,0,0,0-8,0V17.2617a6.996,6.996,0,1,0,10.9292,6.68A7.9794,7.9794,0,0,0,27.2651,10H30ZM14,6a2,2,0,0,1,4,0v7H14Zm2,22a4.9965,4.9965,0,0,1-2.499-9.3252L14,18.3857V15h4v3.3857l.499.2891A4.9965,4.9965,0,0,1,16,28Z" /><path d="M2,10a8.04,8.04,0,0,0,2.7349,6H2v2H8V12H6v2.4592A5.94,5.94,0,0,1,4,10a6.0066,6.0066,0,0,1,6-6V2A8.0092,8.0092,0,0,0,2,10Z" /></svg>`;
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
