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

export const ICON_NAME = `${ICON_PREFIX}icon-pipelines`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22,12h6c1.1028,0,2-.8975,2-2V4c0-1.1025-.8972-2-2-2h-6c-1.1028,0-2,.8975-2,2v2h-9c-2.7571,0-5,2.2432-5,5h-2c-1.1028,0-2,.8975-2,2v6c0,1.1025.8972,2,2,2h2c0,2.7568,2.2429,5,5,5h9v2c0,1.1025.8972,2,2,2h6c1.1028,0,2-.8975,2-2v-6c0-1.1025-.8972-2-2-2h-6c-1.1028,0-2,.8975-2,2v2h-9c-1.6543,0-3-1.3457-3-3h2c1.1028,0,2-.8975,2-2v-6c0-1.1025-.8972-2-2-2h-2c0-1.6543,1.3457-3,3-3h9v2c0,1.1025.8972,2,2,2ZM22,22h6v6h-6l-.0012-6h.0012ZM10,13v6h-6l-.0012-6h6.0012ZM22,4h6v6h-6l-.0012-6h.0012Z" /></svg>`;
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
