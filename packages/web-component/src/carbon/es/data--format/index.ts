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

export const ICON_NAME = `${ICON_PREFIX}icon-data-format`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M18 11H26V13H18z" /><path d="M6 19H14V21H6z" /><path d="M10,16a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,10,16Zm0-6a2,2,0,1,0,2,2A2.002,2.002,0,0,0,10,10Z" /><path d="M22,24a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,24Zm0-6a2,2,0,1,0,2,2A2.002,2.002,0,0,0,22,18Z" /><path d="M28,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30ZM4,4V28H28V4Z" /></svg>`;
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
