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

export const ICON_NAME = `${ICON_PREFIX}icon-storage-pool`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30ZM4,4V28H28V4Z" /><path d="M17.5,13A3.5,3.5,0,1,1,21,9.5,3.5041,3.5041,0,0,1,17.5,13Zm0-5A1.5,1.5,0,1,0,19,9.5,1.5017,1.5017,0,0,0,17.5,8Z" /><path d="M14.5,26A3.5,3.5,0,1,1,18,22.5,3.5041,3.5041,0,0,1,14.5,26Zm0-5A1.5,1.5,0,1,0,16,22.5,1.5017,1.5017,0,0,0,14.5,21Z" /><path d="M9.5,18A3.5,3.5,0,1,1,13,14.5,3.5041,3.5041,0,0,1,9.5,18Zm0-5A1.5,1.5,0,1,0,11,14.5,1.5017,1.5017,0,0,0,9.5,13Z" /><path d="M22.5,21A3.5,3.5,0,1,1,26,17.5,3.5041,3.5041,0,0,1,22.5,21Zm0-5A1.5,1.5,0,1,0,24,17.5,1.5017,1.5017,0,0,0,22.5,16Z" /></svg>`;
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
