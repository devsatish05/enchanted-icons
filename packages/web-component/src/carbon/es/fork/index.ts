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

export const ICON_NAME = `${ICON_PREFIX}icon-fork`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m20,6c0,1.8584,1.2798,3.4106,3,3.8579v5.1421h-14v-5.1421c1.7202-.4473,3-1.9995,3-3.8579,0-2.2056-1.7944-4-4-4s-4,1.7944-4,4c0,1.8584,1.2798,3.4106,3,3.8579v5.1421c0,1.103.897,2,2,2h6v5.1421c-1.7202.4473-3,1.9995-3,3.8579,0,2.2056,1.7944,4,4,4s4-1.7944,4-4c0-1.8584-1.2798-3.4106-3-3.8579v-5.1421h6c1.103,0,2-.897,2-2v-5.1421c1.7202-.4473,3-1.9995,3-3.8579,0-2.2056-1.7944-4-4-4s-4,1.7944-4,4Zm-14,0c0-1.103.897-2,2-2s2,.897,2,2c0,1.103-.897,2-2,2s-2-.897-2-2Zm12,20c0,1.103-.897,2-2,2s-2-.897-2-2c0-1.103.897-2,2-2s2,.897,2,2ZM26,6c0,1.103-.897,2-2,2s-2-.897-2-2c0-1.103.897-2,2-2s2,.897,2,2Z" /></svg>`;
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
