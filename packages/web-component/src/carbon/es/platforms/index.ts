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

export const ICON_NAME = `${ICON_PREFIX}icon-platforms`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m28,28H4c-1.1028,0-2-.8972-2-2v-6h2v6h24v-6h2v6c0,1.1028-.8972,2-2,2Z" /><path d="m17,17v4c0,.5522.4477,1,1,1h4c.5523,0,1-.4478,1-1v-4c0-.5523-.4477-1-1-1h-4c-.5523,0-1,.4477-1,1Zm2,1h2v2h-2v-2Z" /><path d="m9,17v4c0,.5522.4477,1,1,1h4c.5523,0,1-.4478,1-1v-4c0-.5523-.4477-1-1-1h-4c-.5523,0-1,.4477-1,1Zm2,1h2v2h-2v-2Z" /><path d="m17,9v4c0,.5522.4477,1,1,1h4c.5523,0,1-.4478,1-1v-4c0-.5523-.4477-1-1-1h-4c-.5523,0-1,.4477-1,1Zm2,1h2v2h-2v-2Z" /><path d="m5,5v8c0,.5522.4477,1,1,1h8c.5523,0,1-.4478,1-1V5c0-.5523-.4477-1-1-1H6c-.5523,0-1,.4477-1,1Zm2,1h6v6h-6v-6Z" /></svg>`;
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
