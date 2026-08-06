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

export const ICON_NAME = `${ICON_PREFIX}icon-keychain`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M23,5c-1.05,0-2.07.23-3,.68-.93-.45-1.95-.68-3-.68-3.86,0-7,3.14-7,7,0,.48.05.96.15,1.43L2,21.59v5.41h4v-2h-2v-2.59l7.66-7.65.76-.76c-.28-.63-.42-1.3-.42-2,0-2.76,2.24-5,5-5,.35,0,.69.03,1.02.11-2.06,2.05-2.2,4.7-1.87,6.33l-8.15,8.15v5.41h5.41l8.16-8.15c.46.1.94.15,1.43.15,3.86,0,7-3.14,7-7s-3.14-7-7-7ZM23,17c-.7,0-1.37-.14-1.99-.42l-.72.71-.03.03-7.67,7.68h-2.59v-2.59l7.96-7.96.43-.44-.18-.58c-.05-.14-1.11-3.62,2.2599-5.74.01-.01.03-.02.05-.03.75-.43,1.58-.66,2.48-.66,2.76,0,5,2.24,5,5s-2.24,5-5,5ZM21.5,12c0-.8284.6716-1.5,1.5-1.5s1.5.6716,1.5,1.5-.6716,1.5-1.5,1.5-1.5-.6716-1.5-1.5Z" /></svg>`;
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
