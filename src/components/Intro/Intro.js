import React from "react";
import "./site.js";
import "./edipLogo.css";
import "../../IntersectionObserver.js";

const Intro = () => {
    return (
      <div id="introSectionID" className="sectionAnimation" >
        <div className="header-wraper" >
            
            <div className="main-info">
            
              <svg className="logo" viewBox="0 0 1000 384">
        
              <defs>
                <radialGradient cx="50%" cy="0%" fx="50%" fy="0%" r="50%" id="radialGradient-1">
                    <stop stop-color="#329FFF" offset="0%"></stop>
                    <stop stop-color="#206EFF" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient cx="50%" cy="0%" fx="50%" fy="0%" r="50%" id="radialGradient-2">
                    <stop stop-color="#FF7894" offset="0%"></stop>
                    <stop stop-color="#FF324A" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient cx="50%" cy="0%" fx="50%" fy="0%" r="100%" id="radialGradient-3">
                    <stop stop-color="#FF7894" offset="0%"></stop>
                    <stop stop-color="#FF324A" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient cx="50%" cy="0%" fx="50%" fy="0%" r="100%" id="radialGradient-4">
                    <stop stop-color="#359FFC" offset="0%"></stop>
                    <stop stop-color="#206EFF" offset="100%"></stop>
                  </radialGradient>
                  <radialGradient cx="50%" cy="0%" fx="50%" fy="0%" r="50%" id="radialGradient-5">
                    <stop stop-color="#5FFFD2" offset="0%"></stop>
                    <stop stop-color="#31FFA6" offset="100%"></stop>
                  </radialGradient>
                </defs>
                
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <rect id="dot-js" fill="#FFFFFF" x="80" y="352" width="32" height="32" rx="16"></rect>
                  <g id="lines" transform="translate(128.000000, 256.000000)">   
                    <path d="m10.562 29.758c-5.1576-1.6487-8.9883-6.1569-9.9368-11.694-0.68481-3.9979 0.66006-8.5106 3.4666-11.632 6.3477-7.0601 17.54-6.3298 22.779 1.4864 1.9526 2.9131 2.3506 4.5278 2.5585 10.381l0.17906 5.04h-14.491v7.04l-1.36-0.01721c-0.748-0.0095-2.1863-0.28135-3.1962-0.60419zm4.2362-10.259v-3.52h7.1243l-0.17475-1.3029c-0.49015-3.6543-4.8026-6.4261-8.4642-5.4401-0.6967 0.1876-1.861 0.77159-2.5873 1.2978-4.2895 3.1073-3.254 10.234 1.7459 12.016 2.3872 0.85102 2.3561 0.89133 2.3561-3.0513z" id="line-e" stroke="#31FFA6" stroke-width="1" transform="translate(0, 0)" ></path>
                    
                    <path d="m16.36 72.306c-5.7474-1.5058-10.477-5.3849-13.014-10.674-1.6613-3.4633-2.0949-5.3484-2.0949-9.109 0-5.3678 2.053-10.402 5.749-14.098 4.0061-4.0061 7.9238-5.7393 13.627-6.0283 3.4992-0.17734 7.3291 0.5388 9.8173 1.8357 0.67478 0.35171 1.2944 0.63948 1.377 0.63948s0.15015-7.488 0.15015-16.64v-16.64h9.92v71.36h-10.24l-0.0038-10.32c-0.0041-11.139-0.14891-12.406-1.7242-15.094-0.85394-1.4571-2.421-2.8617-4.352-3.9007-0.8597-0.46257-1.7894-0.60263-4-0.60263-3.1457 0-4.0175 0.30479-6.4092 2.2409-3.9809 3.2224-4.4459 9.7466-0.98301 13.792 1.3404 1.566 3.8099 2.9423 5.7582 3.2094l1.474 0.20204v10.473l-1.36-0.01763c-0.748-0.0097-2.409-0.29245-3.691-0.62835z" id="line-d" stroke="#206EFF" stroke-width="1"></path>

                    <path d="M192,48 L192,64 C192,90.509668 213.490332,112 240,112" id="line-i-1" stroke="#31FFA6" stroke-width="32"></path>

                    <path d="m4.1887 73.243c-0.08561-0.22473-0.11858-16.321-0.07326-35.769l0.0824-35.36 10.417 0.029726c9.6619 0.027571 10.578 0.079023 12.64 0.70973 6.439 1.9698 12.039 7.9245 13.738 14.608 0.62188 2.4465 0.62188 7.1791 0 9.6255-0.93858 3.6923-2.5774 6.4725-5.5644 9.4397-1.7205 1.7091-3.4922 3.1203-4.7303 3.7679-2.2755 1.1901-6.2856 2.2996-8.3117 2.2996h-1.3888v-10.471l1.5828-0.18746c1.8303-0.21677 3.174-0.8379 4.9865-2.305 3.9809-3.2224 4.4459-9.7467 0.98301-13.792-1.3404-1.566-3.8099-2.9423-5.7582-3.2094-0.81071-0.11112-1.474-0.32646-1.474-0.47854 0-0.15208-1.6553-0.2765-3.6784-0.2765h-3.6784l-0.1632 61.6-4.7267 0.08859c-3.6053 0.06757-4.7637-0.0084-4.8824-0.32z" id="line-p" stroke="#FF324A" stroke-width="1"></path>
                    
                    <path d="M 11.672046,69.781012 C 9.3951366,69.107764 8.2651933,68.55305 5.3544426,66.679565 2.1797198,64.636173 2.1164146,64.327543 4.1694592,60.902407 c 0.930472,-1.552326 1.3617645,-2.870409 1.5099273,-2.929075 0,0 0.1031451,-0.334418 0.3881305,-0.607498 C 6.2475431,57.193329 6.6900098,56.817506 6.6900098,56.817506 6.9284045,56.625875 7.2175073,56.450008 7.2175073,56.450008 7.3596647,56.395833 7.72,56.319998 8.16,56.319998 c 0.44,0 1.7960938,0.776812 1.7960938,0.952812 0,0.176 -0.7955002,-0.312812 -0.5503303,-0.312812 0.2451699,0 0.9685175,0.51888 1.0559385,0.746694 0.08742,0.227817 0.663317,0.566765 1.831266,1.159584 1.856633,0.942378 2.420491,1.075942 4.486052,1.06263 5.01945,-0.03234 8.779491,-3.152607 9.747458,-8.088908 0.439123,-2.239376 0.223182,-3.896979 -0.775749,-5.954813 -1.285363,-2.647894 -2.497985,-3.674003 -5.66038,-4.789759 C 18.076036,40.384734 14.568546,37.890734 12.785683,35.901448 9.901031,32.682805 7.68,27.118405 7.68,23.110064 c 0,-2.646546 1.2150624,-6.594499 2.875255,-9.342211 3.98876,-6.6016226 10.768488,-10.2159949 18.489644,-9.8571002 3.674647,0.1708048 6.190544,0.9480227 9.30345,2.8740488 C 40.978496,8.4121321 42,9.4295158 42,10.42172 c 0,0.419857 -0.838384,2.149086 -1.863078,3.84273 -2.377421,3.929478 -3.313559,4.369958 -5.427284,2.553691 -3.02067,-2.595585 -7.506183,-3.277743 -10.837051,-1.648102 -2.102897,1.028852 -3.087314,1.924214 -4.322248,3.931237 -1.35435,2.2011 -1.744568,4.897706 -0.995225,6.877516 1.045833,2.76315 2.586986,4.229217 6.506891,6.189869 5.668443,2.835235 8.468635,5.417158 10.245214,9.446627 C 39.771578,51.74092 35.518342,63.631012 25.76,68.304938 21.451879,70.368384 15.697561,70.9713 11.672046,69.781012 Z"
                    id="line-s" stroke="#206EFF" stroke-width="1"></path>

                    <path d="m12.841 30.644c-4.7861-1.1263-9.1653-5.3383-10.592-10.188-0.73851-2.5099-0.66911-6.614 0.15313-9.0547 1.6901-5.0169 5.8686-8.8076 10.898-9.8861 0.94252-0.20214 2.9421-0.29088 4.523-0.20074 2.448 0.13958 3.1645 0.32509 5.2654 1.3634 3.8625 1.9089 6.528 5.0161 7.7809 9.07 0.5587 1.8078 0.62852 2.9897 0.62852 10.64v8.6063h-7.68v-16.567l-0.8939-1.7165c-0.6875-1.3202-1.2971-1.9616-2.64-2.7779-1.6136-0.98082-1.9183-1.0534-4.015-0.95636-2.8538 0.1321-4.48 1.1073-5.8995 3.5382-0.88491 1.5153-0.97124 1.9015-0.8826 3.9485 0.079558 1.8373 0.26547 2.5215 0.97734 3.5973 1.1397 1.7222 3.0526 2.9695 4.8678 3.1741l1.4459 0.16297v7.5968l-1.36-0.03214c-0.748-0.01768-1.9074-0.16097-2.5765-0.31842z" id="line-a-1" stroke="#FF324A" stroke-width="1"></path>

                    <path d="m12.841 30.644c-4.7861-1.1263-9.1653-5.3383-10.592-10.188-0.73851-2.5099-0.66911-6.614 0.15313-9.0547 1.6901-5.0169 5.8686-8.8076 10.898-9.8861 0.94252-0.20214 2.9421-0.29088 4.523-0.20074 2.448 0.13958 3.1645 0.32509 5.2654 1.3634 3.8625 1.9089 6.528 5.0161 7.7809 9.07 0.5587 1.8078 0.62852 2.9897 0.62852 10.64v8.6063h-7.68v-16.567l-0.8939-1.7165c-0.6875-1.3202-1.2971-1.9616-2.64-2.7779-1.6136-0.98082-1.9183-1.0534-4.015-0.95636-2.8538 0.1321-4.48 1.1073-5.8995 3.5382-0.88491 1.5153-0.97124 1.9015-0.8826 3.9485 0.079558 1.8373 0.26547 2.5215 0.97734 3.5973 1.1397 1.7222 3.0526 2.9695 4.8678 3.1741l1.4459 0.16297v7.5968l-1.36-0.03214c-0.748-0.01768-1.9074-0.16097-2.5765-0.31842z" id="line-a-2" stroke="#206EFF"  stroke-width="1"></path>

                    <path d="M 3.5964262,16.182179 3.4606532,0.44436606 6.8572233,0.39794627 10.335703,0.45137456 10.3315,5.185633 c -4.37e-4,0.4916049 -0.115247,-0.057623 2.018665,-1.0292707 4.113401,-1.8729804 7.675178,-1.7860695 12.650977,1.3681278 1.727351,1.0949813 3.897879,3.8896512 3.057761,4.335842 -1.161629,0.6169469 0.481821,-0.2835933 -1.636255,0.9164439 -0.78077,0.424227 -0.790978,0.408788 -2.894779,1.433117 -1.205591,0.586993 -1.334466,0.901817 -1.573472,0.560932 -1.446879,-2.063624 -2.472067,-2.309173 -3.633898,-2.449255 -2.903099,-0.3500276 -5.432018,0.304013 -7.040192,2.729539 -0.888127,1.339518 -0.890444,1.359373 -1.0006,8.577697 l -0.05279,7.235071 H 6.8828641 3.5964262 Z" id="line-r" stroke="#31FFA6" stroke-width="1"></path>

                    <path d="m23.034 42.228c-3.277-0.77845-7.7515-3.5408-10.248-6.3268-2.8847-3.2186-5.1057-8.783-5.1057-12.791 0-2.6465 1.2151-6.5945 2.8753-9.3422 3.9888-6.6016 10.768-10.216 18.49-9.8571 3.6746 0.1708 6.1905 0.94802 9.3034 2.874 2.3696 1.4661 3.3936 2.3902 3.6927 3.3324 0.23914 0.75346-3.3785 6.9998-4.3574 7.5237-0.81658 0.43702-1.1482 0.0099-2.8772-1.1827-3.3017-2.2775-7.5929-2.9227-10.934-1.2881-2.1029 1.0289-3.0873 1.9242-4.3222 3.9312-2.5896 4.2087-1.9488 9.0596 2.6688 12.47 1.3484 0.99595 2.0701 1.2694 4.8385 1.2694 2.7676 0 3.4655-0.36154 5.8938-1.6176 3.2557-1.684 3.5832-2.2489 4.3995-1.5384 0.87998 0.76598 3.929 6.1999 3.929 7.0022 0 0.3596-0.252 0.87892-0.56 1.1541-1.0903 0.97396-6.7011 3.7158-8.6231 4.2138-2.0809 0.53922-7.1172 0.63557-9.0628 0.17337z" id="line-c" stroke="#31FFA6" stroke-width="1"></path>
                  </g>

                  <g id="fills" transform="translate(112.000000, 256.000000)">

                    <path d="M224,64 C224,81.673112 238.326888,96 256,96 L256,128 C220.653776,128 192,99.346224 192,64 L192,48 L192,48 L224,48 L224,64" id="fill-i-1" fill="url(#radialGradient-5)"></path>
                  
                    <path id="fill-e" d="m10.562 29.758c-5.1576-1.6487-8.9883-6.1569-9.9368-11.694-0.68481-3.9979 0.66006-8.5106 3.4666-11.632 6.3477-7.0601 17.54-6.3298 22.779 1.4864 1.9526 2.9131 2.3506 4.5278 2.5585 10.381l0.17906 5.04h-14.491v7.04l-1.36-0.01721c-0.748-0.0095-2.1863-0.28135-3.1962-0.60419zm4.2362-10.259v-3.52h7.1243l-0.17475-1.3029c-0.49015-3.6543-4.8026-6.4261-8.4642-5.4401-0.6967 0.1876-1.861 0.77159-2.5873 1.2978-4.2895 3.1073-3.254 10.234 1.7459 12.016 2.3872 0.85102 2.3561 0.89133 2.3561-3.0513z"  fill="url(#radialGradient-5)"></path>

                    <path id="fill-d" d="m16.36 72.306c-5.7474-1.5058-10.477-5.3849-13.014-10.674-1.6613-3.4633-2.0949-5.3484-2.0949-9.109 0-5.3678 2.053-10.402 5.749-14.098 4.0061-4.0061 7.9238-5.7393 13.627-6.0283 3.4992-0.17734 7.3291 0.5388 9.8173 1.8357 0.67478 0.35171 1.2944 0.63948 1.377 0.63948s0.15015-7.488 0.15015-16.64v-16.64h9.92v71.36h-10.24l-0.0038-10.32c-0.0041-11.139-0.14891-12.406-1.7242-15.094-0.85394-1.4571-2.421-2.8617-4.352-3.9007-0.8597-0.46257-1.7894-0.60263-4-0.60263-3.1457 0-4.0175 0.30479-6.4092 2.2409-3.9809 3.2224-4.4459 9.7466-0.98301 13.792 1.3404 1.566 3.8099 2.9423 5.7582 3.2094l1.474 0.20204v10.473l-1.36-0.01763c-0.748-0.0097-2.409-0.29245-3.691-0.62835z" fill="url(#radialGradient-1)"></path>

                    <circle id="dot-i" fill="url(#radialGradient-5)" cx="208" cy="16" r="16"></circle>

                    <path id="fill-p" d="m4.1887 73.243c-0.08561-0.22473-0.11858-16.321-0.07326-35.769l0.0824-35.36 10.417 0.029726c9.6619 0.027571 10.578 0.079023 12.64 0.70973 6.439 1.9698 12.039 7.9245 13.738 14.608 0.62188 2.4465 0.62188 7.1791 0 9.6255-0.93858 3.6923-2.5774 6.4725-5.5644 9.4397-1.7205 1.7091-3.4922 3.1203-4.7303 3.7679-2.2755 1.1901-6.2856 2.2996-8.3117 2.2996h-1.3888v-10.471l1.5828-0.18746c1.8303-0.21677 3.174-0.8379 4.9865-2.305 3.9809-3.2224 4.4459-9.7467 0.98301-13.792-1.3404-1.566-3.8099-2.9423-5.7582-3.2094-0.81071-0.11112-1.474-0.32646-1.474-0.47854 0-0.15208-1.6553-0.2765-3.6784-0.2765h-3.6784l-0.1632 61.6-4.7267 0.08859c-3.6053 0.06757-4.7637-0.0084-4.8824-0.32z"  fill="url(#radialGradient-2)"></path>

                    <path id="fill-s" d="M 11.672046,69.781012 C 9.3951366,69.107764 8.2651933,68.55305 5.3544426,66.679565 2.1797198,64.636173 2.1164146,64.327543 4.1694592,60.902407 c 0.930472,-1.552326 1.3617645,-2.870409 1.5099273,-2.929075 0,0 0.1031451,-0.334418 0.3881305,-0.607498 C 6.2475431,57.193329 6.6900098,56.817506 6.6900098,56.817506 6.9284045,56.625875 7.2175073,56.450008 7.2175073,56.450008 7.3596647,56.395833 7.72,56.319998 8.16,56.319998 c 0.44,0 1.7960938,0.776812 1.7960938,0.952812 0,0.176 -0.7955002,-0.312812 -0.5503303,-0.312812 0.2451699,0 0.9685175,0.51888 1.0559385,0.746694 0.08742,0.227817 0.663317,0.566765 1.831266,1.159584 1.856633,0.942378 2.420491,1.075942 4.486052,1.06263 5.01945,-0.03234 8.779491,-3.152607 9.747458,-8.088908 0.439123,-2.239376 0.223182,-3.896979 -0.775749,-5.954813 -1.285363,-2.647894 -2.497985,-3.674003 -5.66038,-4.789759 C 18.076036,40.384734 14.568546,37.890734 12.785683,35.901448 9.901031,32.682805 7.68,27.118405 7.68,23.110064 c 0,-2.646546 1.2150624,-6.594499 2.875255,-9.342211 3.98876,-6.6016226 10.768488,-10.2159949 18.489644,-9.8571002 3.674647,0.1708048 6.190544,0.9480227 9.30345,2.8740488 C 40.978496,8.4121321 42,9.4295158 42,10.42172 c 0,0.419857 -0.838384,2.149086 -1.863078,3.84273 -2.377421,3.929478 -3.313559,4.369958 -5.427284,2.553691 -3.02067,-2.595585 -7.506183,-3.277743 -10.837051,-1.648102 -2.102897,1.028852 -3.087314,1.924214 -4.322248,3.931237 -1.35435,2.2011 -1.744568,4.897706 -0.995225,6.877516 1.045833,2.76315 2.586986,4.229217 6.506891,6.189869 5.668443,2.835235 8.468635,5.417158 10.245214,9.446627 C 39.771578,51.74092 35.518342,63.631012 25.76,68.304938 21.451879,70.368384 15.697561,70.9713 11.672046,69.781012 Z" fill="url(#radialGradient-1)"></path>

                    <path id="fill-a-1"  d="m12.841 30.644c-4.7861-1.1263-9.1653-5.3383-10.592-10.188-0.73851-2.5099-0.66911-6.614 0.15313-9.0547 1.6901-5.0169 5.8686-8.8076 10.898-9.8861 0.94252-0.20214 2.9421-0.29088 4.523-0.20074 2.448 0.13958 3.1645 0.32509 5.2654 1.3634 3.8625 1.9089 6.528 5.0161 7.7809 9.07 0.5587 1.8078 0.62852 2.9897 0.62852 10.64v8.6063h-7.68v-16.567l-0.8939-1.7165c-0.6875-1.3202-1.2971-1.9616-2.64-2.7779-1.6136-0.98082-1.9183-1.0534-4.015-0.95636-2.8538 0.1321-4.48 1.1073-5.8995 3.5382-0.88491 1.5153-0.97124 1.9015-0.8826 3.9485 0.079558 1.8373 0.26547 2.5215 0.97734 3.5973 1.1397 1.7222 3.0526 2.9695 4.8678 3.1741l1.4459 0.16297v7.5968l-1.36-0.03214c-0.748-0.01768-1.9074-0.16097-2.5765-0.31842z" fill="url(#radialGradient-2)"></path>

                    <path  id="fill-r" d="M 3.5964262,16.182179 3.4606532,0.44436606 6.8572233,0.39794627 10.335703,0.45137456 10.3315,5.185633 c -4.37e-4,0.4916049 -0.115247,-0.057623 2.018665,-1.0292707 4.113401,-1.8729804 7.675178,-1.7860695 12.650977,1.3681278 1.727351,1.0949813 3.897879,3.8896512 3.057761,4.335842 -1.161629,0.6169469 0.481821,-0.2835933 -1.636255,0.9164439 -0.78077,0.424227 -0.790978,0.408788 -2.894779,1.433117 -1.205591,0.586993 -1.334466,0.901817 -1.573472,0.560932 -1.446879,-2.063624 -2.472067,-2.309173 -3.633898,-2.449255 -2.903099,-0.3500276 -5.432018,0.304013 -7.040192,2.729539 -0.888127,1.339518 -0.890444,1.359373 -1.0006,8.577697 l -0.05279,7.235071 H 6.8828641 3.5964262 Z"fill="url(#radialGradient-5)"></path>

                    <path id="fill-a-2"  d="m12.841 30.644c-4.7861-1.1263-9.1653-5.3383-10.592-10.188-0.73851-2.5099-0.66911-6.614 0.15313-9.0547 1.6901-5.0169 5.8686-8.8076 10.898-9.8861 0.94252-0.20214 2.9421-0.29088 4.523-0.20074 2.448 0.13958 3.1645 0.32509 5.2654 1.3634 3.8625 1.9089 6.528 5.0161 7.7809 9.07 0.5587 1.8078 0.62852 2.9897 0.62852 10.64v8.6063h-7.68v-16.567l-0.8939-1.7165c-0.6875-1.3202-1.2971-1.9616-2.64-2.7779-1.6136-0.98082-1.9183-1.0534-4.015-0.95636-2.8538 0.1321-4.48 1.1073-5.8995 3.5382-0.88491 1.5153-0.97124 1.9015-0.8826 3.9485 0.079558 1.8373 0.26547 2.5215 0.97734 3.5973 1.1397 1.7222 3.0526 2.9695 4.8678 3.1741l1.4459 0.16297v7.5968l-1.36-0.03214c-0.748-0.01768-1.9074-0.16097-2.5765-0.31842z" fill="url(#radialGradient-1)"></path>

                    <path id="fill-c" d="m23.034 42.228c-3.277-0.77845-7.7515-3.5408-10.248-6.3268-2.8847-3.2186-5.1057-8.783-5.1057-12.791 0-2.6465 1.2151-6.5945 2.8753-9.3422 3.9888-6.6016 10.768-10.216 18.49-9.8571 3.6746 0.1708 6.1905 0.94802 9.3034 2.874 2.3696 1.4661 3.3936 2.3902 3.6927 3.3324 0.23914 0.75346-3.3785 6.9998-4.3574 7.5237-0.81658 0.43702-1.1482 0.0099-2.8772-1.1827-3.3017-2.2775-7.5929-2.9227-10.934-1.2881-2.1029 1.0289-3.0873 1.9242-4.3222 3.9312-2.5896 4.2087-1.9488 9.0596 2.6688 12.47 1.3484 0.99595 2.0701 1.2694 4.8385 1.2694 2.7676 0 3.4655-0.36154 5.8938-1.6176 3.2557-1.684 3.5832-2.2489 4.3995-1.5384 0.87998 0.76598 3.929 6.1999 3.929 7.0022 0 0.3596-0.252 0.87892-0.56 1.1541-1.0903 0.97396-6.7011 3.7158-8.6231 4.2138-2.0809 0.53922-7.1172 0.63557-9.0628 0.17337z" fill="url(#radialGradient-5)"></path>
                  </g>
                </g>
            </svg>
          </div>
        </div>
      </div>
    )
  }

export default Intro; 
