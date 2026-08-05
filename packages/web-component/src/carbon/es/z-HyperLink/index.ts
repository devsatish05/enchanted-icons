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

export const ICON_NAME = `${ICON_PREFIX}icon-z-hyperlink`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29,5v22c0,1.1-.9,2-2,2h-8c-1.1,0-2-.9-2-2v-4h2v4h8V5h-8v4h-2v-4c0-1.1.9-2,2-2h8c1.1,0,2,.9,2,2ZM13,27H5V5h8v4h2v-4c0-1.1-.9-2-2-2H5c-1.1,0-2,.9-2,2v22c0,1.1.9,2,2,2h8c1.1,0,2-.9,2-2v-4h-2v4ZM13.1,12.7l-1.4-1.4-4.7,4.7,4.7,4.7,1.4-1.4-2.3-2.3h10.4l-2.3,2.3,1.4,1.4,4.7-4.7-4.7-4.7-1.4,1.4,2.3,2.3h-10.4l2.3-2.3Z" /></svg>`;
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
