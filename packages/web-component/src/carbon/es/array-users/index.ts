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

export const ICON_NAME = `${ICON_PREFIX}icon-array-users`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M4,24h-2v4c0,1.105.895,2,2,2h4v-2h-4v-4ZM2,4v4h2v-4h4v-2h-4c-1.105,0-2,.895-2,2ZM28,2h-4v2h4v4h2v-4c0-1.105-.895-2-2-2ZM28,28h-4v2h4c1.105,0,2-.895,2-2v-4h-2v4ZM16,16c2.761,0,5-2.239,5-5s-2.239-5-5-5-5,2.239-5,5,2.239,5,5,5ZM15.899,8h.101c1.657,0,3,1.343,3,3s-1.343,3-3,3-3-1.343-3-3c-.028-1.629,1.27-2.972,2.899-3ZM18,18h-4c-2.761,0-5,2.239-5,5v3h2v-3c0-1.657,1.343-3,3-3h4c1.657,0,3,1.343,3,3v3h2v-3c0-2.761-2.239-5-5-5Z" /></svg>`;
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
