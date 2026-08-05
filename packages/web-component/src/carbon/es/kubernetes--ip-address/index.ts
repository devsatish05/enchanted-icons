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

export const ICON_NAME = `${ICON_PREFIX}icon-kubernetes-ip-address`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="16" cy="9" r="2" /><circle cx="16" cy="16" r="2" /><path d="m18.8157,26c-.302-.8472-.9685-1.5137-1.8157-1.8159v-2.1841h3c.2969,0,.5781-.1318.7683-.3599l5-6c.1982-.2378.2751-.5547.2078-.8569l-2-9c-.0696-.3145-.2864-.5757-.5823-.7021l-7-3c-.1257-.0542-.2598-.0811-.3938-.0811s-.2681.0269-.3938.0811l-7.0015,3c-.2959.1265-.5127.3877-.5825.7021l-1.9985,9c-.0671.3027.0098.6191.208.8569l5,6c.1902.228.4714.3599.7683.3599h3v2.1846c-.8472.3018-1.5137.9683-1.8157,1.8154H4v2h9.1843c.4141,1.1611,1.5137,2,2.8157,2s2.4016-.8389,2.8157-2h9.1843v-2h-9.1843Zm-10.7329-11.2627l1.7808-8.02,6.1365-2.6294,6.135,2.6294,1.7822,8.02-4.3855,5.2627h-7.0635l-4.3855-5.2627Zm7.9172,13.2627c-.5515,0-1-.4487-1-1s.4485-1,1-1,1,.4487,1,1-.4485,1-1,1Z" /></svg>`;
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
