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

export const ICON_NAME = `${ICON_PREFIX}icon-action-definition`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m17.98,17.4922c0-2.8734,1.4971-4.68,4.1466-4.68,1.8067,0,2.9939.8603,3.5272,2.2712l-1.8067.8087c-.2065-.7571-.7743-1.3076-1.7206-1.3076-1.2215,0-1.841.8602-1.841,2.1162v1.6345c0,1.2561.6194,2.0992,1.841,2.0992,1.0496,0,1.5657-.6023,1.8927-1.411l1.686.8087c-.5849,1.5829-1.841,2.3744-3.5788,2.3744-2.6496,0-4.1466-1.8238-4.1466-4.7144Z" /><path stroke-width="0" d="m14.623,22.0001l-.9635-3.0626h-4.267l-.9465,3.0626h-2.3055l4.026-12.0096h2.8217l3.9917,12.0096h-2.357Zm-3.0627-9.9449h-.0861l-1.5311,4.9381h3.1659l-1.5486-4.9381Z" /><path stroke-width="0" d="m28,30H4c-1.1046,0-2-.8954-2-2V4c0-1.1046.8954-2,2-2h24c1.1046,0,2,.8954,2,2v24c0,1.1046-.8954,2-2,2Zm-24-2h24V4H4v24Z" /></svg>`;
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
