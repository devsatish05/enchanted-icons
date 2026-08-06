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

export const ICON_NAME = `${ICON_PREFIX}icon-location-info-filled`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m16,2c-6.0654,0-11,4.936-11,11,0,2.3931.7656,4.6729,2.2163,6.5996,0,0,.3003.3945.3481.4517l8.4355,9.9487,8.439-9.9526c.0444-.0532.3447-.4478.3447-.4478l.0015-.0024c1.4492-1.9243,2.2148-4.2041,2.2148-6.5972,0-6.064-4.9346-11-11-11Zm-.5,4c.8284,0,1.5.6714,1.5,1.5s-.6716,1.5-1.5,1.5-1.5-.6714-1.5-1.5.6716-1.5,1.5-1.5Zm4.5,14h-8v-2h3v-5h-2v-2h4v7h3v2Z" /><path fill="none" stroke-width="0" d="m15.5,6c.8284,0,1.5.6714,1.5,1.5s-.6716,1.5-1.5,1.5-1.5-.6714-1.5-1.5.6716-1.5,1.5-1.5Zm4.5,14h-8v-2h3v-5h-2v-2h4v7h3v2Z" /></svg>`;
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
