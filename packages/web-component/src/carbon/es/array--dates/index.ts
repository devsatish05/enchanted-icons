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

export const ICON_NAME = `${ICON_PREFIX}icon-array-dates`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M23,8h-2v-2h-2v2h-6v-2h-2v2h-2c-1.1047,0-2,.8953-2,2v12c0,1.1047.8953,2,2,2h14c1.1047,0,2-.8953,2-2v-12c0-1.1047-.8953-2-2-2ZM9,22v-7h14v7h-14ZM22.9999,13h-13.9999v-3h2v1h2v-1h6v1h2v-1h2v3ZM4,2h4v2h-4v4h-2v-4c0-1.1046.8954-2,2-2ZM30,4v4h-2v-4h-4v-2h4c1.1046,0,2,.8954,2,2ZM8,28v2h-4c-1.1046,0-2-.8954-2-2v-4h2v4h4ZM30,24v4c0,1.1046-.8954,2-2,2h-4v-2h4v-4h2Z" /></svg>`;
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
