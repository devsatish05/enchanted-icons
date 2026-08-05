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

export const ICON_NAME = `${ICON_PREFIX}icon-document-subject`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m26,30h-5v-2h5v-2h-3c-1.1025,0-2-.8975-2-2v-2c0-1.103.8975-2,2-2h5v2h-5v2h3c1.1025,0,2,.8975,2,2v2c0,1.1025-.8975,2-2,2Z" /><path stroke-width="0" d="M10 20H16V22H10z" /><path stroke-width="0" d="M10 16H18V18H10z" /><path stroke-width="0" d="m24,16.9922h2v-6.9922c0-.1001,0-.2998-.1001-.3999-.0999-.1001-.0999-.2002-.2-.3003l-7-7c-.0999-.0996-.2-.1997-.3-.1997-.0999-.1001-.2998-.1001-.3999-.1001h-10c-.5,0-1,.2002-1.3999.6001-.4001.3999-.6001.8999-.6001,1.3999v24c0,.5.2,1,.6001,1.3999.3999.3999.8999.6001,1.3999.6001h7.9473v-2h-7.9473V4h8v6c0,.5.2,1,.6001,1.3999.3999.3999.8999.6001,1.3999.6001h6v4.9922Zm-6-6.9922v-5.6001l5.6001,5.6001h-5.6001Z" /></svg>`;
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
