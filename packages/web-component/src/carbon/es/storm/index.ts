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

export const ICON_NAME = `${ICON_PREFIX}icon-storm`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M9,20c.5523,0,1,.4477,1,1s-.4477,1-1,1-1-.4477-1-1,.4477-1,1-1ZM28,23.25v-4.5c0-.9648-.8281-1.75-1.8457-1.75H5.8462c-1.0181,0-1.8462.7852-1.8462,1.75v4.5c0,.9648.8281,1.75,1.8462,1.75h20.3081c1.0176,0,1.8457-.7852,1.8457-1.75ZM6,19h20v4H6v-4ZM9,13h-3v-4h3v-2h-3c-1.103,0-2,.897-2,2v4c0,1.103.897,2,2,2h3v-2ZM28,13v-4c0-1.103-.8975-2-2-2h-3v2h3v4h-3v2h3c1.1025,0,2-.897,2-2ZM15,7h-4v2h4v-2ZM15,13h-4v2h4v-2ZM21,7h-4v2h4v-2ZM21,13h-4v2h4v-2Z" /></svg>`;
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
