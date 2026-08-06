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

export const ICON_NAME = `${ICON_PREFIX}icon-network-1`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,20a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,20Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,16,14Z" /><path d="M5,20a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,5,20Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,5,14Z" /><path d="M10,31a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,10,31Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,10,25Z" /><path d="M22,31a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,31Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,22,25Z" /><path d="M27,20a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,27,20Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,27,14Z" /><path d="M22,9a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,9Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,22,3Z" /><path d="M10,9a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,10,9Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,10,3Z" /></svg>`;
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
