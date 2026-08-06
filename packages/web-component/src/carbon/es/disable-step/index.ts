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

export const ICON_NAME = `${ICON_PREFIX}icon-disable-step`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29,12H3c-.55,0-1-.45-1-1V3c0-.55.45-1,1-1h26c.55,0,1,.45,1,1v8c0,.55-.45,1-1,1ZM4,4v6h24v-6H4ZM16,22H4v-6h24v1h2v-2c0-.55-.45-1-1-1H3c-.55,0-1,.45-1,1v8c0,.55.45,1,1,1h13v-2ZM29.8447,25.3754c.9845-4.3565-2.8635-8.2045-7.2201-7.2201-2.1983.4968-3.9725,2.271-4.4692,4.4692-.9845,4.3565,2.8635,8.2045,7.2201,7.2201,2.1983-.4968,3.9725-2.271,4.4692-4.4692ZM28,24c0,.7-.2,1.4-.6,2l-5.5-5.5c.6-.4,1.3-.6,2-.6,2.2,0,4.1,1.9,4.1,4.1h0ZM20,24c0-.7.2-1.4.6-2l5.5,5.5c-.6.4-1.3.6-2,.6-2.2,0-4.1-1.9-4.1-4.1h0Z" /></svg>`;
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
