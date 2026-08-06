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

export const ICON_NAME = `${ICON_PREFIX}icon-ibm-cloud-vpc-block-storage-snapshots`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M28,30H4c-1.1,0-2-.9-2-2v-12h2v12h24V4h-12v-2h12c1.1,0,2,.9,2,2v24c0,1.1-.9,2-2,2ZM22.5,12.1l-6-3c-.3-.1-.6-.1-.9,0l-6,3c-.3.2-.5.5-.6.9v7c0,.4.2.7.6.9l6,3c.3.1.6.1.9,0l6-3c.3-.2.5-.5.6-.9v-7c0-.4-.2-.7-.5-.9h-.1ZM16,11.1l3.8,1.9-3.8,1.9-3.8-1.9s3.8-1.9,3.8-1.9ZM11,14.6l4,2v4.8l-4-2v-4.8ZM17,21.4v-4.8l4-2v4.8s-4,2-4,2ZM0,10h5v2H0v-2ZM12,0v5h-2V0h2ZM3.4,2l3.5,3.5-1.4,1.4-3.5-3.5,1.4-1.4Z" /></svg>`;
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
