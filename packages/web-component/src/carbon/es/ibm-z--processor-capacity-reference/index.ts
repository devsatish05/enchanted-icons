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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-z-processor-capacity-reference`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25 25H27V29H25z" /><path d="M21 23H23V29H21z" /><path d="M29 20H31V29H29z" /><path d="m30,17V5c0-1.1046-.8954-2-2-2h-9c-1.1046,0-2,.8954-2,2v24h2V5h9v12h2Z" /><path d="m13,3H4c-1.1046,0-2,.8954-2,2v22c0,1.1046.8954,2,2,2h9c1.1046,0,2-.8954,2-2V5c0-1.1046-.8954-2-2-2Zm-9,2.9635l8.2998,6.0365-8.2998,6.0365V5.9635Zm0,21.0365v-5.0366l6.9253,5.0366h-6.9253Zm9-.9635l-8.2998-6.0365,8.2998-6.0365v12.073Zm0-15.9999l-6.9253-5.0366h6.9253v5.0366Z" /></svg>`;
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
