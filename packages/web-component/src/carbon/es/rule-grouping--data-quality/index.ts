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

export const ICON_NAME = `${ICON_PREFIX}icon-rule-grouping-data-quality`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M31,29.5829l-2.8325-2.8306c.5237-.7905.8325-1.7354.8325-2.7524,0-2.7568-2.2432-5-5-5s-5,2.2432-5,5,2.2432,5,5,5c1.0171,0,1.9619-.3086,2.7524-.8325l2.8306,2.8325,1.417-1.417ZM21,23.9999c0-1.6543,1.3457-3,3-3s3,1.3457,3,3-1.3457,3-3,3-3-1.3457-3-3ZM28.42,6.9999H10.58c-.87,0-1.58.7-1.58,1.57v12.2201c0,3.19.27,6.12,3.11,7.62l4.89,2.59v-2.26l-3.95-2.09c-2.19-1.16-2.05-3.41-2.05-5.86v-11.7901h17v8.0001h2v-8.4301c0-.87-.71-1.57-1.58-1.57ZM21.42.9999H3.58c-.87,0-1.58.7-1.58,1.57v12.22c0,3.19.27,6.12,3.11,7.62l1.89,1v-2.2599l-.95-.5c-2.19-1.16-2.05-3.41-2.05-5.86V2.9999h17v2h2v-2.43c0-.87-.71-1.57-1.58-1.57ZM24,13h-11v-2h11v2ZM22,17h-9v-2h9v2Z" /></svg>`;
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
