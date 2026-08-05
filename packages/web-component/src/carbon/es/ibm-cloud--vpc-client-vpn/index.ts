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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-cloud-vpc-client-vpn`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,2c-7.7,0-14,6.3-14,14s6.3,14,14,14h1V2h-1ZM15,4v11h-5c.2-4.2,1.9-8.1,4.8-10.9h.2v-.1ZM15,17v11h-.2c-2.9-2.8-4.6-6.7-4.8-10.9h5v-.1ZM11.5,4.9c-2.1,2.9-3.3,6.4-3.5,10.1h-4c.4-4.6,3.4-8.5,7.5-10.1ZM4,17h4c.2,3.7,1.4,7.2,3.5,10.1-4.1-1.7-7.1-5.5-7.5-10.1ZM29,23h-1v-2c0-1.7-1.3-3-3-3s-3,1.3-3,3v2h-1c-.6,0-1,.4-1,1v5c0,.6.4,1,1,1h8c.6,0,1-.4,1-1v-5c0-.6-.4-1-1-1ZM24,21c0-.6.4-1,1-1s1,.4,1,1v2h-2v-2ZM28,28h-6v-3h6v3ZM25,8c1.7,0,3-1.3,3-3s-1.3-3-3-3-3,1.3-3,3,1.3,3,3,3ZM25,4c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1ZM25,14c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1ZM25,10c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1Z" /></svg>`;
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
