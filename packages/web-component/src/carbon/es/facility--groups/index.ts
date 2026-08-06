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

export const ICON_NAME = `${ICON_PREFIX}icon-facility-groups`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28,30h-4v-2h4V4h-4v-2h4c1.1025,0,2,.897,2,2v24c0,1.1025-.8975,2-2,2ZM8,30h-4c-1.103,0-2-.8975-2-2V4c0-1.103.897-2,2-2h4v2h-4v24h4v2ZM16,27.0459l-6.8892-8.1533c-1.1455-1.5078-1.7744-3.3667-1.7715-5.2344,0-4.7734,3.8853-8.6582,8.6606-8.6582s8.6611,3.8853,8.6611,8.6606c.001,1.8672-.6201,3.7144-1.748,5.1987h0s-.2041.2705-.2432.3193l-6.6699,7.8672ZM10.9048,17.9453l5.0952,6.0088,5.3193-6.3018c.8662-1.1411,1.3428-2.5576,1.3418-3.9912,0-3.6733-2.9883-6.6611-6.6611-6.6611s-6.6606,2.9873-6.6606,6.6597c-.002,1.4341.4824,2.8618,1.3638,4.0229l.2017.2627ZM19,16h-2v-4h-2v4h-2v-4c0-1.103.897-2,2-2h2c1.1025,0,2,.897,2,2v4Z" /></svg>`;
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
