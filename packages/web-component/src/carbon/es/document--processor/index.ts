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

export const ICON_NAME = `${ICON_PREFIX}icon-document-processor`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M21,28v2h-2c-1.1025,0-2-.8975-2-2v-2h2v2h2Z" /><path d="M26,26h2v2c0,1.1025-.8975,2-2,2h-2v-2h2v-2Z" /><path d="M24,21v-2h2c1.1025,0,2,.8975,2,2v2h-2v-2h-2Z" /><path d="M19,23h-2v-2c0-1.1025.8975-2,2-2h2v2h-2v2Z" /><path d="M14,28h-6V4h8v6c0,1.1001.8999,2,2,2h6v4h2v-6c0-.2998-.1001-.5-.3-.7002l-7-7c-.2-.1997-.3999-.2998-.7-.2998h-10c-1.1001,0-2,.8999-2,2v24c0,1.1001.8999,2,2,2h6v-2ZM18,4.3999l5.6001,5.6001h-5.6001v-5.6001Z" /></svg>`;
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
