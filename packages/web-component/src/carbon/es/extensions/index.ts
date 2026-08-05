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

export const ICON_NAME = `${ICON_PREFIX}icon-extensions`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M30.8664,10.1602L25.8664,1.5001c-.2764-.479-.8896-.6431-1.3662-.3662l-7.5,4.3302v-1.464c0-.5522-.4473-1-1-1H4.0002c-.5527,0-1,.4478-1,1v24c0,.5522.4473,1,1,1h24c.5527,0,1-.4478,1-1v-12c0-.5522-.4473-1-1-1h-3.5164l6.0164-3.4736c.4785-.2764.6426-.8877.3662-1.3662ZM5.0002,5.0001h10v10H5.0002V5.0001ZM5.0002,17.0001h10v10H5.0002v-10ZM27.0002,27.0001h-10v-10h10v10ZM17.0002,15.0001v-4.8562l2.8038,4.8562h-2.8038ZM21.7062,14.294l-4-6.9277,6.9277-4,4,6.9277-6.9277,4Z" /></svg>`;
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
