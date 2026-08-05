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

export const ICON_NAME = `${ICON_PREFIX}icon-fragments`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,30c-2.4146,0-4.4348-1.7206-4.8997-4h-5.1003c-1.1028,0-2-.8972-2-2v-5h1c1.6543,0,3-1.3458,3-3s-1.3457-3-3-3h-1v-5c0-1.1028.8972-2,2-2h5.1003c.4648-2.2794,2.4851-4,4.8997-4s4.4348,1.7206,4.8997,4h5.1003c1.1028,0,2,.8972,2,2v5h-1c-1.6543,0-3,1.3458-3,3s1.3457,3,3,3h1v5c0,1.1028-.8972,2-2,2h-5.1003c-.4648,2.2794-2.4851,4-4.8997,4ZM6,20.8995v3.1005h7v1c0,1.6542,1.3457,3,3,3s3-1.3458,3-3v-1h7v-3.1005c-2.2793-.4646-4-2.485-4-4.8995s1.7207-4.4349,4-4.8995v-3.1005h-7v-1c0-1.6542-1.3457-3-3-3s-3,1.3458-3,3v1h-7v3.1005c2.2793.4646,4,2.485,4,4.8995s-1.7207,4.4349-4,4.8995Z" /></svg>`;
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
