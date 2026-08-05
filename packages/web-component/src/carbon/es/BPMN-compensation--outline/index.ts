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

export const ICON_NAME = `${ICON_PREFIX}icon-bpmn-compensation-outline`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29,25c-.1943,0-.3877-.0566-.5547-.168l-12-8c-.2783-.1855-.4453-.498-.4453-.832v8c0,.3691-.2031.708-.5283.8818-.3247.1729-.7197.1543-1.0264-.0498L2.4453,16.832c-.2783-.1855-.4453-.498-.4453-.832,0-.3345.167-.6465.4453-.832L14.4453,7.168c.3066-.2041.7017-.2236,1.0264-.0498.3252.1743.5283.5132.5283.8818v8c0-.3345.167-.6465.4453-.832l12-8c.3057-.2046.7021-.2241,1.0264-.0498.3252.1743.5283.5132.5283.8818v16c0,.3691-.2031.708-.5283.8818-.1475.0791-.3096.1182-.4717.1182ZM18.8027,16l9.1973,6.1318v-12.2632l-9.1973,6.1313ZM4.8027,16l9.1973,6.1318v-12.2632l-9.1973,6.1313Z" /></svg>`;
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
