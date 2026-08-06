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

export const ICON_NAME = `${ICON_PREFIX}icon-js-error`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m20.3335,30h-2.667c-.9189,0-1.6665-.7476-1.6665-1.6665v-2.3335h2v2h2v-8h2v8.3335c0,.9189-.7476,1.6665-1.6665,1.6665Z" /><path d="m28.3335,30h-4.3335v-2h4v-2h-2c-1.103,0-2-.897-2-2v-2.3335c0-.9189.7476-1.6665,1.6665-1.6665h4.3335v2h-4v2h2c1.103,0,2,.897,2,2v2.3335c0,.9189-.7476,1.6665-1.6665,1.6665Z" /><path d="m16,18c-.8284,0-1.5.6716-1.5,1.5s.6716,1.5,1.5,1.5,1.5-.6716,1.5-1.5-.6716-1.5-1.5-1.5h0Z" /><path d="M15 7H17V16H15z" /><path d="m14,26h-4.5c-.3538,0-.6809-.1868-.8608-.4912L2.1392,14.5088c-.0928-.1569-.1392-.3329-.1392-.5088s.0464-.3519.1392-.5088L8.6392,2.4912c.1799-.3044.5071-.4912.8608-.4912h13c.3538,0,.6809.1868.8608.4912l6.5,11c.0928.1569.1392.3328.1392.5088s-.0464.3519-.1392.5088l-2,3.3845-1.7217-1.0173,1.6992-2.876-5.9089-10h-11.8589l-5.9089,10,5.9089,10h3.9294v2Z" /></svg>`;
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
