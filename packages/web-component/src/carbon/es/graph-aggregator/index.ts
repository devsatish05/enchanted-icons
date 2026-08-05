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

export const ICON_NAME = `${ICON_PREFIX}icon-graph-aggregator`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M3 18H5V30H3z" /><path d="M9 24H11V30H9z" /><path d="M15 16H17V30H15z" /><path d="M21 20H23V30H21z" /><path d="M27 14H29V30H27z" /><path d="M28,2c-1.1046,0-2,.8954-2,2,0,.178.0307.3475.0743.5117l-3.5624,3.5627c-.1644-.0437-.3339-.0745-.512-.0745-.3171,0-.6129.0805-.8793.2119l-3.1332-2.0887c.0026-.0416.0125-.081.0125-.1232,0-1.1046-.8954-2-2-2s-2,.8954-2,2c0,.279.0578.5443.1609.7855l-3.9287,5.238c-.0771-.009-.1527-.0234-.2322-.0234-.178,0-.3474.0307-.5116.0743l-3.5627-3.5627c.0436-.1642.0743-.3336.0743-.5116,0-1.1046-.8954-2-2-2s-2,.8954-2,2,.8954,2,2,2c.178,0,.3474-.0307.5116-.0743l3.5627,3.5627c-.0436.1642-.0743.3336-.0743.5116,0,1.1046.8954,2,2,2s2-.8954,2-2c0-.279-.0578-.5443-.1609-.7855l3.9286-5.238c.0771.009.1527.0234.2323.0234.3171,0,.6129-.0805.8793-.2119l3.1332,2.0887c-.0026.0416-.0125.081-.0125.1232,0,1.1046.8954,2,2,2s2-.8954,2-2c0-.178-.0307-.3474-.0743-.5116l3.5627-3.5627c.1642.0436.3336.0743.5116.0743,1.1046,0,2-.8954,2-2s-.8954-2-2-2Z" /></svg>`;
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
