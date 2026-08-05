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

export const ICON_NAME = `${ICON_PREFIX}icon-sync-settings`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="M15 24 15 22 11.4 22 22 11.4 22 15 24 15 24 8 17 8 17 10 20.6 10 10 20.6 10 17 8 17 8 24 15 24z" /><path stroke-width="0" d="m25,20v2h3c1.1,0,2-.9,2-2v-3h-2v3h-3Z" /><path stroke-width="0" d="M28 10H30V14H28z" /><path stroke-width="0" d="m25,2v2h3v3h2v-3c0-1.1-.9-2-2-2h-3Z" /><path stroke-width="0" d="M18 2H22V4H18z" /><path stroke-width="0" d="m10,4v3h2v-3h3V2h-3c-1.1,0-2,.9-2,2Z" /><path stroke-width="0" d="m12,10H4c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2v-8h-2v8H4V12h8v-2Z" /></svg>`;
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
