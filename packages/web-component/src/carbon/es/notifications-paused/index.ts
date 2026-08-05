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

export const ICON_NAME = `${ICON_PREFIX}icon-notifications-paused`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29,5l-3.625,4h3.625v2h-6v-2l3.75-4h-3.75v-2h6v2ZM28.707,19.293c.1875.1875.293.4419.293.707v3c0,.5522-.4473,1-1,1h-7v1c0,2.7568-2.2432,5-5,5s-5-2.2432-5-5v-1h-7c-.5527,0-1-.4478-1-1v-3c0-.2651.1055-.5195.293-.707l2.707-2.707v-3.5859c0-5.1763,3.9541-9.4458,9-9.9492V1h2v2.0508c1.0583.1055,2.0641.3853,3,.7959v2.1533c-1.1783-.6841-2.5422-1-4-1-4.4111,0-8,3.5889-8,8v4c0,.2651-.1055.5195-.293.707l-2.707,2.707v1.586h22v-1.586l-2.707-2.707c-.1875-.1875-.293-.4419-.293-.707v-3h2v2.5859l2.707,2.707h0ZM19,24h-6v1c0,1.6543,1.3457,3,3,3s3-1.3457,3-3v-1Z" /></svg>`;
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
