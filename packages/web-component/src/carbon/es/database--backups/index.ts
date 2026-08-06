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

export const ICON_NAME = `${ICON_PREFIX}icon-database-backups`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M7,9c-.5523,0-1-.4477-1-1s.4477-1,1-1,1,.4477,1,1-.4477,1-1,1ZM8,16c0-.5523-.4477-1-1-1s-1,.4477-1,1,.4477,1,1,1,1-.4477,1-1ZM8,24c0-.5523-.4477-1-1-1s-1,.4477-1,1,.4477,1,1,1,1-.4477,1-1ZM27.2012,29.9297c.6787-.1387,1.293-.4688,1.7744-.9521.6514-.6494,1.0244-1.5527,1.0244-2.4775,0-1.4961-.9688-2.8174-2.3379-3.3008-.25-.6416-.6318-1.2344-1.1299-1.7412-.9541-.9404-2.209-1.458-3.5322-1.458-1.5791,0-3.0615.7539-3.9961,2h-.0039c-1.0664,0-2.0708.416-2.8271,1.1729-.7563.7559-1.1729,1.7607-1.1729,2.8271,0,2.2061,1.7944,4,4,4h7.5c.2334,0,.4658-.0254.7012-.0703ZM20.1182,24l.2891-.501c.5312-.9248,1.5254-1.499,2.5928-1.499.7949,0,1.5508.3135,2.1162.8701.3867.3945.6611.8799.7939,1.4053l.1631.6455.6582.0986c.7236.1084,1.2686.7441,1.2686,1.4805,0,.3975-.1592.7842-.4385,1.0635-.2061.2061-.4697.3467-.7471.4043-.1006.0186-.208.0322-.3145.0322h-7.5c-1.1025,0-2-.8975-2-2,0-.5322.208-1.0342.5869-1.4131s.8809-.5869,1.4131-.5869h1.1182ZM13,27H4v-6h9v-2H4v-6h16v3h2V5c0-1.103-.8975-2-2-2H4c-1.103,0-2,.897-2,2v22c0,1.1025.897,2,2,2h9v-2ZM4,5h16v6H4v-6Z" /></svg>`;
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
