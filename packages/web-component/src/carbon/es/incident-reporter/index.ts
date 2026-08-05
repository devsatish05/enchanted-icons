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

export const ICON_NAME = `${ICON_PREFIX}icon-incident-reporter`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M10,13h12v2h-12v-2ZM10,20h8v-2h-8v2ZM10,25h5v-2h-5v2ZM7,7h3v3h12v-3h3v6h2v-6c0-1.1045-.8955-2-2-2h-3v-1c0-1.1045-.8955-2-2-2h-8c-1.1045,0-2,.8955-2,2v1h-3c-1.1045,0-2,.8955-2,2v21c0,1.1045.8955,2,2,2h5v-2h-5V7ZM12,4h8v4h-8v-4ZM29.9108,28.9355l-6.2831-11.5649c-.2739-.4941-.9829-.4941-1.2568,0l-6.2831,11.5649c-.2607.48.0862,1.0645.6316,1.0645h12.5599c.5453,0,.8923-.5845.6315-1.0645ZM22.2493,21h1.5v4h-1.5v-4ZM22.9993,28c-.5522,0-.9993-.4478-.9993-1s.4478-1,1-1,1,.4478,1,1-.4485,1-1.0007,1Z" /></svg>`;
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
