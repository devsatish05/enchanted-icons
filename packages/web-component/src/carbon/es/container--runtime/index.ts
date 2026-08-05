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

export const ICON_NAME = `${ICON_PREFIX}icon-container-runtime`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m30,24v-2h-2.1c-.1-.6-.4-1.2-.7-1.8l1.5-1.5-1.4-1.4-1.5,1.5c-.5-.3-1.1-.6-1.8-.7v-2.1h-2v2.1c-.6.1-1.2.4-1.8.7l-1.5-1.5-1.4,1.4,1.5,1.5c-.3.5-.6,1.1-.7,1.8h-2.1v2h2.1c.1.6.4,1.2.7,1.8l-1.5,1.5,1.4,1.4,1.5-1.5c.5.3,1.1.6,1.8.7v2.1h2v-2.1c.6-.1,1.2-.4,1.8-.7l1.5,1.5,1.4-1.4-1.5-1.5c.3-.5.6-1.1.7-1.8h2.1Zm-7,2c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3Z" /><path stroke-width="0" d="m14,28H6c-1.1028,0-2-.8972-2-2V6c0-1.1028.8972-2,2-2h20c1.1028,0,2,.8972,2,2v8h-2V6H6v20h8v2Z" /></svg>`;
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
