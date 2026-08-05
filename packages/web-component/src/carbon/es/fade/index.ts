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

export const ICON_NAME = `${ICON_PREFIX}icon-fade`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M8.24,25.14,7,26.67a13.79,13.79,0,0,0,4.18,2.44l.69-1.87A12,12,0,0,1,8.24,25.14Z" /><path d="M4.19,18l-2,.41A14.09,14.09,0,0,0,3.86,23L5.59,22A12.44,12.44,0,0,1,4.19,18Z" /><path d="M11.82,4.76l-.69-1.87A13.79,13.79,0,0,0,7,5.33L8.24,6.86A12,12,0,0,1,11.82,4.76Z" /><path d="M5.59,10,3.86,9a14.37,14.37,0,0,0-1.64,4.59l2,.34A12.05,12.05,0,0,1,5.59,10Z" /><path d="M16,2V4a12,12,0,0,1,0,24v2A14,14,0,0,0,16,2Z" /></svg>`;
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
