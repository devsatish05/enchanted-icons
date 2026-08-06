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

export const ICON_NAME = `${ICON_PREFIX}icon-connection-signal-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,18c-1.1046,0-2-.8954-2-2s.8954-2,2-2,2,.8954,2,2-.8954,2-2,2ZM30,16c0-3.7363-1.457-7.251-4.1025-9.897l-1.4141,1.4141c2.2676,2.2681,3.5166,5.2808,3.5166,8.4829s-1.249,6.2148-3.5166,8.4834l1.4141,1.4141c2.6455-2.6465,4.1025-6.1611,4.1025-9.8975ZM7.4668,24.4834c-2.2676-2.2686-3.5166-5.2812-3.5166-8.4834s1.249-6.2148,3.5166-8.4829l-1.4141-1.4141c-2.6455,2.646-4.1025,6.1606-4.1025,9.897s1.457,7.251,4.1025,9.8975l1.4141-1.4141ZM11.707,20.2432c-1.1328-1.1338-1.7568-2.6406-1.7568-4.2432s.624-3.1104,1.7568-4.2432l-1.4141-1.4141c-1.5107,1.5107-2.3428,3.5195-2.3428,5.6572s.832,4.1455,2.3428,5.6572l1.4141-1.4141ZM24,16c0-2.1367-.832-4.146-2.3428-5.6572l-1.4141,1.4141c1.1328,1.1333,1.7568,2.6401,1.7568,4.2432s-.624,3.1094-1.7568,4.2432l1.4141,1.4141c1.5107-1.5117,2.3428-3.5205,2.3428-5.6572Z" /></svg>`;
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
