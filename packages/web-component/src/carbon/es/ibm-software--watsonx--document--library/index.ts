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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-software-watsonx-document-library`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M12,28H4c-1.1046,0-2-.8954-2-2V6c0-1.1046.8954-2,2-2l7.17-.0057c.533-.0004,1.0442.212,1.42.59l3.41,3.4157,12-.0057c1.1046,0,2,.8954,2,2v4.0057h-2v-4l-12.83-.0057-.58-.59-3.42-3.41-7.17.0057v20h8v2ZM16,17l-2.0072-.0057.0072,11.0057h2v-11ZM29.9954,18.9926l-.0039,9.7657c0,.6838-.5676,1.2417-1.2654,1.2417h-9.4679c-.6978,0-1.2654-.5579-1.2654-1.2426v-12.5195c0-.6857.5676-1.2436,1.2654-1.2436l6.7418.0057,4,4-.0046-.0074ZM27.9899,28.0004l.0101-8.0004h-3v-3h-5v11h8l-.0101.0004Z" /></svg>`;
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
