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

export const ICON_NAME = `${ICON_PREFIX}icon-array-date-time`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M20,14c-3.3137,0-6,2.6863-6,6s2.6863,6,6,6,6-2.6863,6-6-2.6863-6-6-6ZM21.5859,23l-2.5859-2.5854v-4.4143h2v3.5857l2,2-1.4141,1.4141ZM8,9h3v2.0001h2v-2.0001h6v2.0001h2v-2.0001h3v4h2v-4c0-1.1-.9-2-2-2h-3v-2h-2v2h-6v-2h-2v2h-3c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h4v-2h-4v-14ZM4,24h-2v4c0,1.1.9,2,2,2h4v-2h-4v-4ZM28,28h-4v2h4c1.1,0,2-.9,2-2v-4h-2v4ZM4,4h4v-2h-4c-1.1,0-2,.9-2,2v4h2v-4ZM28,2h-4v2h4v4h2v-4c0-1.1-.9-2-2-2Z" /></svg>`;
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
