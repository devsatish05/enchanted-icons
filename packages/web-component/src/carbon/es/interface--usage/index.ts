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

export const ICON_NAME = `${ICON_PREFIX}icon-interface-usage`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m18.3242,11.7334v1.29h-1.3242v1.7368h1.3242v7.2397h2.2012v-7.2397h1.8398v-1.7368h-1.8398v-1.9951h1.8398v-1.7539h-1.5649c-1.6167,0-2.4761.877-2.4761,2.459Z" /><path stroke-width="0" d="M10 11.8193 11.582 11.8193 11.582 20.1772 10 20.1772 10 22 15.4516 22 15.4516 20.1772 13.8525 20.1772 13.8525 11.8193 15.4516 11.8193 15.4516 9.9966 10 9.9966 10 11.8193z" /><path stroke-width="0" d="m21,30h-10c-4.9626,0-9-4.0374-9-9v-10C2,6.0374,6.0374,2,11,2h10c4.9626,0,9,4.0374,9,9v10c0,4.9626-4.0374,9-9,9ZM11,4c-3.8599,0-7,3.1401-7,7v10c0,3.8599,3.1401,7,7,7h10c3.8599,0,7-3.1401,7-7v-10c0-3.8599-3.1401-7-7-7h-10Z" /></svg>`;
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
