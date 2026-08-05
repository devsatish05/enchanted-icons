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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-watsonx-code-assistant-for-z-understand`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22.6,21.2c1.5-2,2.4-4.5,2.4-7.2,0-6.6-5.4-12-12-12-3.3,0-6.4,1.3-8.7,3.8l1.5,1.4c1.8-2.1,4.4-3.2,7.2-3.2,5.5,0,10,4.5,10,10s-4.5,10-10,10c-3,0-5.8-1.3-7.7-3.6l-1.5,1.3c2.2,2.7,5.6,4.3,9.2,4.3,3.2,0,6.1-1.3,8.3-3.3l7.3,7.3,1.4-1.4s-7.4-7.4-7.4-7.4ZM16,18l4-4-4-4-1.42,1.41,2.59,2.59-2.58,2.58,1.41,1.42ZM6,10l-4,4,4,4,1.42-1.41-2.59-2.59,2.58-2.58-1.41-1.42ZM11.3044,9l-2.5405,9.4824,1.9316.5176,2.5405-9.4824s-1.9316-.5176-1.9316-.5176Z" /></svg>`;
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
