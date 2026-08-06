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

export const ICON_NAME = `${ICON_PREFIX}icon-running`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m21.707,20.293l-5-5c-.1951-.1953-.451-.293-.707-.293s-.512.0977-.707.293L2,28.5859l1.4143,1.4141,12.5857-12.5859,3.5857,3.5859-5.5857,5.5859,1.4143,1.4141,2.292-2.292,4.0007-4.001c.1953-.1953.293-.4512.293-.707s-.0977-.5117-.293-.707Z" /><path d="m28.5859,9l-5.5859,5.5859-6.0012-6.0015c-.392-.3918-.9073-.5865-1.422-.5845-.5096.002-1.0185.1968-1.4063.5845l-6.1704,6.1753,1.4143,1.4141,6.1704-6.1748,6.7083,6.708c.1951.1953.4512.293.707.293s.512-.0977.707-.293l6.293-6.293-1.4141-1.4141Z" /><path d="m22.5,9c-1.9299,0-3.5-1.5701-3.5-3.5s1.5701-3.5,3.5-3.5,3.5,1.5701,3.5,3.5-1.5701,3.5-3.5,3.5Zm0-5c-.8271,0-1.5.6729-1.5,1.5s.6729,1.5,1.5,1.5,1.5-.6729,1.5-1.5-.6729-1.5-1.5-1.5Z" /></svg>`;
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
