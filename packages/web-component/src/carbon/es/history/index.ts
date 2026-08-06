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

export const ICON_NAME = `${ICON_PREFIX}icon-history`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M18.3115,29.8096l-.3281-1.9727c5.8037-.9648,10.0166-5.9434,10.0166-11.8369,0-6.6167-5.3828-12-12-12s-12,5.3833-12,12h-2c0-7.7197,6.2803-14,14-14s14,6.2803,14,14c0,6.876-4.916,12.6836-11.6885,13.8096ZM13.5537,29.7861c-1.6157-.2842-3.1558-.8467-4.5767-1.6719l1.0039-1.7305c1.2178.707,2.5361,1.1895,3.9194,1.4336l-.3467,1.9688ZM5.293,25.0205c-1.0537-1.25-1.873-2.6582-2.4351-4.1846l1.877-.6914c.4814,1.3086,1.1836,2.5156,2.0874,3.5869l-1.5293,1.2891ZM20.5586,21.9727l-5.5586-5.5586V7h2v8.5859l4.9727,4.9727-1.4141,1.4141Z" /></svg>`;
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
