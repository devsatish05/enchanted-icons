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

export const ICON_NAME = `${ICON_PREFIX}icon-border-none`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M3 3H5V5H3z" /><path d="M7 3H9V5H7z" /><path d="M11 3H13V5H11z" /><path d="M15 3H17V5H15z" /><path d="M3 7H5V9H3z" /><path d="M3 11H5V13H3z" /><path d="M3 15H5V17H3z" /><path d="M3 19H5V21H3z" /><path d="M3 23H5V25H3z" /><path d="M3 27H5V29H3z" /><path d="M27 3H29V5H27z" /><path d="M23 3H25V5H23z" /><path d="M19 3H21V5H19z" /><path d="M7 27H9V29H7z" /><path d="M11 27H13V29H11z" /><path d="M15 27H17V29H15z" /><path d="M23 27H25V29H23z" /><path d="M19 27H21V29H19z" /><path d="M27 7H29V9H27z" /><path d="M27 11H29V13H27z" /><path d="M27 15H29V17H27z" /><path d="M27 19H29V21H27z" /><path d="M27 23H29V25H27z" /><path d="M27 27H29V29H27z" /><path d="M8 10H18V12H8z" /><path d="M8 15H14V17H8z" /></svg>`;
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
