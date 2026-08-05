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

export const ICON_NAME = `${ICON_PREFIX}icon-document-configuration`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m30,24v-2h-2.1011c-.1289-.6259-.3775-1.2211-.7319-1.7529l1.49-1.49-1.414-1.414-1.49,1.49c-.5318-.3545-1.127-.603-1.753-.732v-2.1011h-2v2.1011c-.6259.1289-1.2211.3775-1.7529.7319l-1.49-1.49-1.414,1.414,1.49,1.49c-.3545.5318-.603,1.127-.732,1.753h-2.1011v2h2.1011c.1289.6259.3775,1.2211.7319,1.7529l-1.49,1.49,1.414,1.414,1.49-1.49c.5318.3545,1.127.603,1.753.732v2.1011h2v-2.1011c.6259-.1289,1.2211-.3775,1.7529-.7319l1.49,1.49,1.414-1.414-1.49-1.49c.3545-.5318.603-1.127.732-1.753h2.1011Zm-7,2c-1.6569,0-3-1.3431-3-3s1.3431-3,3-3,3,1.3431,3,3c-.0018,1.6561-1.3439,2.9982-3,3Z" /><path stroke-width="0" d="m23.499,9.085l-6.792-6.792c-.1875-.1875-.4419-.293-.707-.293H6c-1.1001,0-2,.8999-2,2v24c0,1.1001.8999,2,2,2h8v-2H6V4h8v6c0,1.1025.897,2,2,2h6.292c.6929,0,1.312-.4136,1.5771-1.0537.2656-.6406.1201-1.3711-.3701-1.8613Zm-7.499.915v-5.5859l5.5854,5.5859h-5.5854Z" /></svg>`;
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
