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

export const ICON_NAME = `${ICON_PREFIX}icon-kubernetes-worker-node`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M23 18v-2h-2.1c-.1-.6-.4-1.2-.7-1.8l1.5-1.5-1.4-1.4-1.5 1.5c-.5-.3-1.1-.6-1.8-.7V10h-2v2.1c-.6.1-1.2.4-1.8.7l-1.5-1.5-1.4 1.4 1.5 1.5c-.3.5-.6 1.1-.7 1.8H9v2h2.1c.1.6.4 1.2.7 1.8l-1.5 1.5 1.4 1.4 1.5-1.5c.5.3 1.1.6 1.8.7V24h2v-2.1c.6-.1 1.2-.4 1.8-.7l1.5 1.5 1.4-1.4-1.5-1.5c.3-.5.6-1.1.7-1.8H23Zm-7 2c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3Z" /><path d="m29.9483 18.9897-2.593-11.1865a2 2 0 0 0-1.124-1.3711l-9.407-4.2544C16.5623 2.059 16.2811 2 16.0001 2s-.5623.0591-.8242.1777L5.7687 6.4321a2 2 0 0 0-1.124 1.3711l-2.593 11.1865a2.0008 2.0008 0 0 0 .3899 1.7056l6.886 8.5586A2.0001 2.0001 0 0 0 10.8857 30h10.2286a2.0001 2.0001 0 0 0 1.5581-.7461l6.886-8.5586a2.0008 2.0008 0 0 0 .3899-1.7056ZM21.1143 28H10.886L4 19.4414l2.593-11.187L16 4l9.407 4.2549L28 19.4414 21.1142 28Z" /><path fill="none" d="M0 0h32v32H0z" /></svg>`;
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
