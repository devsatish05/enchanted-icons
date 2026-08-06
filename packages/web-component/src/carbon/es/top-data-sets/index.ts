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

export const ICON_NAME = `${ICON_PREFIX}icon-top-data-sets`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M14,2.01c-.34-.01-.67-.01-1-.01C7.7,2,2,3.25,2,6v18c0,2.75,5.7,4,11,4,.33,0,.66,0,1-.01v-2.01c-.32.01-.66.02-1,.02-5.85,0-8.85-1.46-9-2v-3.5701c2.13,1.0701,5.64,1.5701,9,1.5701.33,0,.66,0,1-.01v-2.01c-.32.01-.66.02-1,.02-5.85,0-8.85-1.46-9-2v-3.5701c2.13,1.0701,5.64,1.5701,9,1.5701.33,0,.66,0,1-.01,4.99-.1501,10-1.4099,10-3.99v-6c0-2.5801-5.01-3.8401-10-3.99ZM22,11.99c-.15.52-2.82,1.8401-8,1.99-.32.01-.66.02-1,.02-5.85,0-8.85-1.46-9-2v-3.5701c2.13,1.0701,5.64,1.5701,9,1.5701.33,0,.67,0,1-.02,3.04-.0801,6.08-.5898,8-1.55v3.5601ZM14,7.98c-.32.01-.66.02-1,.02-5.84,0-8.84-1.46-9-1.98v-.01c.16-.55,3.16-2.01,9-2.01.34,0,.68.01,1,.02,5.15.1499,7.81,1.4399,8,1.98-.19.54-2.85,1.8301-8,1.98ZM30,28.585l-2.832-2.832c.524-.7905.833-1.7356.833-2.7529,0-2.7568-2.2432-5-5-5s-5,2.2432-5,5,2.2432,5,5,5c1.0173,0,1.9624-.3091,2.7529-.833l2.832,2.832,1.4141-1.4141ZM23.001,26c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3,3,1.3457,3,3-1.3457,3-3,3Z" /></svg>`;
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
