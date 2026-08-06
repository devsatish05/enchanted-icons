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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-elo-method-composer`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m13.76,10.463l-3.297,3.297c-.6173.6173-.6173,1.6227,0,2.24l12.0044,12h5.5326v-5.5326l-12-12.0044c-.6173-.6173-1.6226-.6173-2.2399,0h0Zm12.24,12.8328v2.7042h-2.7042l-7.4409-7.4409,2.7042-2.7042,7.4409,7.4409Zm-8.855-8.8549l-2.7041,2.7041-2.2672-2.2672,2.7042-2.7042,2.2671,2.2673Z" /><path stroke-width="0" d="m28,2v8h-8v-2h4.92c-2.25-2.53-5.46-4-8.92-4-6.61,0-12,5.38-12,12,0,6.61,5.39,12,12,12h1v2h-1c-7.72,0-14-6.28-14-14S8.28,2,16,2c3.83,0,7.4,1.5499,10,4.23V2h2Z" /></svg>`;
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
