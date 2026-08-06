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

export const ICON_NAME = `${ICON_PREFIX}icon-surrogate-key-database`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25,15c-2.8,0-5,2.2-5,5,0,.2,0,.4,0,.6l-5,5v4.4h4.4s5-5,5-5c.2,0,.4,0,.6,0,2.8,0,5-2.2,5-5s-2.2-5-5-5ZM28,20.7c-.4,1.6-2,2.6-3.7,2.2h-.5c0-.1-5.2,5.1-5.2,5.1h-1.6v-1.6l5.2-5.2v-.5c-.2-.5-.2-.9-.1-1.4.4-1.6,2-2.6,3.7-2.2,1.6.4,2.6,2,2.2,3.7ZM26,19.9c0,.6-.4,1-1,1s-1-.4-1-1,.4-1,1-1,1,.4,1,1ZM6,13h18V5c0-1.1-.9-2-2-2H6c-1.1,0-2,.9-2,2v22c0,1.1.9,2,2,2h7v-2h-7v-6h7v-2h-7v-6ZM6,5h16v6H6v-6Z" /></svg>`;
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
