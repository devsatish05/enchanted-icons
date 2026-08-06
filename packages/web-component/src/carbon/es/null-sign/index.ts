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

export const ICON_NAME = `${ICON_PREFIX}icon-null-sign`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,3.4142l-1.4142-1.4142-3.4317,3.4317c-2.4572-2.1313-5.6536-3.4317-9.1541-3.4317-7.7197,0-14,6.2803-14,14,0,3.5005,1.3004,6.6969,3.4317,9.1541l-3.4317,3.4317,1.4142,1.4142,3.4317-3.4317c2.4572,2.1313,5.6536,3.4317,9.1541,3.4317,7.7197,0,14-6.2803,14-14,0-3.5005-1.3004-6.6969-3.4317-9.1541,0,0,3.4317-3.4317,3.4317-3.4317ZM4,16c0-6.6167,5.3833-12,12-12,2.9492,0,5.649,1.0739,7.7406,2.8452L6.8452,23.7406c-1.7713-2.0916-2.8452-4.7914-2.8452-7.7406ZM28,16c0,6.6172-5.3828,12-12,12-2.9491,0-5.6489-1.074-7.7405-2.8453L25.1547,8.2595c1.7713,2.0916,2.8453,4.7914,2.8453,7.7405Z" /></svg>`;
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
