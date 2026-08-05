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

export const ICON_NAME = `${ICON_PREFIX}icon-load-balancer-vpc`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M8,30H2V24H8ZM4,28H6V26H4Z" /><path d="M19,30H13V24h6Zm-4-2h2V26H15Z" /><path d="M30,30H24V24h6Zm-4-2h2V26H26Z" /><path d="M16,10a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,10Zm0-6a2,2,0,1,0,2,2A2.002,2.002,0,0,0,16,4Z" /><path d="M26,16H21a4.0045,4.0045,0,0,1-4-4H15a4.0045,4.0045,0,0,1-4,4H6a2.0023,2.0023,0,0,0-2,2v4H6V18h5A5.9694,5.9694,0,0,0,15,16.46V22h2V16.46A5.9694,5.9694,0,0,0,21,18h5v4h2V18A2.0023,2.0023,0,0,0,26,16Z" /></svg>`;
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
