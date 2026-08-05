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

export const ICON_NAME = `${ICON_PREFIX}icon-strategy-play`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="M12 3.415 10.586 2 7 5.587 3.414 2 2 3.415 5.586 7 2 10.586 3.414 12 7 8.414 10.586 12 12 10.586 8.414 7 12 3.415z" /><path stroke-width="0" d="m25,2l-5,5,1.4089,1.4189,2.5911-2.625v9.2061H8c-1.1028,0-2,.8975-2,2v3.1011c-2.2793.4644-4,2.4844-4,4.8989,0,2.7568,2.2429,5,5,5s5-2.2432,5-5c0-2.4146-1.7207-4.4346-4-4.8989v-3.1011h16c1.1028,0,2-.8975,2-2V5.8472l2.5911,2.5718,1.4089-1.4189-5-5Zm-15,23c0,1.6543-1.3457,3-3,3s-3-1.3457-3-3,1.3457-3,3-3,3,1.3457,3,3Z" /><path stroke-width="0" d="M30 21.415 28.586 20 25 23.587 21.414 20 20 21.415 23.586 25 20 28.586 21.414 30 25 26.414 28.586 30 30 28.586 26.414 25 30 21.415z" /></svg>`;
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
