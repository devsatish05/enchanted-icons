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

export const ICON_NAME = `${ICON_PREFIX}icon-socket`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M29,30H3c-.5522,0-1-.4473-1-1V3c0-.5522.4478-1,1-1h26c.5527,0,1,.4478,1,1v26c0,.5527-.4473,1-1,1ZM4,28h24V4H4v24ZM16,26c-5.5142,0-10-4.4863-10-10s4.4858-10,10-10,10,4.4858,10,10-4.4863,10-10,10ZM16,8c-4.4111,0-8,3.5889-8,8s3.5889,8,8,8,8-3.5889,8-8-3.5889-8-8-8ZM13.5,16c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5,1.5.6716,1.5,1.5,1.5,1.5-.6716,1.5-1.5ZM21.5,16c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5,1.5.6716,1.5,1.5,1.5,1.5-.6716,1.5-1.5Z" /></svg>`;
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
