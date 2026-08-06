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

export const ICON_NAME = `${ICON_PREFIX}icon-virtual-private-cloud-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M23.4141,22,10,8.5859V2H2v8H8.5859L22,23.4141V30h8V22ZM8,8H4V4H8ZM28,28H24V24h4Z" /><path d="M30,6a3.9915,3.9915,0,0,0-7.8579-1H13V7h9.1421A3.9945,3.9945,0,0,0,25,9.8579V19h2V9.8579A3.9962,3.9962,0,0,0,30,6ZM26,8a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,26,8Z" /><path d="M19,25H9.8579A3.9945,3.9945,0,0,0,7,22.1421V13H5v9.1421A3.9915,3.9915,0,1,0,9.8579,27H19ZM6,28a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,6,28Z" /></svg>`;
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
