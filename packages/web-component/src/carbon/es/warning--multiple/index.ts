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

export const ICON_NAME = `${ICON_PREFIX}icon-warning-multiple`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m29,23h-4v-2h2.3821l-7.8821-15.7639-1.1055,2.2112-1.7891-.8945,2-4c.1694-.3387.532-.5527.8945-.5527s.7251.214.8945.5527l9.5,19c.1548.3101.1384.6782-.0439.973-.1821.2948-.5039.4742-.8506.4742Z" /><circle cx="14" cy="25" r="1.25" /><path d="M13 15H15V22H13z" /><path d="m25,30H3c-.3499,0-.6743-.1829-.8555-.4823s-.1926-.6718-.0303-.9817L13.1143,7.536c.1726-.3296.5292-.536.8857-.536s.7131.2064.8857.536l11,21c.1624.3099.1509.6823-.0303.9817s-.5056.4823-.8555.4823Zm-20.3474-2h18.6948L14,10.1552,4.6526,28Z" /></svg>`;
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
