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

export const ICON_NAME = `${ICON_PREFIX}icon-assignment-action-usage`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M21,2h-10C6,2,2,6,2,11v10c0,5,4,9,9,9h10c5,0,9-4,9-9v-10c0-5-4-9-9-9ZM28,21c0,3.9-3.1,7-7,7h-10c-3.9,0-7-3.1-7-7v-10c0-3.9,3.1-7,7-7h10c3.9,0,7,3.1,7,7v10ZM9.5,19c.8284,0,1.5.6716,1.5,1.5s-.6716,1.5-1.5,1.5-1.5-.6716-1.5-1.5.6716-1.5,1.5-1.5ZM9.5,10c.8284,0,1.5.6716,1.5,1.5s-.6716,1.5-1.5,1.5-1.5-.6716-1.5-1.5.6716-1.5,1.5-1.5ZM14,12h10v2h-10v-2ZM14,18h10v2h-10v-2Z" /></svg>`;
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
