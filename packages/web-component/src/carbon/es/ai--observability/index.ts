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

export const ICON_NAME = `${ICON_PREFIX}icon-ai-observability`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M22,11v-2h-4v2h1v7h-1v2h4v-2h-1v-7h1ZM28.6182,25.9732l-1.7236-3.4626c-.3389-.6808-1.4502-.6808-1.7891,0l-3.1055,6.2391-1.1055-2.2213c-.1694-.3403-.5156-.5552-.8945-.5552h-4v2.0089h3.3818l1.7236,3.4626c.1694.3404.5156.5552.8945.5552s.7251-.2148.8945-.5552l3.1055-6.2391,1.1055,2.2213c.1694.3404.5156.5552.8945.5552h4v-2.0089h-3.3818,0ZM13,9h-3l-3.4966,11h1.9988l.6018-2h4.7781l.6184,2h2l-3.5005-11ZM9.7058,16.0001h0l1.6284-5.4112.2559-.0024,1.6736,5.4136h-3.5579ZM2,2h26v15h2V0H0v30h11v-2H2V2Z" /></svg>`;
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
