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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-instana`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M9 13H11V19H9z" /><path d="M21 13H23V19H21z" /><path d="M13 11H15V24H13z" /><path d="M17 9H19V22H17z" /><circle cx="22" cy="5" r="2" /><circle cx="10" cy="27" r="2" /><path d="m22.0916,28h-8.0916v-2h8.0916l5.9082-10-2.6992-4.5679,1.7227-1.0176,2.6992,4.5679c.3701.6274.3701,1.4077,0,2.0352l-5.9092,10c-.3574.6055-1.0176.9824-1.7217.9824Z" /><path d="m4.9768,21.5859l-2.6992-4.5684c-.3701-.6274-.3701-1.4077,0-2.0352l5.9092-10c.3584-.606,1.0176-.9824,1.7217-.9824h8.0916v2h-8.0916l-5.9082,10,2.6992,4.5684-1.7227,1.0176Z" /></svg>`;
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
