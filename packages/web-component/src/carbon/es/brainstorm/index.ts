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

export const ICON_NAME = `${ICON_PREFIX}icon-brainstorm`;
export class WebComponentIcon extends BaseIcon {
  render() {
    /**
     * The following HTML markup was generated using @carbon/icons 11.85.0.
     * @carbon/icons is licensed under Apache 2.0.
     * Source: https://github.com/carbon-design-system/carbon
     */
    return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32" preserveAspectRatio="xMidYMid"><path d="M18,30H4c-.5107,0-.9395-.3848-.9941-.8926-.041-.3789-1.0059-9.3242-1.0059-12.1074h2c0,2.1777.6514,8.623.8999,11h11.8726c-.1357-.7109-.2725-1.54-.2725-2h2c0,.4434.2783,1.8936.4766,2.7832.0654.2959-.0068.6055-.1963.8428-.1904.2363-.4766.374-.7803.374ZM29,24h-14c-.5093,0-.9375-.3828-.9937-.8896-.021-.1855-.5063-4.5664-.5063-6.1104h2c0,1.0352.2554,3.625.3989,5h12.0063l-.8184-9h-6.0869v-2h7c.5176,0,.9492.3945.9961.9097l1,10.9995c.0254.2803-.0684.5576-.2578.7656-.1895.207-.457.3252-.7383.3252ZM18,15H4c-.5171,0-.9492-.3945-.9961-.9097L2.0039,3.0903c-.0254-.2798.0684-.5571.2578-.7646s.4575-.3257.7383-.3257h14c.5176,0,.9492.3945.9961.9097l1,11c.0254.2798-.0684.5571-.2578.7646s-.457.3257-.7383.3257ZM4.9131,13h11.9917l-.8179-9H4.0952l.8179,9Z" /></svg>`;
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
