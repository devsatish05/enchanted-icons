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

export const ICON_NAME = `${ICON_PREFIX}icon-spyre-accelerator`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M7,17c.5522,0,1-.4476,1-1s-.4478-1-1-1-1,.4478-1,1,.4477,1,1,1ZM7,13c.5522,0,1-.4476,1-1s-.4478-1-1-1-1,.4478-1,1,.4477,1,1,1ZM13,17c.5522,0,1-.4476,1-1s-.4478-1-1-1-1,.4478-1,1,.4477,1,1,1ZM13,13c.5522,0,1-.4476,1-1s-.4478-1-1-1-1,.4478-1,1,.4477,1,1,1ZM25,17c.5522,0,1-.4476,1-1s-.4478-1-1-1-1,.4478-1,1,.4477,1,1,1ZM25,13c.5522,0,1-.4476,1-1s-.4478-1-1-1-1,.4478-1,1,.4477,1,1,1ZM2,7v17h6v-3h3v4h16v-4h3V7H2ZM25,23h-12v-2h12v2ZM28,19H6v3h-2v-13h24v10ZM22,11h-6v6h6v-6ZM20,15h-2v-2h2v2Z" /></svg>`;
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
