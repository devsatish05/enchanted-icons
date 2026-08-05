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

export const ICON_NAME = `${ICON_PREFIX}icon-thumbs-up-double-filled`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M31,13.2295v5.103c0,2.7286-1.6495,5.0769-4.0023,6.1077v-8.2107c0-2.3369-2.1663-4.2478-4.2363-4.2295h-5.7637s-.0024-3.4316-.0024-3.4316c-.0933-2.0102-1.1168-3.4102-2.1021-3.5719.0672-.4727.2256-1.6102.2313-1.6488.1216-.8206.3482-2.3478,1.8755-2.3478h1c1.7652,0,2.9976,1.4673,2.9976,3.5685l.0024,4.4315h5.7637c2.3374.0001,4.2363,1.8927,4.2363,4.2296ZM20.7614,14h0s-5.7637-.0001-5.7637-.0001l-.0024-4.4315c0-2.1012-1.2324-3.5685-2.9976-3.5685h-1c-1.5273,0-1.7539,1.5272-1.8755,2.3478-.0225.1509-.6826,4.8052-.6826,4.8052l-1.4423,2.7158-.0019,14.1313h11.3348c3.6763,0,6.6675-2.9912,6.6675-6.6675v-5.103c0-2.3369-1.8989-4.2295-4.2363-4.2295ZM4.9951,30l.0026-13H1.9977v13s2.9974,0,2.9974,0Z" /></svg>`;
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
