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

export const ICON_NAME = `${ICON_PREFIX}icon-calls-incoming`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m26,12c-2.2091,0-4,1.7908-4,4s1.7909,4,4,4,4-1.7909,4-4-1.7908-4-4-4Zm0,6c-1.1028,0-2-.8972-2-2s.8972-2,2-2,2,.8972,2,2-.8972,2-2,2Z" /><path d="m15,20l-1.4143,1.4141,2.5859,2.5859H7.8157c-.4141-1.1611-1.5137-2-2.8157-2-1.6543,0-3,1.3457-3,3s1.3457,3,3,3c1.302,0,2.4016-.8389,2.8157-2h8.356l-2.5859,2.5859,1.4143,1.4141,5-5-5-5Zm-10,6c-.5515,0-1-.4487-1-1s.4485-1,1-1,1,.4487,1,1-.4485,1-1,1Z" /><path d="m15,4l-1.4143,1.4141,2.5859,2.5859H7.8157c-.4141-1.1611-1.5137-2-2.8157-2-1.6543,0-3,1.3457-3,3s1.3457,3,3,3c1.302,0,2.4016-.8389,2.8157-2h8.356l-2.5859,2.5859,1.4143,1.4141,5-5-5-5Zm-10,6c-.5515,0-1-.4487-1-1s.4485-1,1-1,1,.4487,1,1-.4485,1-1,1Z" /></svg>`;
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
