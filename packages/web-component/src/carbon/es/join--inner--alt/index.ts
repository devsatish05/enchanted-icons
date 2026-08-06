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

export const ICON_NAME = `${ICON_PREFIX}icon-join-inner-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M9.3,12.6l-1.3,1.5c-1.1-1-2-2.2-2.7-3.5l1.8-.9c.6,1.1,1.3,2.1,2.2,2.9h0ZM6.4,7.7c-.3-.9-.4-1.9-.4-2.8v-.9s-2,0-2,0v.9c0,1.1.2,2.3.5,3.4l1.9-.6h0ZM14.2,15c-1.2-.2-2.4-.7-3.4-1.3l-1,1.7c.3.2.7.4,1.1.6-.4.2-.7.4-1.1.6l1,1.7c1.1-.7,2.2-1.1,3.4-1.3v-1.9h0ZM5.3,21.4l1.8.9c.6-1.1,1.3-2.1,2.2-2.9l-1.3-1.5c-1.1,1-2,2.2-2.7,3.5h0ZM4,27.1v.9h2v-.9c0-1,.1-1.9.4-2.8l-1.9-.6c-.3,1.1-.5,2.2-.5,3.4h0ZM23,11l-1.4,1.4,2.6,2.6h-8.2s0,2,0,2h8.2s-2.6,2.6-2.6,2.6l1.4,1.4,5-5s-5-5-5-5Z" /></svg>`;
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
