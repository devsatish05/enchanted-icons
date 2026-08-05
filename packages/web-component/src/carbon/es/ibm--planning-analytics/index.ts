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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-planning-analytics`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29.9,16.4l-6,12c-.2.3-.5.6-.9.6h-13c-.6,0-1-.4-1-1s.4-1,1-1h12.4l5.5-11-5.5-11h-12.4c-.6,0-1-.4-1-1s.4-1,1-1h13c.4,0,.7.2.9.6l6,12c.1.3.1.6,0,.9h0v-.1ZM10,22c0,.6.4,1,1,1h11v-2h-11c-.6,0-1,.4-1,1ZM18,15H7c-.6,0-1,.4-1,1s.4,1,1,1h11v-2ZM22,11v-2h-11c-.6,0-1,.4-1,1s.4,1,1,1h11ZM3,15c-.6,0-1,.4-1,1s0,0,0,0h0c0,.6.4,1,1,1s1-.4,1-1,0,0,0,0h0c0-.6-.4-1-1-1ZM6,21c-.6,0-1,.4-1,1s.4,1,1,1,1-.4,1-1-.4-1-1-1ZM6,11c.6,0,1-.4,1-1s-.4-1-1-1-1,.4-1,1,.4,1,1,1Z" /></svg>`;
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
