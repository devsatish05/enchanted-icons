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

export const ICON_NAME = `${ICON_PREFIX}icon-data-alert`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M11,9c-.5523,0-1-.4477-1-1s.4477-1,1-1,1,.4477,1,1-.4477,1-1,1ZM12,16c0-.5523-.4477-1-1-1s-1,.4477-1,1,.4477,1,1,1,1-.4477,1-1ZM12,24c0-.5523-.4477-1-1-1s-1,.4477-1,1,.4477,1,1,1,1-.4477,1-1ZM21,27h-13v-6h13v-2h-13v-6h16v3h2V5c0-1.103-.8975-2-2-2H8c-1.103,0-2,.897-2,2v22c0,1.1025.897,2,2,2h13v-2ZM8,5h16v6H8v-6ZM26,19h-2v7h2v-7ZM26.5,29.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5,1.5.6716,1.5,1.5,1.5,1.5-.6716,1.5-1.5Z" /></svg>`;
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
