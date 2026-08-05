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

export const ICON_NAME = `${ICON_PREFIX}icon-chart-planning-waterfall`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m29,8c0-.5522-.4478-1-1-1h-4c-.5522,0-1,.4478-1,1v7h-2V3c0-.5522-.4478-1-1-1h-4c-.5522,0-1,.4478-1,1v12h-2V5c0-.5522-.4478-1-1-1h-4c-.5522,0-1,.4478-1,1v10H3v12c0,.5522.4478,1,1,1h4c.5522,0,1-.4478,1-1v-10h2v5c0,.5522.4478,1,1,1h4c.5522,0,1-.4478,1-1v-5h2v12c0,.5522.4478,1,1,1h4c.5522,0,1-.4478,1-1v-12h4v-9ZM7,26h-2v-9h2v9Zm8-5h-2v-4h2v4Zm2-6V4h2v11h-2Zm10,0h-2v-6h2v6Z" /></svg>`;
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
