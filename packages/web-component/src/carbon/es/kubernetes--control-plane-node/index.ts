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

export const ICON_NAME = `${ICON_PREFIX}icon-kubernetes-control-plane-node`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22.951 20h-2.1843c-.4141-1.1611-1.5137-2-2.8157-2s-2.4016.8389-2.8157 2H8.951v2h6.1843c.4141 1.1611 1.5137 2 2.8157 2s2.4016-.8389 2.8157-2h2.1843v-2Zm-5 2c-.5515 0-1-.4487-1-1s.4485-1 1-1 1 .4487 1 1-.4485 1-1 1Zm5-10h-6.1843c-.4141-1.1611-1.5137-2-2.8157-2s-2.4016.8389-2.8157 2H8.951v2h2.1843c.4141 1.1611 1.5137 2 2.8157 2s2.4016-.8389 2.8157-2h6.1843v-2Zm-9 2c-.5515 0-1-.4487-1-1s.4485-1 1-1 1 .4487 1 1-.4485 1-1 1Z" /><path d="m29.8993 18.9897-2.593-11.1865a2 2 0 0 0-1.124-1.3711l-9.407-4.2544C16.5133 2.059 16.2321 2 15.9511 2s-.5623.0591-.8242.1777L5.7197 6.4321a2 2 0 0 0-1.124 1.3711l-2.593 11.1865a2.0008 2.0008 0 0 0 .3899 1.7056l6.886 8.5586A2.0001 2.0001 0 0 0 10.8367 30h10.2286a2.0001 2.0001 0 0 0 1.5581-.7461l6.886-8.5586a2.0008 2.0008 0 0 0 .3899-1.7056ZM21.0653 28H10.837l-6.886-8.5586 2.593-11.187L15.951 4l9.407 4.2549 2.593 11.1865L21.0652 28Z" /><path fill="none" d="M0 0h32v32H0z" /></svg>`;
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
