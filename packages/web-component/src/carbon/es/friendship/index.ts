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

export const ICON_NAME = `${ICON_PREFIX}icon-friendship`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25,10H7a3.0033,3.0033,0,0,0-3,3v6a2.0023,2.0023,0,0,0,2,2v7a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V16H12V28H8V19H6V13a1.0009,1.0009,0,0,1,1-1H25a1.0009,1.0009,0,0,1,1,1v6H24v9H20V16H18V28a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V21a2.0023,2.0023,0,0,0,2-2V13A3.0033,3.0033,0,0,0,25,10Z" /><path d="M10,9a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,10,9Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,10,3Z" /><path d="M22,9a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,22,9Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,22,3Z" /></svg>`;
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
