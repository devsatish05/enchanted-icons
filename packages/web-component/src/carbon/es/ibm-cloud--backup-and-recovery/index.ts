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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-cloud-backup-and-recovery`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M15,24v2h-7.5c-4.2,0-7.5-3.4-7.5-7.5,0-3.6,2.6-6.7,6.1-7.4,0,0,.6-.1.9-.1h.2l-1.6-1.6,1.4-1.4,4,4-4,4-1.4-1.4,1.6-1.6h-.2c-2.4.2-4.6,2.3-4.9,4.7-.5,3.4,2.1,6.3,5.4,6.3h7.5ZM18,24c-.5,0-1,.5-1,1s.5,1,1,1,1-.5,1-1-.5-1-1-1ZM25.9,11.1l-.1-.1c-.8-4-3.9-7.1-7.9-7.8-.6-.2-1.3-.2-1.9-.2-2.9,0-5.6,1.3-7.4,3.3l1.5,1.5c1.2-1.4,2.9-2.5,4.9-2.7,1-.1,1.9-.1,2.9.1,3.2.7,5.5,3.4,6.1,6.5l.2,1c0,.0667.0333.1.1.1l1.1.2c1.2.2,2.3.7,3.1,1.5,1.3,1.3,1.9,3.1,1.5,4.9-.5,2.5-2.5,4.3-5,4.5l1.5-1.6-1.5-1.3-4,4,4,4,1.4-1.4-1.6-1.6h0c3.5-.2,6.4-2.7,7.1-6.1.1-.5.1-.9.1-1.3,0-3.7-2.5-6.8-6.1-7.5h0Z" /></svg>`;
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
