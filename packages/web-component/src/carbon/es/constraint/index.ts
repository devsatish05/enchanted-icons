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

export const ICON_NAME = `${ICON_PREFIX}icon-constraint`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m27,13V5s-4,0-4,0v-2h4c1.1028,0,2,.8975,2,2v8c0,1.5234.8799,2,2,2v2c-1.1201,0-2,.4502-2,2v8c0,1.1025-.8972,2-2,2h-4v-2h4s0-8,0-8c0-1.6841.8799-2.5645,2-2.8584v-.2676c-1.1201-.2939-2-1.1899-2-2.874Z" /><path stroke-width="0" d="M12 12H20V20H12z" /><path stroke-width="0" d="m5,13V5h4v-2h-4c-1.1028,0-2,.8975-2,2v8c0,1.5234-.8799,2-2,2v2c1.1201,0,2,.4502,2,2v8c0,1.1025.8972,2,2,2h4v-2h-4v-8c0-1.6841-.8799-2.5645-2-2.8584v-.2676c1.1201-.2939,2-1.1899,2-2.874Z" /></svg>`;
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
