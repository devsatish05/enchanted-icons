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

export const ICON_NAME = `${ICON_PREFIX}icon-container-runtime-monitor`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="22" cy="23" r="2" stroke-width="0" /><path stroke-width="0" d="m29.7769,22.4785c-1.2631-3.2173-4.3221-5.3723-7.7769-5.4785-3.4548.1062-6.5138,2.2612-7.7769,5.4785l-.2231.5215.2231.5215c1.2631,3.2173,4.3221,5.3723,7.7769,5.4785,3.4548-.1062,6.5138-2.2612,7.7769-5.4785l.2231-.5215-.2231-.5215Zm-7.7769,4.5215c-2.2091,0-4-1.7909-4-4s1.7909-4,4-4,4,1.7909,4,4c-.0025,2.2081-1.7919,3.9975-4,4Z" /><path stroke-width="0" d="m12,28h-6c-1.1028,0-2-.8972-2-2V6c0-1.1028.8972-2,2-2h20c1.1028,0,2,.8972,2,2v10h-2V6H6v20h6v2Z" /></svg>`;
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
