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

export const ICON_NAME = `${ICON_PREFIX}icon-group-access`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M8,19H6V17a3.0033,3.0033,0,0,1,3-3h5v2H9a1.0011,1.0011,0,0,0-1,1Z" /><path d="M12,13a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,12,13Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,12,7Z" /><path d="M20,20a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,20,20Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,20,14Z" /><path d="M26,26H24V24a1.0011,1.0011,0,0,0-1-1H17a1.0011,1.0011,0,0,0-1,1v2H14V24a3.0033,3.0033,0,0,1,3-3h6a3.0033,3.0033,0,0,1,3,3Z" /><path d="M8,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H8V4H4V28H8Z" /><path d="M28,30H24V28h4V4H24V2h4a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30Z" /></svg>`;
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
