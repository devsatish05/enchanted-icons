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

export const ICON_NAME = `${ICON_PREFIX}icon-portfolio-groups`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28,30h-4v-2h4V4h-4v-2h4c1.1025,0,2,.897,2,2v24c0,1.1025-.8975,2-2,2ZM8,30h-4c-1.103,0-2-.8975-2-2V4c0-1.103.897-2,2-2h4v2h-4v24h4v2ZM24,25H8c-1.103,0-2-.8975-2-2v-9c0-1.103.897-2,2-2h3v-3c0-1.103.897-2,2-2h6c1.1025,0,2,.897,2,2v3h3c1.1025,0,2,.897,2,2v9c0,1.1025-.8975,2-2,2ZM8,14v9h16v-9H8ZM13,12h6v-3h-6v3Z" /></svg>`;
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
