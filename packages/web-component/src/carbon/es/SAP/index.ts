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

export const ICON_NAME = `${ICON_PREFIX}icon-sap`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29,8h-6.1843c-.4141-1.1611-1.5137-2-2.8157-2s-2.4016.8389-2.8157,2H4c-1.1046,0-2,.8954-2,2v12c0,1.1046.8954,2,2,2h1.1843c.4141,1.1611,1.5137,2,2.8157,2s2.4016-.8389,2.8157-2h4.1843c.2653,0,.5197-.1054.7073-.293l14-14c.6299-.6299.1836-1.707-.7073-1.707ZM20,8c.5522,0,1,.4478,1,1s-.4478,1-1,1-1-.4478-1-1,.4478-1,1-1ZM8,24c-.5522,0-1-.4478-1-1s.4478-1,1-1,1,.4478,1,1-.4478,1-1,1ZM14.5857,22h-3.77c-.4141-1.1611-1.5137-2-2.8157-2s-2.4016.8389-2.8157,2h-1.1843v-12h13.1843c.4141,1.1611,1.5137,2,2.8157,2s2.4016-.8389,2.8157-2h3.77s-12,12-12,12Z" /></svg>`;
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
