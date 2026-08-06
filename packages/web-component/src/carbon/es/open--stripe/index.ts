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

export const ICON_NAME = `${ICON_PREFIX}icon-open-stripe`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M10.875,28h-6.75c-1.1719,0-2.125-.8975-2.125-2V6c0-1.103.9531-2,2.125-2h6.75c1.1719,0,2.125.897,2.125,2v20c0,1.1025-.9531,2-2.125,2ZM4.0112,25.9844c.0186,0,.0571.0156.1138.0156h6.75c.085,0,.1294-.0361.1367-.0459l-.0117-19.9458c-.0039.0215-.0474-.0083-.125-.0083h-6.75c-.0645,0-.106.021-.125.0352v19.9561c.001-.0049.0049-.0068.0112-.0068ZM23.707,21.707l-1.4141-1.4141,3.293-3.293h-8.5859v-2h8.5859l-3.293-3.293,1.4141-1.4141,5.707,5.707-5.707,5.707Z" /></svg>`;
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
