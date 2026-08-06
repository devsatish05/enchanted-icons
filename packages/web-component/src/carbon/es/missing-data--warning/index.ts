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

export const ICON_NAME = `${ICON_PREFIX}icon-missing-data-warning`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M15,30H7c-1.103,0-2-.8975-2-2V4c0-1.103.897-2,2-2h10c.2656,0,.5195.1055.707.293l7,7c.1875.1875.293.4419.293.707v4h-2v-2h-6c-1.103,0-2-.897-2-2v-6H7v24h8v2ZM17,4.4141v5.5859h5.5859l-5.5859-5.5859ZM15,23h-5v-2h5v2ZM20,18h-10v-2h10v2ZM30.91,28.94l-6.28-11.57c-.19-.35-.63-.47-.98-.28-.11.07-.21.16-.28.28l-6.28,11.57c-.19.34-.06.78.29.97.1.06.22.09.34.09h12.5601c.4,0,.72-.32.72-.72,0-.12-.03-.24-.09-.34ZM23.25,21h1.5v4h-1.5v-4ZM24,28c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1Z" /></svg>`;
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
