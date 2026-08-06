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

export const ICON_NAME = `${ICON_PREFIX}icon-carbon-for-aem`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><circle cx="7" cy="6" r="1" stroke-width="0" /><circle cx="11" cy="6" r="1" stroke-width="0" /><circle cx="28.5" cy="24.5" r="1.5" stroke-width="0" /><circle cx="23.5" cy="27.5" r="1.5" stroke-width="0" /><circle cx="18.5" cy="24.5" r="1.5" stroke-width="0" /><circle cx="18.5" cy="19.5" r="1.5" stroke-width="0" /><circle cx="23.5" cy="16.5" r="1.5" stroke-width="0" /><circle cx="28.5" cy="19.5" r="1.5" stroke-width="0" /><path stroke-width="0" d="m28,2H4c-1.1046,0-2,.8954-2,2v20c0,1.1046.8954,2,2,2h9v-2H4v-14h24v4h2V4c0-1.1046-.8954-2-2-2Zm0,6H4v-4h24v4Z" /></svg>`;
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
