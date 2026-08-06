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

export const ICON_NAME = `${ICON_PREFIX}icon-location-switch`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,30l-8.4355-9.9487c-.0479-.0571-.3481-.4516-.3481-.4516-1.4507-1.9268-2.2163-4.2065-2.2163-6.5998,0-6.0641,4.9346-11,11-11s11,4.9359,11,11c0,2.3933-.7656,4.673-2.2148,6.5973l-.0015.0024s-.3003.3944-.3447.4474l-8.439,9.9528ZM8.8125,18.395c.001.0007.2334.3083.2866.3744l6.9009,8.1385,6.9102-8.1498c.0439-.0552.2783-.3649.2788-.3656,1.1851-1.5746,1.811-3.4376,1.811-5.3925,0-4.9615-4.0376-9-9-9S7,8.0385,7,13c0,1.9559.627,3.8199,1.8125,5.395h0ZM17.9918,21l4-4-4-4-1.4199,1.41,1.5898,1.59h-8.1617v2h8.1617l-1.5801,1.5801,1.4102,1.4199ZM15.42,12.59l-1.5898-1.5901h8.1699v-2h-8.1699l1.5801-1.58-1.4102-1.42-4,4,4,4,1.4199-1.4099Z" /></svg>`;
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
