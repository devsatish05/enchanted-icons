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

export const ICON_NAME = `${ICON_PREFIX}icon-name-space`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M7,12H4a2.0023,2.0023,0,0,1-2-2V6A2.0023,2.0023,0,0,1,4,4H7V6H4v4H7Z" /><path d="M9 10H15V12H9z" /><path d="M17 10H23V12H17z" /><path d="M28,12H25V10h3V6H25V4h3a2.0023,2.0023,0,0,1,2,2v4A2.0023,2.0023,0,0,1,28,12Z" /><path d="M17 4H23V6H17z" /><path d="M9 4H15V6H9z" /><path d="M28,28H4a2.0023,2.0023,0,0,1-2-2V22a2.0023,2.0023,0,0,1,2-2H28a2.0023,2.0023,0,0,1,2,2v4A2.0023,2.0023,0,0,1,28,28ZM4,22v4H28V22Z" /><path d="M2 15H30V17H2z" /></svg>`;
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
