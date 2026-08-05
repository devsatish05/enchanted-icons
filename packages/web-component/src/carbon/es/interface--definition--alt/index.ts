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

export const ICON_NAME = `${ICON_PREFIX}icon-interface-definition-alt`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28,30H4c-1.1,0-2-.9-2-2V4c0-1.1.9-2,2-2h24c1.1,0,2,.9,2,2v24c0,1.1-.9,2-2,2ZM4,28h24V4H4v24ZM9,22v-1.8232h1.582v-8.3545h-1.582v-1.8223h5.4512v1.8223h-1.5991v8.3545h1.5991v1.8232h-5.4512ZM16.3301,22v-9h2.2012v1.5195h.0859c.3613-.9629,1.1182-1.7021,2.5107-1.7021,1.8403,0,2.8721,1.2725,2.8721,3.5078v5.6748h-2.2012v-5.4512c0-1.2725-.4302-1.9258-1.479-1.9258-.9116,0-1.7886.4814-1.7886,1.4443v5.9326h-2.2012Z" /></svg>`;
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
