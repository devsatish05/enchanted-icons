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

export const ICON_NAME = `${ICON_PREFIX}icon-chart-lollipop`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25,28v-9.1c1.7-.4,3-2,3-3.9s-1.8-4-4-4-4,1.8-4,4,1.3,3.4,3,3.9v9.1h-5V10.9c1.7-.4,3-2,3-3.9s-1.8-4-4-4-4,1.8-4,4,1.3,3.4,3,3.9v17.1h-5v-6.1c1.7-.4,3-2,3-3.9s-1.8-4-4-4-4,1.8-4,4,1.3,3.4,3,3.9v6.1h-5V2h-2v26c0,1.1.9,2,2,2h26v-2h-5ZM22,15c0-1.1.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2ZM15,7c0-1.1.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2ZM8,18c0-1.1.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2Z" /></svg>`;
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
