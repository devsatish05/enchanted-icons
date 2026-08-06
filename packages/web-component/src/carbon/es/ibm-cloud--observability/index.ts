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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-cloud-observability`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,15h5v2h-5v-2ZM26,23h5v2h-5v-2ZM18,17.18l-2.59-2.59-1.41,1.41,4,4,6-6-1.41-1.41-4.59,4.59ZM18,25.18l-2.59-2.59-1.41,1.41,4,4,6-6-1.41-1.41-4.59,4.59ZM11,25h-2.5c-3.0327,0-5.5-2.4678-5.5-5.5,0-2.8779,2.25-5.2852,5.1231-5.4795l.8769-.0205.0493-.8701c.4395-4.0645,3.8579-7.1299,7.9507-7.1299,3.0596,0,5.8066,1.7031,7.169,4.4448l1.791-.8906c-1.7031-3.4258-5.1358-5.5542-8.96-5.5542-4.8477,0-8.938,3.4399-9.8218,8.124-3.5234.6294-6.1782,3.7246-6.1782,7.376,0,4.1357,3.3643,7.5,7.5,7.5h2.5v-2Z" /></svg>`;
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
