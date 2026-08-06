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

export const ICON_NAME = `${ICON_PREFIX}icon-purchasing-organizations`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,16c-1.1046,0-2-.8954-2-2s.8954-2,2-2,2,.8954,2,2-.8954,2-2,2ZM31,23v8h-8v-3h-14.5c-3.58,0-6.5-2.92-6.5-6.5,0-3.41,2.65-6.22,6-6.48v2.01c-2.25.25-4,2.16-4,4.47,0,2.48,2.02,4.5,4.5,4.5h14.5v-3h8ZM29,25h-4v4h4v-4ZM22.3,14.3c0,1.36-.45,2.71-1.27,3.79,0,0-.15.21-.19.24l-4.84,5.72-4.99-5.9c-.86-1.14-1.32-2.49-1.31-3.85,0-3.47,2.82-6.3,6.3-6.3s6.3,2.83,6.3,6.3ZM20.3,14.3c0-2.37-1.93-4.3-4.3-4.3s-4.3,1.93-4.3,4.3c0,.93.31,1.85.88,2.6l.13.17,3.29,3.88,3.44-4.07c.56-.74.86-1.65.86-2.58ZM30,10.5c0,3.41-2.65,6.22-6,6.48v-2.01c2.25-.25,4-2.16,4-4.47,0-2.48-2.02-4.5-4.5-4.5h-14.5v3H1V1h8v3h14.5c3.58,0,6.5,2.92,6.5,6.5ZM7,3H3v4h4V3Z" /></svg>`;
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
