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

export const ICON_NAME = `${ICON_PREFIX}icon-prompt-template`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m31.5,23c-.8271,0-1.5-.6729-1.5-1.5v-1.5c0-1.1025-.8972-2-2-2h-2v2h2v1.5c0,.98.4072,1.8643,1.0581,2.5-.6509.6357-1.0581,1.52-1.0581,2.5v1.5h-2v2h2c1.1028,0,2-.8975,2-2v-1.5c0-.8271.6729-1.5,1.5-1.5h.5v-2h-.5Z" /><path d="m16,20v1.5c0,.8271-.6729,1.5-1.5,1.5h-.5v2h.5c.8271,0,1.5.6729,1.5,1.5v1.5c0,1.1025.8972,2,2,2h2v-2h-2v-1.5c0-.98-.4072-1.8643-1.0581-2.5.6509-.6357,1.0581-1.52,1.0581-2.5v-1.5h2v-2h-2c-1.1028,0-2,.8975-2,2Z" /><path d="m28,15h2V5c0-1.103-.8975-2-2-2h-3v2h3v10Z" /><circle cx="23" cy="13" r="2" /><circle cx="16" cy="13" r="2" /><circle cx="9" cy="13" r="2" /><path d="m7,23h-3c-1.103,0-2-.8975-2-2V5c0-1.103.897-2,2-2h3v2h-3v16h3v2Z" /></svg>`;
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
