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

export const ICON_NAME = `${ICON_PREFIX}icon-arithmetic-median`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M24 9 22 9 16 17.5713 10 9 8 9 15 19 8 29 10 29 16 20.4287 22 29 24 29 17 19 24 9z" /><path d="m20,7c-1.7771,0-3.2314-.8726-4.5144-1.6425-1.1636-.6981-2.2627-1.3575-3.4856-1.3575-1.3977,0-2.449.8629-3.2927,1.707l-1.4146-1.4141c1.0674-1.0675,2.5669-2.293,4.7073-2.293,1.7771,0,3.2314.8726,4.5144,1.6425,1.1636.6981,2.2627,1.3575,3.4856,1.3575,1.3975,0,2.4487-.8629,3.293-1.7072l1.4141,1.4143c-1.0674,1.0675-2.5671,2.2928-4.707,2.2928Z" /></svg>`;
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
