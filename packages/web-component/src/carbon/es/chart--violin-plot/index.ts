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

export const ICON_NAME = `${ICON_PREFIX}icon-chart-violin-plot`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z" /><path d="M14.86,7.8232,13,4.7231V2H11V4.7231l-1.86,3.1A7.9986,7.9986,0,0,0,8,11.939v.122a7.9961,7.9961,0,0,0,1.14,4.1158l1.86,3.1V26h2V19.2769l1.86-3.1A7.9986,7.9986,0,0,0,16,12.061v-.122A7.9961,7.9961,0,0,0,14.86,7.8232ZM12,6.9434l1.145,1.9087A6.0027,6.0027,0,0,1,13.9185,11h-3.837a6.0086,6.0086,0,0,1,.7735-2.1484Zm0,10.1132-1.145-1.9087A6.0027,6.0027,0,0,1,10.0815,13h3.837a6.0086,6.0086,0,0,1-.7735,2.1484Z" /><path d="M27.86,11.8232,26,8.7231V2H24V8.7231l-1.86,3.1A7.9986,7.9986,0,0,0,21,15.939v.122a7.9961,7.9961,0,0,0,1.14,4.1158l1.86,3.1V26h2V23.2769l1.86-3.1A7.9986,7.9986,0,0,0,29,16.061v-.122A7.9961,7.9961,0,0,0,27.86,11.8232Zm-2.86-.88,1.145,1.9087A6.0027,6.0027,0,0,1,26.9185,15h-3.837a6.0086,6.0086,0,0,1,.7735-2.1484Zm0,10.1132-1.145-1.9087A6.0027,6.0027,0,0,1,23.0815,17h3.837a6.0086,6.0086,0,0,1-.7735,2.1484Z" /></svg>`;
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
