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

export const ICON_NAME = `${ICON_PREFIX}icon-sensor`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M12.66,10.34l-1.42,1.42c1.14,1.13,1.76,2.64,1.76,4.24s-.62,3.11-1.76,4.24l1.42,1.42c1.51-1.51,2.34-3.52,2.34-5.66s-.83-4.15-2.34-5.66ZM16.9,6.1l-1.42,1.42c2.27,2.27,3.52,5.28,3.52,8.48s-1.25,6.21-3.52,8.48l1.42,1.42c2.64-2.65,4.1-6.16,4.1-9.9s-1.46-7.25-4.1-9.9ZM21.14,1.86l-1.42,1.42c3.41,3.39,5.28,7.91,5.28,12.72s-1.87,9.33-5.28,12.72l1.42,1.42c3.78-3.77,5.86-8.79,5.86-14.14s-2.08-10.37-5.86-14.14ZM9,16c0,1.1-.9,2-2,2v12h-2V2h2v12c1.1,0,2,.9,2,2Z" /></svg>`;
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
