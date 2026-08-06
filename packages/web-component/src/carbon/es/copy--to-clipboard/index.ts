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

export const ICON_NAME = `${ICON_PREFIX}icon-copy-to-clipboard`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M7,7h3v3h12v-3h3v11h2V7c-.0032-1.1033-.8967-1.9968-2-2h-3v-1c-.0032-1.1033-.8967-1.9968-2-2h-8c-1.1033.0032-1.9968.8967-2,2v1h-3c-1.1033.0032-1.9968.8967-2,2v21c.0032,1.1032.8967,1.9968,2,2h9v-2H7V7ZM12,4h8v4h-8v-4ZM30,24h-8.172l2.586-2.586-1.414-1.414-5,5,5,5,1.414-1.414-2.586-2.586h8.172v-2ZM12,13h-2v2h2v-2ZM22,13h-8v2h8v-2ZM12,18h-2v2h2v-2ZM10,25h2v-2h-2v2ZM14,20h4v-2h-4v2Z" /></svg>`;
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
