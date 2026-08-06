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

export const ICON_NAME = `${ICON_PREFIX}icon-array-objects`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M10,7h3v2h-3v4c0,1.2002-.5425,2.2661-1.3823,3,.8398.7339,1.3823,1.7998,1.3823,3v4h3v2h-3c-1.103,0-2-.8975-2-2v-4c0-1.1025-.897-2-2-2v-2c1.103,0,2-.8975,2-2v-4c0-1.1025.897-2,2-2ZM24,13v-4c0-1.1025-.897-2-2-2h-3v2h3v4c0,1.2002.5425,2.2661,1.3823,3-.8398.7339-1.3823,1.7998-1.3823,3v4h-3v2h3c1.103,0,2-.8975,2-2v-4c0-1.1025.897-2,2-2v-2c-1.103,0-2-.8975-2-2ZM2,4v4h2v-4h4v-2h-4c-1.1046,0-2,.8954-2,2ZM28,2h-4v2h4v4h2v-4c0-1.1046-.8954-2-2-2ZM4,28v-4h-2v4c0,1.1046.8954,2,2,2h4v-2h-4ZM28,24v4h-4v2h4c1.1046,0,2-.8954,2-2v-4h-2Z" /></svg>`;
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
