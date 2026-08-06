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

export const ICON_NAME = `${ICON_PREFIX}icon-question-answering`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="M20 15.1798 17.41 12.59 16 14 20 18 26 12 24.59 10.59 20 15.1798z" /><path stroke-width="0" d="M8 18H10V20H8z" /><path stroke-width="0" d="m12,9h-5v2h4v2h-3v3h2v-1h2c.5522,0,1-.4478,1-1v-4c0-.5522-.4478-1-1-1Z" /><path stroke-width="0" d="m17.7358,30l-1.7358-1,4-7h6c1.1071,0,2-.8926,2-2v-12c0-1.1074-.8929-2-2-2H6c-1.1071,0-2,.8926-2,2v12c0,1.1074.8929,2,2,2h9v2H6c-2.2093,0-4-1.79-4-4v-12c0-2.2109,1.7907-4,4-4h20c2.2093,0,4,1.7891,4,4v12c0,2.21-1.7907,4-4,4h-4.8354l-3.4287,6Z" /></svg>`;
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
