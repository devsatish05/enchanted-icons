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

export const ICON_NAME = `${ICON_PREFIX}icon-rag`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m12,28h-2c-3.8599,0-7-3.1401-7-7v-2h2v2c0,2.7568,2.2432,5,5,5h2v2Z" /><path stroke-width="0" d="m28,19h-9c-1.104.0014-1.9986.896-2,2v5c0,1.1046.8954,2,2,2h3v-2h-3v-5h9v5h-2.5352l-2.5937,3.8906,1.6641,1.1094,2-3h1.4648c1.1046,0,2-.8954,2-2v-5c-.0014-1.104-.896-1.9986-2-2Z" /><path stroke-width="0" d="m29,15v-4c0-3.8599-3.1401-7-7-7h-3v2h3c2.7568,0,5,2.2432,5,5v4h2Z" /><path stroke-width="0" d="M6 10H9V12H6z" /><path stroke-width="0" d="m12.606,6.4355l-2.5251-3.6855c-.3821-.4766-.9512-.75-1.5615-.75h-4.5193c-1.1028,0-2,.8975-2,2v10c0,1.1025.8972,2,2,2h7c1.1028,0,2-.8975,2-2v-6.375c0-.4526-.1558-.8965-.394-1.1895Zm-8.606,7.5645V4h4v3c0,.5522.4478,1,1,1h2v6h-7Z" /></svg>`;
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
