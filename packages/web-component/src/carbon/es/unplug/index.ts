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

export const ICON_NAME = `${ICON_PREFIX}icon-unplug`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28.9,4.4l-1.4-1.4-3,3c-1.9-1.3-4.6-1.1-6.3.6l-3.5,3.5,7.1,7.1,3.5-3.5c1.7-1.7,1.9-4.4.6-6.3,0,0,3-3,3-3ZM23.8,12.3l-2.1,2.1-4.2-4.2,2.1-2.1c1.2-1.2,3.1-1.2,4.2,0,1.2,1.2,1.2,3.1,0,4.2ZM17.7,18.5l-1.4-1.4-1.9,1.9-1.4-1.4,1.9-1.9-1.4-1.4-1.9,1.9-1.4-1.4-3.5,3.5c-1.7,1.7-1.9,4.4-.6,6.3l-3,3,1.4,1.4,3-3c.8.5,1.8.8,2.8.8s2.6-.5,3.5-1.5l3.5-3.5-1.4-1.4,1.9-1.9h-.1ZM12.2,23.9c-1.1,1.1-3.1,1.1-4.2,0-1.2-1.2-1.2-3.1,0-4.2l2.1-2.1,4.2,4.2s-2.1,2.1-2.1,2.1ZM8,14h-4v-2h4v2ZM14,8h-2v-4h2v4ZM28,20h-4v-2h4v2ZM24.6858,25.9l-2.8284-2.8284,1.4142-1.4142,2.8284,2.8284-1.4142,1.4142ZM8.8071,10.0213l-2.8284-2.8284,1.4142-1.4142,2.8284,2.8284-1.4142,1.4142ZM20,28h-2v-4h2v4Z" /></svg>`;
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
