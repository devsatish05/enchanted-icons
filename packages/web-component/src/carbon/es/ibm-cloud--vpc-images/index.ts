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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-cloud-vpc-images`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,20H4c-1.1,0-2-.9-2-2V6c0-1.1.9-2,2-2h24c1.1,0,2,.9,2,2v10h-2V6H4v12h26v2ZM2,22h28v2H2v-2ZM2,26h28v2H2v-2ZM16,16c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4ZM16,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM24,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2h0ZM8,10c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2h0Z" /></svg>`;
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
