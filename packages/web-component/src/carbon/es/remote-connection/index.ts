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

export const ICON_NAME = `${ICON_PREFIX}icon-remote-connection`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M21.5,12c-5.2,0-9.5,4.3-9.5,9.5v.5H4V6h24v6h2v-6c0-1.1-.9-2-2-2H4c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h8.3c.4,1.5,1.2,2.9,2.2,4h-6.6v2h9.3c1.3.6,2.7,1,4.2,1,5.2,0,9.5-4.3,9.5-9.5s-4.3-9.5-9.5-9.5h0ZM21.5,29c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5,7.5,3.4,7.5,7.5-3.4,7.5-7.5,7.5ZM18.7,24.7l-1.4-1.4,2.3-2.3-2.3-2.3,1.4-1.4,3.7,3.7s-3.7,3.7-3.7,3.7ZM26,25h-4v-2h4v2Z" /></svg>`;
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
