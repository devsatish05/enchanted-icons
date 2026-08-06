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

export const ICON_NAME = `${ICON_PREFIX}icon-document-comment`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m26,17h-10c-1.104.0014-1.9986.896-2,2v6c0,1.1046.8954,2,2,2h4v-2h-4v-6h10v6h-2.5352l-2.5937,3.8906,1.6641,1.1094,2-3h1.4648c1.1046,0,2-.8954,2-2v-6c-.0014-1.104-.896-1.9986-2-2Z" /><path stroke-width="0" d="m22,14h2v-4c0-.2998-.1001-.5-.3-.7002l-7-7c-.2-.1997-.3999-.2998-.7-.2998H6c-1.1001,0-2,.8999-2,2v24c0,1.1001.8999,2,2,2h6v-2h-6V4h8v6c0,1.1001.8999,2,2,2h6v2Zm-6-4v-5.6001l5.6001,5.6001h-5.6001Z" /></svg>`;
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
