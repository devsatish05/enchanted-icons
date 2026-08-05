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

export const ICON_NAME = `${ICON_PREFIX}icon-calls-all`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m26,12c-2.2091,0-4,1.7908-4,4s1.7909,4,4,4,4-1.7909,4-4-1.7908-4-4-4Zm0,6c-1.1028,0-2-.8972-2-2s.8972-2,2-2,2,.8972,2,2-.8972,2-2,2Z" /><path d="m15,21v2h2.5859l-2.3008,2.3008c-.3911-.1875-.8235-.3008-1.2852-.3008-1.6543,0-3,1.3457-3,3s1.3457,3,3,3,3-1.3457,3-3c0-.4619-.1135-.894-.3005-1.2852l2.3005-2.3008v2.5859h2v-6h-6Zm-1,8c-.5515,0-1-.4487-1-1s.4485-1,1-1,1,.4487,1,1-.4485,1-1,1Z" /><path d="m11.4143,11.4141l-1.4143,1.4146,2.1716,2.1714h-4.356c-.4141-1.1611-1.5137-2-2.8157-2-1.6543,0-3,1.3457-3,3s1.3457,3,3,3c1.302,0,2.4016-.8389,2.8157-2h4.356l-2.1716,2.1714,1.4143,1.4146,4.5857-4.5859-4.5857-4.5859Zm-6.4143,5.5859c-.5515,0-1-.4487-1-1s.4485-1,1-1,1,.4487,1,1-.4485,1-1,1Z" /><path d="m19,5v2.5859l-2.3005-2.3008c.187-.3911.3005-.8232.3005-1.2852,0-1.6543-1.3457-3-3-3s-3,1.3457-3,3,1.3457,3,3,3c.4617,0,.894-.1133,1.2852-.3008l2.3008,2.3008h-2.5859v2h6v-6h-2Zm-6-1c0-.5513.4485-1,1-1s1,.4487,1,1-.4485,1-1,1-1-.4487-1-1Z" /></svg>`;
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
