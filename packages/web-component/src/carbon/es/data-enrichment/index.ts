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

export const ICON_NAME = `${ICON_PREFIX}icon-data-enrichment`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><switch><g><path d="M28 13h2v2h-2zM23.778 4.797l1.414-1.414 1.414 1.414-1.414 1.414zM15 0h2v2h-2zM6.808 6.233 5.393 4.818l1.415-1.414 1.414 1.414zM2 13h2v2H2zM13 30h6v2h-6zM11 26h10v2H11zM16 4C10.5 4 6 8.5 6 14c0 4.4 2 6.3 3.5 7.6 1 .9 1.5 1.5 1.5 2.4h2c0-1.8-1.1-2.9-2.2-3.9C9.4 18.9 8 17.5 8 14c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.5-1.4 4.9-2.8 6.1-1.1 1-2.2 2-2.2 3.9h2c0-.9.5-1.5 1.5-2.4C24 20.3 26 18.4 26 14c0-5.5-4.5-10-10-10z" /><path fill="none" d="M0 0h32v32H0z" /></g></switch></svg>`;
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
