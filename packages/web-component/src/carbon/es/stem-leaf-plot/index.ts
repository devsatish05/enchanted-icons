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

export const ICON_NAME = `${ICON_PREFIX}icon-stem-leaf-plot`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M19,10a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,19,10Zm0-4a1,1,0,1,0,1,1A1.0011,1.0011,0,0,0,19,6Z" /><path d="M19,19a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,19,19Zm0-4a1,1,0,1,0,1,1A1.0011,1.0011,0,0,0,19,15Z" /><path d="M27,19a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,27,19Zm0-4a1,1,0,1,0,1,1A1.0011,1.0011,0,0,0,27,15Z" /><path d="M19,28a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,19,28Zm0-4a1,1,0,1,0,1,1A1.0011,1.0011,0,0,0,19,24Z" /><path d="M12 2H14V30H12z" /><path d="M7,28a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,7,28Zm0-4a1,1,0,1,0,1,1A1.0011,1.0011,0,0,0,7,24Z" /><path d="M7,19a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,7,19Zm0-4a1,1,0,1,0,1,1A1.0011,1.0011,0,0,0,7,15Z" /><path d="M7,10a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,7,10ZM7,6A1,1,0,1,0,8,7,1.0011,1.0011,0,0,0,7,6Z" /></svg>`;
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
