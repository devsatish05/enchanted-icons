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

export const ICON_NAME = `${ICON_PREFIX}icon-data-dictionary`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22,8h-8v2h8v-2ZM14,16h8v-2h-8v2ZM10,14h-2v-4h2v-2h-2v-4h18v12h2V4c0-1.1046-.8954-2-2-2H8c-1.1046,0-2,.8954-2,2v4h-2v2h2v4h-2v2h6v-2ZM4,20H1v10h3c1.6543,0,3-1.3457,3-3v-4c0-1.6543-1.3457-3-3-3ZM5,27c0,.5518-.4487,1-1,1h-1v-6h1c.5513,0,1,.4482,1,1v4ZM17,22v6c0,1.1025.8975,2,2,2h4v-2h-4v-6h4v-2h-4c-1.1025,0-2,.8975-2,2ZM9,22h2v6h-2v2h6v-2h-2v-6h2v-2h-6v2ZM25,20v2h2v8h2v-8h2v-2h-6Z" /></svg>`;
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
