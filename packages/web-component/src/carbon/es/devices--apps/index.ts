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

export const ICON_NAME = `${ICON_PREFIX}icon-devices-apps`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26 2H30V6H26z" /><path d="M26 8H30V12H26z" /><path d="M20 2H24V6H20z" /><path d="M20 8H24V12H20z" /><path d="m28,20h-14v2h2v4h-2v2h9v-2h-5v-4h10c.5304,0,1.0392-.2108,1.4142-.5858s.5858-.8838.5858-1.4142v-6h-2v6Z" /><path d="m6,6h12v-2H6c-.5304,0-1.0392.2107-1.4142.5858-.3751.375-.5858.8838-.5858,1.4142v6h2v-6Z" /><path d="m10,14H4c-.5304,0-1.0392.2107-1.4142.5858-.3751.375-.5858.8838-.5858,1.4142v12c0,.5304.2107,1.0392.5858,1.4142.375.375.8838.5858,1.4142.5858h6c.5304,0,1.0392-.2108,1.4142-.5858.3751-.375.5858-.8838.5858-1.4142v-12c0-.5304-.2107-1.0392-.5858-1.4142-.375-.3751-.8838-.5858-1.4142-.5858Zm0,14H4v-12h6v12Z" /></svg>`;
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
