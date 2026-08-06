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

export const ICON_NAME = `${ICON_PREFIX}icon-bank-vault`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,30h-2v-2H8v2h-2v-2h-2c-1.103,0-2-.8975-2-2V4c0-1.103.897-2,2-2h24c1.1025,0,2,.897,2,2v22c0,1.1025-.8975,2-2,2h-2v2ZM4,4v22h24.002l-.002-22H4ZM17,22h-2v-2.1006c-.626-.127-1.2207-.374-1.7573-.7285l-2.5356,2.5361-1.4141-1.4141,2.5366-2.5371c-.3555-.5371-.6021-1.1318-.729-1.7559h-2.1006v-2h2.1001c.1274-.626.374-1.2207.7285-1.7573l-2.5356-2.5356,1.4141-1.4141,2.5366,2.5366c.5376-.3555,1.1318-.6021,1.7563-.729v-2.1006h2v2.1006c.626.127,1.2207.3735,1.7568.728l2.5361-2.5356,1.4141,1.4141-2.5361,2.5356c.3545.5366.6016,1.1313.7285,1.7573h2.1006v2h-2.1006c-.127.626-.374,1.2207-.7285,1.7568l2.5361,2.5361-1.4141,1.4141-2.5371-2.5371c-.5371.3555-1.1318.6025-1.7559.7295v2.1006ZM16,12c-.7954,0-1.5513.3135-2.1279.8818-.5586.5669-.8721,1.3228-.8721,2.1182,0,.7949.3135,1.5508.8823,2.1279,1.1318,1.1162,3.0908,1.127,4.2456-.0098.5586-.5674.8721-1.3232.8721-2.1182,0-.793-.3115-1.5464-.877-2.1226-.5771-.5659-1.3306-.8774-2.123-.8774Z" /></svg>`;
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
