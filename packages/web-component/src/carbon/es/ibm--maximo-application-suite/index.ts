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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-maximo-application-suite`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22,3v2h-12.4258l-6.4238,11.0117,3.6408,6.5537.7783-2.5654,1.9139.5806-1.7417,5.7416-5.7416-1.7416.5806-1.9139s1.2918.3851,2.375.712l-3.8296-6.8933c-.1719-.3086-.168-.6846.0098-.9893L8.1357,3.4961c.1797-.3076.5088-.4961.8643-.4961h13ZM23,29c.3555,0,.6846-.1885.8643-.4961l7-12c.1777-.3047.1816-.6807.0098-.9893l-3.8296-6.8933c1.0832.3269,2.375.712,2.375.712l.5806-1.9139-5.7416-1.7416-1.7417,5.7416,1.9139.5806.7783-2.5654,3.6408,6.5537-6.4238,11.0117h-12.4258v2h13-.0002ZM21,16c0-2.7568-2.2432-5-5-5s-5,2.2432-5,5,2.2432,5,5,5,5-2.2432,5-5ZM19,16c0,1.6543-1.3457,3-3,3s-3-1.3457-3-3,1.3457-3,3-3,3,1.3457,3,3Z" /></svg>`;
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
