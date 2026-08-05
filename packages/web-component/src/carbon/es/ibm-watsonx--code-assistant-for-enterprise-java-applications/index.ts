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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-watsonx-code-assistant-for-enterprise-java-applications`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29.9916,19h-2v-7c0-2.7614-2.2386-5-5-5h-8.9948v-2h8.9948c3.866,0,7,3.134,7,7v7ZM11.9916,28h-3c-3.86,0-7-3.14-7-7v-5h2v5c0,2.757,2.243,5,5,5h3v2Z" /><path d="M9.9916,14h-4c-1.103,0-2-.897-2-2v-2h2v2h4V2h2v10c0,1.103-.897,2-2,2Z" /><path d="M28.15,26l-2.58,2.58,1.41,1.42,4-4-4-4-1.42,1.41,2.59,2.59ZM16.81,26l2.58-2.58-1.41-1.42-4,4,4,4,1.42-1.41-2.59-2.59ZM21.98,31l-1.915-.577,2.915-9.423,1.915.577-2.915,9.423Z" /></svg>`;
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
