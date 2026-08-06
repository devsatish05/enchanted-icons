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

export const ICON_NAME = `${ICON_PREFIX}icon-classification-groups`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M8,17h5l2,2-2,2h-5v-4ZM30,28V4c0-1.103-.8975-2-2-2h-4v2h4v24h-4v2h4c1.1025,0,2-.8975,2-2ZM8,28h-4V4h4v-2h-4c-1.103,0-2,.897-2,2v24c0,1.1025.897,2,2,2h4v-2ZM24,23v-10c0-.2651-.1055-.5195-.293-.707l-5-5c-.1875-.1875-.4414-.293-.707-.293h-6c-1.103,0-2,.897-2,2v6h2v-6h4v4c0,1.103.897,2,2,2h4v8h-12c0,1.1025.897,2,2,2h10c1.1025,0,2-.8975,2-2ZM21.5859,13h-3.5859v-3.5859l3.5859,3.5859Z" /></svg>`;
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
