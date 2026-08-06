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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-launchpad-s4`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m22,26v2H4V10h2v-2h-2c-1.1045,0-2,.8955-2,2v18c0,1.1045.8955,2,2,2h18c1.1045,0,2-.8955,2-2v-2h-2Z" /><path stroke-width="0" d="m30,5.9932v-1.9932c0-1.1046-.8954-2-2-2H10c-1.1046,0-2,.8954-2,2v18c0,1.1046.8954,2,2,2h18c1.1046,0,2-.8954,2-2v-3h-2v3H10V4h18v1.9932h2Z" /><path stroke-width="0" d="m27.5,17h-9c-1.9297,0-3.5-1.5703-3.5-3.5,0-1.7935,1.3555-3.2759,3.0957-3.4766.4561-2.291,2.4814-4.0234,4.9043-4.0234s4.4482,1.7324,4.9043,4.0234c1.7402.2007,3.0957,1.6831,3.0957,3.4766,0,1.9297-1.5703,3.5-3.5,3.5Zm-9-5c-.8271,0-1.5.6729-1.5,1.5s.6729,1.5,1.5,1.5h9c.8271,0,1.5-.6729,1.5-1.5s-.6729-1.5-1.5-1.5h-1.5v-1c0-1.6543-1.3457-3-3-3s-3,1.3457-3,3v1h-1.5Z" /></svg>`;
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
