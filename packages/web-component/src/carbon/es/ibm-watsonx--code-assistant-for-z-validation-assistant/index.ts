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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-watsonx-code-assistant-for-z-validation-assistant`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,2c-7.73,0-14,6.2821-14,14.0269,0,5.0697,2.69,9.5082,6.71,11.9731l1.1-1.6632c-3.48-2.104-5.81-5.9314-5.81-10.3098,0-6.6428,5.37-12.0231,12-12.0231s12,5.396,12,12.0388h2c0-7.7449-6.27-14.0426-14-14.0426ZM14,21.414l-5-5.001,1.413-1.413,3.587,3.586,7.585-7.586,1.415,1.415-9,8.999ZM26.58,24.41l1.42-1.41,4,4-4,4-1.41-1.42,2.58-2.58-2.59-2.59ZM22.5,32l-1.9149-.5771,2.9149-9.4229,1.9149.5771-2.9149,9.4229ZM19.42,29.59l-1.42,1.41-4-4,4-4,1.41,1.42-2.58,2.58,2.59,2.59Z" /></svg>`;
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
