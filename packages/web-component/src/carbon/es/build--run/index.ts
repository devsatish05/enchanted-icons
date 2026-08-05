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

export const ICON_NAME = `${ICON_PREFIX}icon-build-run`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,24l-6,6-1.4-1.4,3.6-3.6h-9.2v-2h9.2l-3.6-3.6,1.4-1.4,6,6ZM21.4854,7.126L12.4858,2.126c-.3027-.168-.6689-.168-.9717,0L2.5142,7.126c-.3174.1763-.5142.5107-.5142.874v10c0,.3633.1968.6982.5142.874l9,5c.1514.084.3188.126.4858.126.1753,0,.3506-.0459.5073-.1377.3052-.1797.4927-.5078.4927-.8623v-9.4116l7-3.8891v4.3007h2v-6c0-.3633-.1973-.6978-.5146-.874ZM12,4.144l6.9411,3.8561-6.9411,3.8558-6.9409-3.856,6.9409-3.856h0ZM4,17.4111v-7.7117l7,3.8889v7.7124s-7-3.8896-7-3.8896Z" /></svg>`;
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
