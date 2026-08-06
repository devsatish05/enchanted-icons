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

export const ICON_NAME = `${ICON_PREFIX}icon-documentation`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29.3164,9.4912l-8.0041-6.997c-.3644-.3186-.8322-.4942-1.3163-.4942H4c-1.1046,0-2,.8954-2,2v24c0,1.1046.8954,2,2,2h24c1.1046,0,2-.8954,2-2V10.997c0-.577-.2493-1.126-.6837-1.5058ZM28,13v15H4V4h14v7c0,1.1046.8954,2,2,2l8,.0012M6,14h4.3682c3.1294,0,5.1758,2.0088,5.1758,5.998s-2.0464,6.002-5.1758,6.002h-4.3682v-12ZM10.3682,23.9883c1.6851,0,2.7686-.998,2.7686-3.0439v-1.8887c0-2.0469-1.0835-3.0439-2.7686-3.0439h-2.0981v7.9766h2.0981ZM17,21.4941c0-2.8711,1.5991-4.6768,4.1611-4.6768,2.5796,0,4.1792,1.8057,4.1792,4.6768,0,2.8896-1.5996,4.7119-4.1792,4.7119-2.562,0-4.1611-1.8223-4.1611-4.7119ZM23.0356,22.3369v-1.668c0-1.3408-.7222-2.0811-1.8745-2.0811-1.1348,0-1.8569.7402-1.8569,2.0811v1.668c0,1.3584.7222,2.0986,1.8569,2.0986,1.1523,0,1.8745-.7402,1.8745-2.0986Z" /></svg>`;
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
