import React from 'react'

import Logo from "../../images/logo.png"
import Twitter from "../../images/twitter.svg"
import Instagram from "../../images/instagram.svg"
import Mediumicon from "../../images/medium icon.svg" 
import Discord from "../../images/discord.svg"


export default function Footer() {
    return (
        <div>
             <div class="footer wf-section">
        <div class="div-block-590"></div>
        <div class="paddings">
          <div class="div-block-591">
            <a href="/"
              aria-current="page"
              class="link-block-90 w-inline-block w--current" >
              <img
                src={Logo}
                class="footer_logo"
                loading="lazy"
                alt="NBA DUNKS"
              />
            </a>
            <div
              id="w-node-_28545503-cb04-2b30-9572-c3ead0db2bb2-d0db2bac"
              class="div-block-592"
            >
              <a href="/" class="link-block-79 w-inline-block w--current">
                <div class="menu">Copyright</div>
              </a>
              <a href="#" class="link-block-79 w-inline-block">
                <div class="menu">Privacy Policy </div>
              </a>
              <a href="#" class="link-block-79 w-inline-block">
                <div class="menu">Terms and conditions </div>
              </a>
            </div>
            <div
              id="w-node-_28545503-cb04-2b30-9572-c3ead0db2bbf-d0db2bac"
              class="div-block-593"
            >
             
              <a href="#" target="_blank" class="link-block-80 w-inline-block">
                <img
                  src={Twitter}
                  loading="lazy"
                  alt="Twitter Logo"
                  class="image-3"
                />
              </a>
              <a href="#" target="_blank" class="link-block-80 w-inline-block">
                <img
                  src={Instagram}
                  loading="lazy"
                  alt="Instagram logo"
                  class="image-3"
                />
              </a>
              <a href="#" target="_blank" class="link-block-80 w-inline-block">
                <img
                  src={Mediumicon}
                  loading="lazy"
                  alt="medium_icon_svg"
                  class="image-3 full-screen-menu"
                />
              </a>
              <a
                href="#"
                target="_blank"
                class="link-block-80 last w-inline-block"
              >
                <img
                  src={Discord}
                  loading="lazy"
                  alt="Discord logo"
                  class="image-3"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="div-block-590"></div>
        <div class="paddings footer">
          <div class="div-block-591 last-footer">
            <div>
              <div class="text-block-23">NBA DUNKS.</div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
