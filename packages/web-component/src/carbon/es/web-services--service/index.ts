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

export const ICON_NAME = `${ICON_PREFIX}icon-web-services-service`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m23,18h-2v-7h-7v-2h8c.5522,0,1,.4478,1,1v8Z" /><path d="m18,23h-8c-.5522,0-1-.4478-1-1v-8c0-.5522.4478-1,1-1h8c.5522,0,1,.4478,1,1v8c0,.5522-.4478,1-1,1Zm-7-2h6v-6h-6v6Z" /><path d="m16,1c-.1741,0-.3481.0454-.5039.1362L3.4961,8.1362c-.3071.1792-.4961.5081-.4961.8638v14c0,.3557.189.6846.4961.8638l12,7c.1558.0908.3298.1362.5039.1362s.3481-.0454.5039-.1362l11-6.4166-1.0078-1.7275-10.4961,6.1227-11-6.4166v-12.8513L16,3.1577l11,6.4166v7.4257h2v-8c0-.3557-.189-.6846-.4961-.8638L16.5039,1.1362c-.1558-.0908-.3298-.1362-.5039-.1362Z" /></svg>`;
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
