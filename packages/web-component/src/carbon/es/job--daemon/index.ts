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

export const ICON_NAME = `${ICON_PREFIX}icon-job-daemon`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M12,17h8c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2h-8c-1.1,0-2,.9-2,2v11c0,1.1.9,2,2,2ZM12,4h8v11h-8V4ZM8,19h5v2h-5c-1.1,0-2-.9-2-2v-11h2v11ZM4,23h5v2h-5c-1.1,0-2-.9-2-2v-11h2v11ZM27,20c-1.6,0-3.1,1.4-4,2.4-.9-1-2.4-2.4-4-2.4-2.6,0-4,2-4,4s1.4,4,4,4,3.1-1.4,4-2.4c.9,1,2.4,2.4,4,2.4,2.6,0,4-2,4-4s-1.4-4-4-4ZM19,26c-1.5,0-2-1.1-2-2s.5-2,2-2,2,1.1,2.8,2c-.7.9-1.9,2-2.8,2ZM27,26c-.9,0-2-1.1-2.8-2,.7-.9,1.9-2,2.8-2,1.5,0,2,1.1,2,2s-.5,2-2,2Z" /></svg>`;
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
