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

export const ICON_NAME = `${ICON_PREFIX}icon-partnership`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M8,9a4,4,0,1,1,4-4A4,4,0,0,1,8,9ZM8,3a2,2,0,1,0,2,2A2,2,0,0,0,8,3Z" /><path d="M24,9a4,4,0,1,1,4-4A4,4,0,0,1,24,9Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,24,3Z" /><path d="M26,30H22a2,2,0,0,1-2-2V21h2v7h4V19h2V13a1,1,0,0,0-1-1H20.58L16,20l-4.58-8H5a1,1,0,0,0-1,1v6H6v9h4V21h2v7a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V21a2,2,0,0,1-2-2V13a3,3,0,0,1,3-3h7.58L16,16l3.42-6H27a3,3,0,0,1,3,3v6a2,2,0,0,1-2,2v7A2,2,0,0,1,26,30Z" /></svg>`;
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
