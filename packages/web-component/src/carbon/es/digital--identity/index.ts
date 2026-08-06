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

export const ICON_NAME = `${ICON_PREFIX}icon-digital-identity`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M20,19v-1c0-1.7-1.3-3-3-3h-6c-1.7,0-3,1.3-3,3v7h2v-7c0-.5.4-1,1-1h6c.5,0,1,.5,1,1v1h2ZM10,10c0,2.2,1.8,4,4,4s4-1.8,4-4-1.8-4-4-4-4,1.8-4,4ZM16,10c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2ZM27,21c0,7.8-7.7,8-8,8v2c0,0,10-.2,10-10h-2ZM19,27c2.1,0,6-1.3,6-6h-2c0,3.9-3.6,4-4,4v2ZM5,3h18v16h2V3c0-1.1-.9-2-2-2H5c-1.1,0-2,.9-2,2v26c0,1.1.9,2,2,2h12v-2H5V3ZM20,21c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1Z" /></svg>`;
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
