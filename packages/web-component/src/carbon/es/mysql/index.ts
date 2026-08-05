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

export const ICON_NAME = `${ICON_PREFIX}icon-mysql`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.76.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="m28.2471,11.9248h3.1748l-4.6465,13.938c-.3066.9351-.7402,1.6255-1.2998,2.0703-.5596.4443-1.3604.667-2.4033.667h-2.1162v-2.645h2.2773l.4141-1.334-4.2324-12.6963h3.3818l1.7705,5.6353.874,3.4961h.1377l.8975-3.4961,1.7705-5.6353Z" /><path d="M14.2178 13.4658 14.1484 13.4658 12.9756 15.812 9.8477 21.4932 6.7891 15.835 5.5693 13.3052 5.501 13.3052 5.501 24 2.2119 24 2.2119 7.9458 5.915 7.9458 9.8477 15.4668 9.8936 15.4668 13.7812 7.9458 17.5068 7.9458 17.5068 24 14.2178 24 14.2178 13.4658z" /></svg>`;
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
