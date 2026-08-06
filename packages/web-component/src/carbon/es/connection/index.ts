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

export const ICON_NAME = `${ICON_PREFIX}icon-connection`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27,22.13v-12.26c1.72-.44,3-2.01,3-3.87,0-2.21-1.79-4-4-4-1.86,0-3.43,1.28-3.87,3h-12.26c-.44-1.72-2.01-3-3.87-3-2.21,0-4,1.79-4,4,0,1.86,1.28,3.43,3,3.87v12.26c-1.73.44-3,2.01-3,3.87,0,2.21,1.79,4,4,4,1.86,0,3.43-1.27,3.87-3h12.26c.44,1.72,2.01,3,3.87,3,2.21,0,4-1.79,4-4,0-1.86-1.28-3.43-3-3.87ZM26,4c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2ZM4,6c0-1.1.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2ZM22.13,25h-12.26c-.36-1.41-1.46-2.51-2.87-2.87v-12.26c1.4-.36,2.51-1.47,2.87-2.87h12.26c.36,1.4,1.47,2.51,2.87,2.87v12.26c-1.4.36-2.51,1.47-2.87,2.87ZM26,28c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z" /></svg>`;
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
