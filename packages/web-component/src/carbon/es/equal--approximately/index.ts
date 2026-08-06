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

export const ICON_NAME = `${ICON_PREFIX}icon-equal-approximately`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m20,15c-1.7771,0-3.2314-.8726-4.5144-1.6425-1.1636-.6981-2.2627-1.3575-3.4856-1.3575-1.3977,0-2.449.8629-3.2927,1.707l-1.4146-1.4141c1.0674-1.0675,2.5669-2.293,4.7073-2.293,1.7771,0,3.2314.8726,4.5144,1.6425,1.1636.6981,2.2627,1.3575,3.4856,1.3575,1.3975,0,2.4487-.8629,3.293-1.7072l1.4141,1.4143c-1.0674,1.0675-2.5671,2.2928-4.707,2.2928Z" /><path d="m20,22c-1.7771,0-3.2314-.8726-4.5144-1.6425-1.1636-.6981-2.2627-1.3575-3.4856-1.3575-1.3977,0-2.449.8629-3.2927,1.707l-1.4146-1.4141c1.0674-1.0675,2.5669-2.293,4.7073-2.293,1.7771,0,3.2314.8726,4.5144,1.6425,1.1636.6981,2.2627,1.3575,3.4856,1.3575,1.3975,0,2.4487-.8629,3.293-1.7072l1.4141,1.4143c-1.0674,1.0675-2.5671,2.2928-4.707,2.2928Z" /><path d="m16,30c-7.7197,0-14-6.2804-14-14S8.2802,2,16,2s14,6.2804,14,14-6.2803,14-14,14Zm0-26c-6.6167,0-12,5.3832-12,12s5.3833,12,12,12,12-5.3832,12-12-5.3833-12-12-12Z" /></svg>`;
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
