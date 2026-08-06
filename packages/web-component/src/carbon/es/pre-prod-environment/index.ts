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

export const ICON_NAME = `${ICON_PREFIX}icon-pre-prod-environment`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M4.0001,14.0001v4h-2v-4s2,0,2,0ZM30.0001,14.0001v4h-2v-4s2,0,2,0ZM4.0001,20.0001v4h-2v-4h2ZM6.0001,28.0001v2h-2c-1.1001,0-2-.9-2-2v-2h2v2h2ZM12.0001,28.0001v2h-4v-2h4ZM28,2H4c-1.1001,0-2,.9-2,2v8h2v-2h24v2h2V4c0-1.1-.8999-2-2-2ZM25.5802,22.4099l1.42-1.41,4,4-4,4-1.41-1.42,2.58-2.58-2.59-2.59ZM19.4202,27.5899l-1.42,1.41-4-4,4-4,1.41,1.42-2.58,2.58,2.59,2.59ZM24.9152,20.5769l-1.915-.577-2.915,9.423,1.915.577,2.915-9.423Z" /></svg>`;
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
