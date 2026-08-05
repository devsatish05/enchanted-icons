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

export const ICON_NAME = `${ICON_PREFIX}icon-requirement-definition`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path stroke-width="0" d="m17.1788,17.4959c0-2.8367,1.5301-4.6764,4.1606-4.6764,2.8025,0,4.0919,2.0631,4.0919,4.5217v.7221h-5.9658v.2235c0,1.2894.7392,2.1663,2.1834,2.1663,1.0833,0,1.7365-.5158,2.2867-1.2207l1.1863,1.3239c-.7392,1.0143-2.0459,1.6505-3.7137,1.6505-2.6475,0-4.2293-1.8397-4.2293-4.7109Zm2.2867-.9284v.1377h3.6791v-.1548c0-1.2379-.6362-2.0803-1.7709-2.0803-1.152,0-1.9083.8597-1.9083,2.0975Z" /><path stroke-width="0" d="m9.2694,22h-2.2693v-12h5.4154c2.1835,0,3.5416,1.4441,3.5416,3.7135,0,1.6504-.7565,2.9054-2.2349,3.4039l2.4584,4.8826h-2.5271l-2.2349-4.6247h-2.1492v4.6247Zm3.1215-6.533c.8769,0,1.4097-.4813,1.4097-1.3581v-.7909c0-.8769-.5328-1.341-1.4097-1.341h-2.9227v3.4899h2.9227Z" /><path stroke-width="0" d="m28,30H4c-1.1046,0-2-.8954-2-2V4c0-1.1046.8954-2,2-2h24c1.1046,0,2,.8954,2,2v24c0,1.1046-.8954,2-2,2Zm-24-2h24V4H4v24Z" /></svg>`;
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
