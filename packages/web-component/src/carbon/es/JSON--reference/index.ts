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

export const ICON_NAME = `${ICON_PREFIX}icon-json-reference`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M4 20 4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20z" /><path d="M29 12 27 6 25 6 25 16 27 16 27 10 29 16 31 16 31 6 29 6 29 12z" /><path d="M21.3335,6h-2.667A1.6683,1.6683,0,0,0,17,7.6665v6.667A1.6684,1.6684,0,0,0,18.6665,16h2.667A1.6683,1.6683,0,0,0,23,14.3335V7.6665A1.6683,1.6683,0,0,0,21.3335,6ZM21,14H19V8h2Z" /><path d="M9,7.6665V10a2.002,2.002,0,0,0,2,2h2v2H9v2h4.3335A1.6683,1.6683,0,0,0,15,14.3335V12a2.002,2.002,0,0,0-2-2H11V8h4V6H10.6665A1.6683,1.6683,0,0,0,9,7.6665Z" /><path d="M5,14H3V12H1v2.3335A1.6684,1.6684,0,0,0,2.6665,16h2.667A1.6683,1.6683,0,0,0,7,14.3335V6H5Z" /></svg>`;
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
