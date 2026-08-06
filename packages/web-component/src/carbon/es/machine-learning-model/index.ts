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

export const ICON_NAME = `${ICON_PREFIX}icon-machine-learning-model`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m27,19c1.6543,0,3-1.3457,3-3s-1.3457-3-3-3c-1.302,0-2.4016.8384-2.8157,2h-5.7703l7.3008-7.3008c.3911.1875.8235.3008,1.2852.3008,1.6543,0,3-1.3457,3-3s-1.3457-3-3-3-3,1.3457-3,3c0,.4619.1135.894.3005,1.2852l-8.3005,8.3008v-6.5859c0-1.1025.897-2,2-2h2v-2h-2c-1.2002,0-2.2661.5425-3,1.3823-.7339-.8398-1.7998-1.3823-3-1.3823h-1c-4.9624,0-9,4.0371-9,9v6c0,4.9629,4.0376,9,9,9h1c1.2002,0,2.2661-.5425,3-1.3823.7339.8398,1.7998,1.3823,3,1.3823h2v-2h-2c-1.103,0-2-.8975-2-2v-6.5859l8.3005,8.3008c-.187.3911-.3005.8232-.3005,1.2852,0,1.6543,1.3457,3,3,3s3-1.3457,3-3-1.3457-3-3-3c-.4617,0-.894.1133-1.2852.3008l-7.3008-7.3008h5.7703c.4141,1.1616,1.5137,2,2.8157,2Zm0-4c.5513,0,1,.4482,1,1s-.4487,1-1,1-1-.4482-1-1,.4487-1,1-1Zm0-11c.5515,0,1,.4487,1,1s-.4485,1-1,1-1-.4487-1-1,.4485-1,1-1Zm-13,8h-2v2h2v4h-2c-1.6543,0-3,1.3457-3,3v2h2v-2c0-.5518.4487-1,1-1h2v4c0,1.1025-.897,2-2,2h-1c-3.5195,0-6.4324-2.6133-6.9202-6h1.9202v-2h-2v-4h3c1.6543,0,3-1.3457,3-3v-2h-2v2c0,.5518-.4487,1-1,1h-2.9202c.4878-3.3867,3.4006-6,6.9202-6h1c1.103,0,2,.8975,2,2v4Zm14,15c0,.5513-.4485,1-1,1s-1-.4487-1-1,.4485-1,1-1,1,.4487,1,1Z" /></svg>`;
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
