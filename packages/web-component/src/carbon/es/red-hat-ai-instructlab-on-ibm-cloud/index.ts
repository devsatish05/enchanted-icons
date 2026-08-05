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

export const ICON_NAME = `${ICON_PREFIX}icon-red-hat-ai-instructlab-on-ibm-cloud`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M21,10c-1.3016,0-2.3906.8409-2.805,2.002l-8.195-.002v2l8.1945.002c.4138,1.162,1.5032,1.998,2.8055,1.998,1.6543,0,3-1.3457,3-3s-1.3457-3-3-3ZM21,14c-.5513,0-1-.4487-1-1s.4487-1,1-1,1,.4487,1,1-.4487,1-1,1ZM24,18l-8.1796.001c-.4146-1.1608-1.519-2.001-2.8204-2.001-1.6543,0-3,1.3457-3,3s1.3457,3,3,3c1.3025,0,2.4076-.8367,2.8213-1.999l8.1787-.001v-2ZM13,20c-.5513,0-1-.4487-1-1s.4487-1,1-1,1,.4487,1,1-.4487,1-1,1ZM29.8801,16.4801l-6,11c-.1799.3198-.51.5199-.88.5199h-14c-.37,0-.7001-.2001-.88-.5199l-6-11c-.16-.3-.16-.6602,0-.9601l4.11-7.53,1.74,1-3.83,7.01,5.45,10h12.8201l5.45-10-5.45-10h-13.41v-2h14c.37,0,.7001.2001.88.52l6,11c.1599.2999.1599.66,0,.9601h-.0001Z" /></svg>`;
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
