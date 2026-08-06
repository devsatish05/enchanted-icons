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

export const ICON_NAME = `${ICON_PREFIX}icon-source-control`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27.0002,12.0001c0-2.2056-1.7939-4-4-4s-4,1.7944-4,4c0,1.8584,1.2795,3.4109,3,3.858v1.142c0,.5513-.4482,1-1,1h-10c-.3523,0-.6857.0723-1,.1843v-8.3263c1.7205-.4471,3-1.9996,3-3.858,0-2.2056-1.7939-4-4-4s-4,1.7944-4,4c0,1.8584,1.2795,3.4109,3,3.858v12.2839c-1.7205.4471-3,1.9996-3,3.858,0,2.2056,1.7939,4,4,4s4-1.7944,4-4c0-1.8584-1.2795-3.4109-3-3.858v-1.142c0-.5513.4482-1,1-1h10c1.6543,0,3-1.3457,3-3v-1.142c1.7205-.4471,3-1.9996,3-3.858ZM11.0002,26.0001c0,1.103-.8975,2-2,2s-2-.897-2-2,.8975-2,2-2,2,.897,2,2ZM7.0002,6.0001c0-1.103.8975-2,2-2s2,.897,2,2-.8975,2-2,2-2-.897-2-2ZM23.0002,14.0001c-1.1025,0-2-.897-2-2s.8975-2,2-2,2,.897,2,2-.8975,2-2,2Z" /></svg>`;
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
