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

export const ICON_NAME = `${ICON_PREFIX}icon-load-balancer-network`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25,16H17V12H15v4H7a2.0023,2.0023,0,0,0-2,2v4H7V18h8v4h2V18h8v4h2V18A2.0023,2.0023,0,0,0,25,16Z" /><path d="M20,10V2H12v8h8ZM14,8V4h4V8Z" /><path d="M26,24a2.9948,2.9948,0,0,0-2.8157,2H18.8157a2.982,2.982,0,0,0-5.6314,0H8.8157a3,3,0,1,0,0,2h4.3686a2.982,2.982,0,0,0,5.6314,0h4.3686A2.9947,2.9947,0,1,0,26,24ZM6,28a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,6,28Zm10,0a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,16,28Zm10,0a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,26,28Z" /></svg>`;
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
