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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-lqe`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m31,29.5859l-8.5479-8.5469c-2.0986,2.5171-5.178,3.9609-8.4521,3.9609-6.0654,0-11-4.9346-11-11S7.9346,3,14,3s11,4.9346,11,11c0,1.6001-.3354,3.1416-.9968,4.583l1.8174.834c.7827-1.7041,1.1794-3.5269,1.1794-5.417,0-7.168-5.8318-13-13-13S1,6.832,1,14s5.8318,13,13,13c3.1343,0,6.1025-1.1387,8.4395-3.1465l7.1465,7.1465,1.4141-1.4141Z" /><path stroke-width="0" d="m17,15c-.8066,0-1.5369.3237-2.0767.8438l-2.96-1.4805c.0146-.1201.0366-.2388.0366-.3633s-.022-.2432-.0366-.3633l2.96-1.4805c.5398.52,1.27.8438,2.0767.8438,1.6543,0,3-1.3457,3-3s-1.3457-3-3-3-3,1.3457-3,3c0,.1245.022.2432.0366.3633l-2.96,1.4805c-.5398-.52-1.27-.8438-2.0767-.8438-1.6543,0-3,1.3457-3,3s1.3457,3,3,3c.8066,0,1.5369-.3237,2.0767-.8438l2.96,1.4805c-.0146.1201-.0366.2388-.0366.3633,0,1.6543,1.3457,3,3,3s3-1.3457,3-3-1.3457-3-3-3Zm0-6c.5515,0,1,.4482,1,1s-.4485,1-1,1-1-.4482-1-1,.4485-1,1-1Zm-8,6c-.5515,0-1-.4482-1-1s.4485-1,1-1,1,.4482,1,1-.4485,1-1,1Zm8,4c-.5515,0-1-.4482-1-1s.4485-1,1-1,1,.4482,1,1-.4485,1-1,1Z" /></svg>`;
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
