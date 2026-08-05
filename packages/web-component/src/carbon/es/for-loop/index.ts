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

export const ICON_NAME = `${ICON_PREFIX}icon-for-loop`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M23,23h7v7h-2v-3.3516c-1.6448,2.0405-4.1526,3.3516-7.0002,3.3516h-9.9998c-5,0-9-4-9-9v-8h2v8c0,3.8999,3.1001,7,7,7h10c2.4033,0,4.4941-1.1841,5.7517-3h-3.7517v-2ZM21,2h-9.9998c-2.8477,0-5.3555,1.311-7.0002,3.3516v-3.3516h-2v7h7v-2h-3.7517c1.2576-1.8159,3.3484-3,5.7517-3h10c3.8999,0,7,3.1001,7,7v8h2v-8c0-5-4-9-9-9ZM20.7212,12.0117v-2.0117h-7.7212v12h2.27v-5.0732h4.7461v-2.0117h-4.7461v-2.9033h5.4512Z" /></svg>`;
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
