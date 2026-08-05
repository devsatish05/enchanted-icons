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

export const ICON_NAME = `${ICON_PREFIX}icon-swimlane-d-vertical`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25,26h2v4h-4v-2h2v-2ZM17,30h4v-2h-4v2ZM7,26h-2v4h4v-2h-2v-2ZM7,19.9995h-2v4.0005h2v-4.0005ZM7,14h-2v4h2v-4ZM5,8v3.9995h2v-1.9995h2v-2h-4ZM5,6h2v-2h2v-2h-4v4ZM17,4h4v-2h-4v2ZM11,4h4v-2h-4v2ZM23,2v2h2v2h2V2h-4ZM25,24h2v-3.9995h-2v3.9995ZM25,18h2v-4h-2v4ZM17,10h4v-2h-4v2ZM11,10h4v-2h-4v2ZM23,8v2h2v2h2v-4h-4ZM11,30h4v-2h-4v2Z" /></svg>`;
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
