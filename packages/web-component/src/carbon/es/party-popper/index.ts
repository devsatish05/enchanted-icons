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

export const ICON_NAME = `${ICON_PREFIX}icon-party-popper`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M5,28c-.2607,0-.5161-.1016-.707-.293-.2749-.2744-.3657-.6836-.2329-1.0488L12.0601,4.6582c.1172-.3213.3896-.5605.7231-.6343.3335-.0757.6821.0269.9238.269l14,14c.2422.2412.3428.5898.2695.9238-.0742.333-.3135.6064-.6348.7227L5.3418,27.9395c-.1113.041-.2271.0605-.3418.0605ZM9.1367,18.5508l-2.4648,6.7773,6.7773-2.4648-4.3125-4.3125ZM9.8906,16.4766l5.6328,5.6328,3.793-1.3789-8.0464-8.0464-1.3794,3.7925ZM12.0239,10.6099l9.3657,9.3657,3.793-1.3789L13.4033,6.8174l-1.3794,3.7925ZM30,13h-4v-2h4v2ZM25.0127,8.4019l-1.4141-1.4141,3.3926-3.3931,1.4141,1.4141-3.3926,3.3931ZM21,6h-2V2h2v4Z" /></svg>`;
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
