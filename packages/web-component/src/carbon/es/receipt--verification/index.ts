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

export const ICON_NAME = `${ICON_PREFIX}icon-receipt-verification`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M25,2H7c-1.1,0-2,.9-2,2v25c0,.55.45,1,1,1h1c.31,0,.61-.15.8-.4l2.2-2.93,2.2,2.93c.17.23.44.38.73.4h.07v-2.67l-2.2-2.93c-.38-.5-1.22-.5-1.6,0l-2.2,2.93V4h18v14h2V4c0-1.1-.9-2-2-2ZM26.54,20.54l-6.54,6.55-2.79-2.8-1.42,1.42,3.5,3.5c.2.19.45.29.71.29s.51-.1.71-.29l7.25-7.25-1.42-1.42ZM21,16v2h2v-2h-2ZM9,16v2h8v-2h-8ZM21,12v2h2v-2h-2ZM9,12v2h8v-2h-8ZM9,8v2h14v-2h-14Z" /></svg>`;
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
