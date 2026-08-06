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

export const ICON_NAME = `${ICON_PREFIX}icon-folder-tree`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,15h11c.5523,0,1-.4478,1-1v-7c0-.5523-.4477-1-1-1h-5l-.72-1.45c-.1711-.3395-.5199-.5527-.9-.55h-4.38c-.5523,0-1,.4477-1,1v4H6V2h-2v22c0,1.1025.897,2,2,2h9v3c0,.5522.4477,1,1,1h11c.5523,0,1-.4478,1-1v-7c0-.5523-.4477-1-1-1h-5l-.72-1.45c-.1711-.3395-.5199-.5527-.9-.55h-4.38c-.5523,0-1,.4477-1,1v4H6v-13h9v3c0,.5522.4477,1,1,1ZM17,6h2.76l.45.89.55,1.11h5.24v5h-9v-7ZM17,21h2.76l.45.89.55,1.11h5.24v5h-9v-7Z" /></svg>`;
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
