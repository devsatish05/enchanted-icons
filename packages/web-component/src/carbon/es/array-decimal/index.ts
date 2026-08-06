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

export const ICON_NAME = `${ICON_PREFIX}icon-array-decimal`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M4,24h-2v4c0,1.105.895,2,2,2h4v-2h-4v-4ZM28,2h-4v2h4v4h2v-4c0-1.105-.895-2-2-2ZM2,4v4h2v-4h4v-2h-4c-1.105,0-2,.895-2,2ZM28,28h-4v2h4c1.105,0,2-.895,2-2v-4h-2v4ZM5,19v2h2v-2h-2ZM13,11h-2c-1.104.001-1.999.896-2,2v6c.001,1.104.896,1.999,2,2h2c1.104-.001,1.999-.896,2-2v-6c-.001-1.104-.896-1.999-2-2ZM13,19h-2v-6h2v6ZM21,11h-2c-1.104.001-1.999.896-2,2v6c.001,1.104.896,1.999,2,2h2c1.104-.001,1.999-.896,2-2v-6c-.001-1.104-.896-1.999-2-2ZM21,19h-2v-6h2v6Z" /></svg>`;
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
