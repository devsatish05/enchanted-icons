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

export const ICON_NAME = `${ICON_PREFIX}icon-punctuation-check`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M23,27.1781l-2.59-2.59-1.41,1.4119,4,4,7-7-1.41-1.4119-5.59,5.59ZM14,16h-3v-.1689c0-1.397.7441-2.7114,1.9419-3.4302l1.1416-.6865-1.03-1.7144-1.1404.686c-1.7969,1.0781-2.9131,3.0493-2.9131,5.145v5.1689c0,.5522.4478,1,1,1h4c.5522,0,1-.4478,1-1v-4c0-.5522-.4478-1-1-1h0ZM22,16h-3v-.1689c0-1.397.7441-2.7114,1.9419-3.4302l1.1416-.6865-1.03-1.7144-1.1404.686c-1.7969,1.0781-2.9131,3.0493-2.9131,5.145v5.1689c0,.5522.4478,1,1,1h4c.5522,0,1-.4478,1-1v-4c0-.5522-.4478-1-1-1h0ZM12,28h-6c-1.103,0-2-.8975-2-2V6c0-1.103.897-2,2-2h20c1.1025,0,2,.897,2,2v11h-2V6H6v20h6v2Z" /></svg>`;
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
