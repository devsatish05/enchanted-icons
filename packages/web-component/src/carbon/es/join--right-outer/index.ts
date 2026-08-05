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

export const ICON_NAME = `${ICON_PREFIX}icon-join-right-outer`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28.01,16l-5,5-1.41-1.41,2.59-2.59h-6.09s-2.07,0-2.07,0c-5.52,0-10.02,4.11-10.02,9.17v1.83h-2v-1.83c0-4.45,2.82-8.29,6.89-10.09-.43-.21-.85-.43-1.26-.69l1.02-1.74c1.04.66,2.16,1.11,3.35,1.34h2s0,0,0,0h8.17l-2.59-2.59,1.41-1.41,5,5h0ZM6.36,7.81c-.26-.92-.39-1.88-.39-2.85v-.96h-1.95v.96c0,1.16.16,2.32.47,3.43l1.87-.57ZM7.9,14.04l1.31-1.51c-.9-.85-1.64-1.85-2.19-2.97l-1.74.92c.66,1.35,1.54,2.54,2.62,3.56Z" /></svg>`;
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
