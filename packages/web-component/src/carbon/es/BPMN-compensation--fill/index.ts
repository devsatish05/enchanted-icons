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

export const ICON_NAME = `${ICON_PREFIX}icon-bpmn-compensation-fill`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,8v16c0,.3691-.2031.708-.5283.8818-.3247.1729-.7197.1543-1.0264-.0498L2.4453,16.832c-.2783-.1855-.4453-.498-.4453-.832,0-.3345.167-.6465.4453-.832L14.4453,7.168c.3066-.2041.7017-.2236,1.0264-.0498.3252.1743.5283.5132.5283.8818ZM29.4717,7.1182c-.3242-.1743-.7207-.1548-1.0264.0498l-12,8c-.2783.1855-.4453.4976-.4453.832,0,.334.167.6465.4453.832l12,8c.167.1113.3604.168.5547.168.1621,0,.3242-.0391.4717-.1182.3252-.1738.5283-.5127.5283-.8818V8c0-.3687-.2031-.7075-.5283-.8818Z" /></svg>`;
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
