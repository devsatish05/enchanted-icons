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

export const ICON_NAME = `${ICON_PREFIX}icon-cafe`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M2 28H30V30H2z" /><path d="M24.5,11H8a2.002,2.002,0,0,0-2,2v8a5.0059,5.0059,0,0,0,5,5h8a5.0059,5.0059,0,0,0,5-5V20h.5a4.5,4.5,0,0,0,0-9ZM22,21a3.0033,3.0033,0,0,1-3,3H11a3.0033,3.0033,0,0,1-3-3V13H22Zm2.5-3H24V13h.5a2.5,2.5,0,0,1,0,5Z" /><path d="M19,9H17V8.854a1.9883,1.9883,0,0,0-1.1055-1.7886L13.2109,5.7236A3.9788,3.9788,0,0,1,11,2.146V1h2V2.146a1.9892,1.9892,0,0,0,1.1055,1.7886l2.6836,1.3418A3.9792,3.9792,0,0,1,19,8.854Z" /></svg>`;
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
