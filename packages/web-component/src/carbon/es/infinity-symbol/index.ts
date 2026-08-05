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

export const ICON_NAME = `${ICON_PREFIX}icon-infinity-symbol`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m23,23c-5.6558,0-7.8577-6.4109-7.9487-6.6837-.0173-.0514-1.8435-5.3163-6.0513-5.3163-2.7571,0-5,2.243-5,5s2.2429,5,5,5c1.5876,0,3.0134-.7322,4.2373-2.1764l1.5259,1.2932c-1.5989,1.8862-3.5916,2.8832-5.7632,2.8832-3.8599,0-7-3.1401-7-7s3.1401-7,7-7c5.6558,0,7.8577,6.4109,7.9487,6.6837.0173.0514,1.8435,5.3163,6.0513,5.3163,2.7571,0,5-2.243,5-5s-2.2429-5-5-5c-1.5876,0-3.0134.7322-4.2373,2.1764l-1.5259-1.2932c1.5989-1.8862,3.5916-2.8832,5.7632-2.8832,3.8599,0,7,3.1401,7,7s-3.1401,7-7,7Z" /></svg>`;
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
