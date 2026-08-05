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

export const ICON_NAME = `${ICON_PREFIX}icon-layers-external`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m16,24c-.1631,0-.3262-.0398-.4741-.1196l-13-7,.9482-1.7607,12.5259,6.7446,12.5259-6.7446.9482,1.7607-13,7c-.1479.0798-.311.1196-.4741.1196Z" /><path stroke-width="0" d="m16,30c-.1631,0-.3262-.0398-.4741-.1196l-13-7,.9482-1.7607,12.5259,6.7446,12.5259-6.7446.9482,1.7607-13,7c-.1479.0798-.311.1196-.4741.1196Z" /><path stroke-width="0" d="m29.4741,9.1196L16,1.8643v2.2715l10.8906,5.8643-10.8906,5.8643v2.2715l13.4741-7.2554c.324-.1743.5259-.5122.5259-.8804s-.2019-.7061-.5259-.8804Z" /><path stroke-width="0" d="m4.4141,9.4141l3.5859-3.586v8.1719s2,0,2,0V5.8281s3.5859,3.5859,3.5859,3.5859l1.4141-1.414L9,2,3,8l1.4141,1.4141Z" /></svg>`;
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
