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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-deployable-architecture`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29,18c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2ZM24,4c0-1.1-.9-2-2-2s-2,.9-2,2,.9,2,2,2,2-.9,2-2ZM24,28c0-1.1-.9-2-2-2s-2,.9-2,2,.9,2,2,2,2-.9,2-2ZM25,15h-4.11c1.3-1.27,2.11-3.04,2.11-5v-2h-2v2c0,2.76-2.24,5-5,5h-7v2h7c2.76,0,5,2.24,5,5v2h2v-2c0-1.96-.81-3.73-2.11-5h4.11v-2ZM11.63,20.29l-.04.02-1.31.77-1.28.76-5-2.96v-5.76l5-2.96,1.28.76,1.31.77.04.02,1.71,1.02,1.02-1.72-1.71-1.02-.04-.02-1.33-.78-1.77-1.05c-.16-.09-.33-.14-.51-.14s-.35.05-.51.14l-6,3.55c-.3.18-.49.51-.49.86v6.9c0,.35.19.68.49.86l6,3.55c.16.09.33.14.51.14s.35-.05.51-.14l1.77-1.05,1.33-.78.04-.02,1.71-1.02-1.02-1.72-1.71,1.02Z" /></svg>`;
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
