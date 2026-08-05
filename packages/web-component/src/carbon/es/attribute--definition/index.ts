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

export const ICON_NAME = `${ICON_PREFIX}icon-attribute-definition`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28,2H4c-1.1046,0-2,.8954-2,2v24c0,1.1046.8954,2,2,2h24c1.1046,0,2-.8954,2-2V4c0-1.1046-.8954-2-2-2ZM28,28H4V4h24v24ZM16.3496,22.0015l-.9629-3.0605h-4.2646l-.9458,3.0605h-2.3042l4.0239-12.0029h2.8203l3.9893,12.0029h-2.356ZM13.2891,12.062h-.0864l-1.5303,4.9355h3.1641l-1.5474-4.9355ZM19.9585,19.7129v-4.959h-1.3242v-1.7539h.688c.6538,0,.8599-.311.8599-.9302v-1.5054h1.9775v2.4355h1.8403v1.7539h-1.8403v5.4922h1.7026v1.7539h-1.582c-1.5132,0-2.3218-.8252-2.3218-2.2871Z" /></svg>`;
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
