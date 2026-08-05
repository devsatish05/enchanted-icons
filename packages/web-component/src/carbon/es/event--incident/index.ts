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

export const ICON_NAME = `${ICON_PREFIX}icon-event-incident`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M21.0176 26.7217 22.016 28.4541 24.9938 26.7322 24.9938 30 26.9907 30 26.9907 26.7316 30.0016 28.4727 31 26.7402 27.9898 24.9996 30.9902 23.2646 29.9918 21.5322 26.9907 23.2677 26.9907 20 24.9938 20 24.9938 23.2672 21.9984 21.5352 21 23.2676 23.9954 24.9996 21.0176 26.7217z" /><path d="m16,23c-.8284,0-1.5.6716-1.5,1.5s.6716,1.5,1.5,1.5,1.5-.6716,1.5-1.5-.6716-1.5-1.5-1.5h0Z" /><path d="M15 12H17V21H15z" /><path d="m18,30H3c-.3494,0-.6736-.1824-.8547-.4811-.1814-.2986-.1936-.6703-.0325-.9802L15.1128,3.5387c.1721-.3311.5297-.5387.8872-.5387s.7151.2076.8872.5387l6.76,13-1.7744.9226-5.8728-11.2938L4.6472,28h13.3528v2Z" /></svg>`;
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
