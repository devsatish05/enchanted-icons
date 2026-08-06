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

export const ICON_NAME = `${ICON_PREFIX}icon-mapping-hide`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28,2h-4c-1.1001,0-2,.8999-2,2v1h-12v-1c0-1.1001-.8999-2-2-2h-4c-1.1001,0-2,.8999-2,2v4c0,1.1001.8999,2,2,2h4c1.1001,0,2-.8999,2-2v-1h7.8l-5.8,12h-2v-1c0-1.1001-.8999-2-2-2H4c-1.1001,0-2,.8999-2,2v4c0,1.1001.8999,2,2,2h4c1.1001,0,2-.8999,2-2v-1h2c.8,0,1.6001-.5,1.8-1.2002l6.2-12.7998h2v1c0,1.1001.8999,2,2,2h4c1.1001,0,2-.8999,2-2v-4c0-1.1001-.8999-2-2-2ZM8,8h-4v-4h4v4ZM8,22h-4v-4h4v4ZM28,8h-4v-4h4v4ZM15.7871,26.9966c-.6255-.7224-1.1656-1.5436-1.564-2.4752l-.2231-.5215.2231-.5215c1.4231-3.3287,4.4761-5.4785,7.7769-5.4785.8191,0,1.6177.1464,2.3828.4008l-1.6667,1.6669c-.2321-.0436-.4709-.0677-.7161-.0677-2.2056,0-4,1.7944-4,4,0,.2451.0242.484.0676.716l-2.2805,2.2806h0ZM27.8352,20.5789l2.5789-2.5789-1.4141-1.4141-13.3947,13.4205,1.4011,1.4011,2.0272-2.0272c.9393.3888,1.9368.6196,2.9663.6196,3.3008,0,6.354-2.1498,7.7769-5.4785l.2231-.5215-.2231-.5215c-.4773-1.1164-1.1499-2.0851-1.9417-2.8997v.0002ZM22,28c-.4717,0-.918-.0967-1.3386-.2474l5.0913-5.0912c.1506.4206.2473.8669.2473,1.3386,0,2.2056-1.7944,4-4,4Z" /></svg>`;
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
