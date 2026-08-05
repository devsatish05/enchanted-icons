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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-webmethods-api-studio`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27,13c-1.3019,0-2.4016.8385-2.8157,2h-2.1843v2h2.1843c.4141,1.1615,1.5137,2,2.8157,2,1.6543,0,3-1.3457,3-3s-1.3457-3-3-3ZM27,17c-.5518,0-1-.4482-1-1s.4482-1,1-1,1,.4482,1,1-.4482,1-1,1ZM25,22c-.4617,0-.8943.1135-1.2854.3005l-2.7488-2.7488-1.4141,1.4141,2.7488,2.7488c-.187.3911-.3005.8237-.3005,1.2854,0,1.6543,1.3457,3,3,3s3-1.3457,3-3-1.3457-3-3-3ZM25,26c-.5518,0-1-.4482-1-1s.4482-1,1-1,1,.4482,1,1-.4482,1-1,1ZM25,4c-1.6543,0-3,1.3457-3,3,0,.4617.1135.8943.3005,1.2854l-2.984,2.984,1.4141,1.4141,2.984-2.984c.3911.187.8237.3005,1.2854.3005,1.6543,0,3-1.3457,3-3s-1.3457-3-3-3ZM25,8c-.5518,0-1-.4482-1-1s.4482-1,1-1,1,.4482,1,1-.4482,1-1,1ZM16,30c-7.7197,0-14-6.2803-14-14S8.2803,2,16,2c1.8652,0,3.6768.3613,5.3848,1.0732l-.7695,1.8457c-1.4629-.6094-3.0156-.9189-4.6152-.9189-6.6172,0-12,5.3828-12,12s5.3828,12,12,12c1.5996,0,3.1523-.3096,4.6152-.9189l.7695,1.8457c-1.708.7119-3.5195,1.0732-5.3848,1.0732ZM16,20c-2.2061,0-4-1.7939-4-4s1.7939-4,4-4,4,1.7939,4,4-1.7939,4-4,4ZM16,14c-1.1025,0-2,.8975-2,2s.8975,2,2,2,2-.8975,2-2-.8975-2-2-2Z" /></svg>`;
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
