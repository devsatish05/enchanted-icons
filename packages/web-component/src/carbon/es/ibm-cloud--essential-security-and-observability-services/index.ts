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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-cloud-essential-security-and-observability-services`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M16,5.0002v-2c7.168,0,13,5.832,13,13h-2c0-6.0654-4.9346-11-11-11ZM16,27c-6.0654,0-11-4.9344-11-10.9998h-2c0,7.168,5.832,12.9998,13,12.9998h2v-1.9999h-2ZM4.2769,12.3044l-1.8389,1.0618-1-1.7324,1.8396-1.0623c-.1661-.4971-.2776-1.0193-.2776-1.5715s.1115-1.0745.2776-1.5715l-1.8396-1.0623,1-1.7324,1.8389,1.0618c.7053-.7937,1.6443-1.3745,2.7231-1.5945v-2.1011h2v2.1011c1.0788.22,2.0178.8008,2.7231,1.5945l1.8389-1.0618,1,1.7324-1.8396,1.0623c.1661.4971.2776,1.0193.2776,1.5715s-.1115,1.0745-.2776,1.5715l1.8396,1.0623-1,1.7324-1.8389-1.0618c-.7053.7937-1.6443,1.3745-2.7231,1.5945v2.1011h-2v-2.1011c-1.0788-.22-2.0178-.8008-2.7231-1.5945ZM5,9c0,1.6543,1.3457,3,3,3s3-1.3457,3-3-1.3457-3-3-3-3,1.3457-3,3ZM30,18v6.4678c0,1.9238-1.123,3.6973-2.8613,4.5195l-2.1387,1.0127-2.1387-1.0117c-1.7383-.8232-2.8613-2.5977-2.8613-4.5205v-6.4678h10ZM28,20h-6v4.4678c0,1.1543.6738,2.2188,1.7168,2.7119l1.2832.6074,1.2832-.6074c1.043-.4932,1.7168-1.5576,1.7168-2.7119v-4.4678Z" /></svg>`;
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
