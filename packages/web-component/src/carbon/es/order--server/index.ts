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

export const ICON_NAME = `${ICON_PREFIX}icon-order-server`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M13,6c-.5,0-1,.5-1,1s.5,1,1,1,1-.5,1-1-.5-1-1-1ZM13,6c-.5,0-1,.5-1,1s.5,1,1,1,1-.5,1-1-.5-1-1-1ZM23,3h-13c-1.1,0-2,.9-2,2v4c0,1.1.9,2,2,2h13c1.1,0,2-.9,2-2v-4c0-1.1-.9-2-2-2ZM23,9h-13v-4h13v4ZM13,8c.5,0,1-.5,1-1s-.5-1-1-1-1,.5-1,1,.5,1,1,1ZM24,26c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM10,26c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM29.2,7l-2.3,10.2c-.1.5-.5.8-1,.8H8l.8,4h17.2v2H8c-.5,0-.9-.3-1-.8L3.2,4H0v-2h4c.5,0,.9.3,1,.8l2.6,13.2h17.6l2-9h2Z" /></svg>`;
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
