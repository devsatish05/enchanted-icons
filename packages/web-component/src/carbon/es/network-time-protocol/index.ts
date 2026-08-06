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

export const ICON_NAME = `${ICON_PREFIX}icon-network-time-protocol`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M18.8,27c-.3-.9-1-1.5-1.8-1.8v-3.2c5-.5,9-4.8,9-9.9S21.5,2.1,16,2.1,6,6.5,6,12s3.9,9.5,9,10v3.2c-.9.3-1.5,1-1.8,1.8H4v2h9.2c.4,1.2,1.5,2,2.8,2s2.4-.8,2.8-2h9.2v-2h-9.2ZM8,12c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8ZM16,29c-.6,0-1-.5-1-1s.4-1,1-1,1,.5,1,1-.5,1-1,1ZM19.3,16.7l-4.3-4.3v-6.4h2v5.6l3.7,3.7s-1.4,1.4-1.4,1.4Z" /></svg>`;
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
