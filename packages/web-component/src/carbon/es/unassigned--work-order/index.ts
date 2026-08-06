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

export const ICON_NAME = `${ICON_PREFIX}icon-unassigned-work-order`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M24,16c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4ZM24,22c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2ZM27,25h-6c-1.65,0-3,1.35-3,3v2h2v-2c0-.55.45-1,1-1h6c.55,0,1,.45,1,1v2h2v-2c0-1.65-1.35-3-3-3ZM12,12v7h2v-7h-2ZM13,21c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1ZM21,5h-3v-1c0-1.1-.9-2-2-2h-6c-1.1,0-2,.9-2,2v1h-3c-1.1,0-2,.9-2,2v19c0,1.1.9,2,2,2h9v-2H5V7h3v2h10v-2h3v6h2v-6c0-1.1-.9-2-2-2ZM10,7v-3h6v3h-6Z" /></svg>`;
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
