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

export const ICON_NAME = `${ICON_PREFIX}icon-firewall-classic`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28,20V17a4,4,0,0,0-8,0v3a2.0023,2.0023,0,0,0-2,2v6a2.0023,2.0023,0,0,0,2,2h8a2.0023,2.0023,0,0,0,2-2V22A2.0023,2.0023,0,0,0,28,20Zm-6-3a2,2,0,0,1,4,0v3H22Zm6,11H20V22h8Z" /><path d="M15,27H4a2,2,0,0,1-2-2V22a2,2,0,0,1,2-2H15v2H4v3H15Z" /><path d="M17,18H8a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2H19v2H8v3h9Z" /><path d="M22,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H22a2,2,0,0,1,2,2V7A2,2,0,0,1,22,9ZM4,7H22V4H4Z" /></svg>`;
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
