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

export const ICON_NAME = `${ICON_PREFIX}icon-if-action`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M21,2h-10C6,2,2,6,2,11v10c0,5,4,9,9,9h10c5,0,9-4,9-9v-10c0-5-4-9-9-9ZM28,21c0,3.9-3.1,7-7,7h-10c-3.9,0-7-3.1-7-7v-10c0-3.9,3.1-7,7-7h10c3.9,0,7,3.1,7,7v10ZM9.8755,22v-1.8232h1.582v-8.3574h-1.582v-1.8223h5.4512v1.8223h-1.5991v8.3574h1.5991v1.8232h-5.4512ZM17.959,14.7363h-1.3242v-1.7363h1.3242v-1.2666c0-1.582.8599-2.459,2.4761-2.459h1.5649v1.7539h-1.8398v1.9717h1.8398v1.7363h-1.8398v7.2637h-2.2012v-7.2637Z" /></svg>`;
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
