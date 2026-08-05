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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-databand`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M27.69,16.37c.84.83,1.31,1.97,1.31,3.15,0,1.19-.47,2.33-1.32,3.17-.88.87-2.03,1.31-3.18,1.31s-2.31-.44-3.19-1.31c-.59-.59-7.76-7.72-10.76-10.7l-1.27-1.27c-.59-.61-1.46-.84-2.28-.66-.47.11-.91.31-1.26.66-.47.47-.73,1.1-.73,1.76s.26,1.29.73,1.76c.52.51,6.74,6.7,6.74,6.7l-1.42,1.41-6.74-6.7c-.85-.85-1.32-1.97-1.32-3.17s.47-2.32,1.32-3.17c.85-.85,1.98-1.31,3.18-1.31s2.33.47,3.18,1.31l1.27,1.27,10.76,10.7c.98.97,2.56.97,3.54,0,.47-.47.73-1.1.73-1.76s-.26-1.29-.73-1.76l-6.73-6.69,1.42-1.41,6.74,6.7h0l.01.01ZM16,2c2.21,0,4,1.79,4,4s-1.79,4-4,4h0c-2.21,0-4-1.79-4-4s1.79-4,4-4h0ZM16.02,8c1.09,0,1.98-.9,1.98-2s-.89-2-1.98-2h-.09c-1.1.03-1.96.95-1.93,2.04h0c.02,1.1.92,1.97,2.02,1.95h0v.01ZM20,26c0,2.21-1.79,4-4,4s-4-1.79-4-4,1.79-4,4-4,4,1.79,4,4ZM16.02,28c1.09,0,1.98-.9,1.98-2s-.89-2-1.98-2h-.09c-1.1.03-1.96.95-1.93,2.04h0c.02,1.1.92,1.97,2.02,1.95h0v.01Z" /></svg>`;
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
