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

export const ICON_NAME = `${ICON_PREFIX}icon-event-change`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M17 15H19V22H17z" /><circle cx="18" cy="25" r="1.25" /><path d="m29,30H7c-.3499,0-.6743-.1829-.8555-.4823s-.1926-.6718-.0303-.9817L17.1143,7.536c.1726-.3296.5292-.536.8857-.536s.7131.2064.8857.536l11,21c.1624.3099.1509.6823-.0303.9817s-.5056.4823-.8555.4823Zm-20.3474-2h18.6948l-9.3474-17.8448-9.3474,17.8448Z" /><path d="m7,23H3c-.3467,0-.6685-.1794-.8506-.4742-.1824-.2948-.1987-.663-.0439-.973l2.5-5,1.7891.8945-1.7766,3.5527h2.3821v2Z" /><path d="M4.955 11.5H10.545V13.5H4.955z" transform="rotate(-63.435 7.75 12.5)" /><path d="m10.8945,8.4473l-1.7891-.8945,2.5-5c.1694-.3387.532-.5527.8945-.5527s.7251.214.8945.5527l2,4-1.7891.8945-1.1055-2.2112-1.6055,3.2112Z" /></svg>`;
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
