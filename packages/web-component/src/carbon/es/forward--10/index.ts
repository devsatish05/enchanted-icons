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

export const ICON_NAME = `${ICON_PREFIX}icon-forward-10`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M26,18A10,10,0,1,1,16,8h4v5l6-6L20,1V6H16A12,12,0,1,0,28,18Z" /><path d="M19.63,22.13a2.84,2.84,0,0,1-1.28-.27,2.44,2.44,0,0,1-.89-.77,3.57,3.57,0,0,1-.52-1.25,7.69,7.69,0,0,1-.17-1.68,7.83,7.83,0,0,1,.17-1.68,3.65,3.65,0,0,1,.52-1.25,2.44,2.44,0,0,1,.89-.77,2.84,2.84,0,0,1,1.28-.27,2.44,2.44,0,0,1,2.16,1,5.23,5.23,0,0,1,.7,2.93,5.23,5.23,0,0,1-.7,2.93A2.44,2.44,0,0,1,19.63,22.13Zm0-1.22a1.07,1.07,0,0,0,1-.55A3.38,3.38,0,0,0,21,18.85V17.47a3.31,3.31,0,0,0-.29-1.5,1.23,1.23,0,0,0-2.06,0,3.31,3.31,0,0,0-.29,1.5v1.38a3.38,3.38,0,0,0,.29,1.51A1.06,1.06,0,0,0,19.63,20.91Z" /><path d="M10.63,22V20.82h2V15.63l-1.86,1-.55-1.06,2.32-1.3H14v6.5h1.78V22Z" /></svg>`;
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
