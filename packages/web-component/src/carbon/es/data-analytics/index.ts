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

export const ICON_NAME = `${ICON_PREFIX}icon-data-analytics`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M12 11H14V17H12z" /><path d="M7 13H9V17H7z" /><path d="M2 7H4V17H2z" /><path d="m30,28.5859l-7.5522-7.5522c1.5918-1.9082,2.5522-4.3604,2.5522-7.0337,0-6.0654-4.9346-11-11-11-2.4026,0-4.6853.7607-6.6013,2.2002l1.2012,1.5991c1.5669-1.1772,3.4343-1.7993,5.4001-1.7993,4.9626,0,9,4.0371,9,9s-4.0374,9-9,9c-2.8574,0-5.4819-1.312-7.2007-3.6001l-1.5991,1.2017c2.1001,2.7949,5.3076,4.3984,8.7998,4.3984,2.6733,0,5.1255-.9604,7.0337-2.5522l7.5522,7.5522,1.4141-1.4141Z" /></svg>`;
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
