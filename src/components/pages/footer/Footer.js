import {VscGithub} from 'react-icons/vsc';
import {FaInstagram} from 'react-icons/fa';

import { FooterSection,Title ,FooterLink ,SubTitle , SocialMediaIcon ,NavLink ,socialMediaLink} from './FooterElement';

export default function Footer() {
  return (
     <FooterSection>
       <div className="container">
           <div className="row py-5">
             <div className="col-sm-3">
             <svg width="50" className="w-50 h-50 mt-3" height="50" viewBox="0 0 95 84" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M84.4901 41.1012C84.4901 61.2831 67.959 77.6438 47.5669 77.6438C27.1748 77.6438 10.6437 61.2831 10.6437 41.1012C10.6437 20.9193 27.1748 4.55861 47.5669 4.55861C67.959 4.55861 84.4901 20.9193 84.4901 41.1012Z" fill="url(#paint0_linear)"/>
             <path d="M42.5173 27.2969C40.4709 27.3619 38.8955 28.1415 37.7911 29.6357C36.7192 31.1299 36.1832 33.7122 36.1832 37.3827C36.1832 38.5845 36.2969 39.4291 36.5243 39.9163C36.7517 40.3711 36.8654 40.6309 36.8654 40.6959C35.1113 40.6959 33.7958 40.3386 32.9188 39.624C32.0742 38.8769 31.652 37.6588 31.652 35.9697C31.652 33.6635 32.2204 31.5684 33.3573 29.6844C34.4942 27.7679 36.2969 26.225 38.7656 25.0557C41.2667 23.8863 44.4337 23.3016 48.2666 23.3016C49.0462 23.3016 50.0856 23.3828 51.3849 23.5452C53.7237 23.7726 55.3803 23.8863 56.3547 23.8863C58.0763 23.8863 59.538 23.6914 60.7398 23.3016C60.6424 23.594 60.4637 24.2436 60.2039 25.2506C59.944 26.225 59.473 27.0696 58.7909 27.7842C58.1413 28.4663 57.248 28.9211 56.1111 29.1484C54.1947 29.1484 51.9209 28.8399 49.2898 28.2227L47.2434 37.9187H54.3571L53.5775 41.5242H46.4639L42.5173 59.8442H35.5011L42.5173 27.2969Z" fill="white"/>
             <path d="M44.5614 59.1975C44.436 59.1975 44.3338 59.1579 44.2546 59.0788C44.1754 58.9996 44.1358 58.8973 44.1358 58.772C44.1358 58.6136 44.1952 58.4751 44.314 58.3563C44.4393 58.2375 44.5812 58.1781 44.7395 58.1781C44.8649 58.1781 44.9672 58.2177 45.0463 58.2969C45.1255 58.3695 45.1651 58.4685 45.1651 58.5938C45.1651 58.7522 45.1024 58.894 44.9771 59.0194C44.8583 59.1382 44.7197 59.1975 44.5614 59.1975ZM46.4086 56.4363C46.5075 55.8821 46.7055 55.3971 47.0024 54.9814C47.2993 54.5592 47.6655 54.2359 48.1009 54.0115C48.5364 53.7806 49.0016 53.6651 49.4964 53.6651C49.9715 53.6651 50.3772 53.7806 50.7137 54.0115C51.0568 54.2425 51.2878 54.5427 51.4065 54.9122L51.9508 51.8243H52.6436L51.3471 59.148H50.6543L50.8721 57.9406C50.6346 58.3167 50.308 58.6268 49.8923 58.8709C49.4766 59.1085 49.0148 59.2272 48.5067 59.2272C47.8535 59.2272 47.329 59.0326 46.9331 58.6433C46.5438 58.2474 46.3492 57.7163 46.3492 57.0499C46.3492 56.8586 46.369 56.654 46.4086 56.4363ZM51.1294 56.4462C51.1624 56.2614 51.1789 56.0965 51.1789 55.9513C51.1789 55.4367 51.0238 55.0276 50.7137 54.7241C50.4036 54.4206 50.0012 54.2689 49.5063 54.2689C49.1236 54.2689 48.764 54.3546 48.4275 54.5262C48.0976 54.6977 47.8172 54.9484 47.5863 55.2783C47.3554 55.6016 47.2003 55.9876 47.1211 56.4363C47.0882 56.6342 47.0717 56.8025 47.0717 56.941C47.0717 57.4623 47.2234 57.8746 47.5269 58.1781C47.837 58.4751 48.2395 58.6235 48.7343 58.6235C49.1038 58.6235 49.4568 58.5344 49.7933 58.3563C50.1364 58.1781 50.4234 57.9241 50.6543 57.5942C50.8919 57.2643 51.0502 56.8816 51.1294 56.4462ZM56.2343 53.6651C56.6896 53.6651 57.0788 53.7542 57.4021 53.9324C57.7254 54.1039 57.9696 54.3414 58.1345 54.6449C58.3061 54.9484 58.3918 55.2948 58.3918 55.6841C58.3918 55.8623 58.3786 56.0206 58.3522 56.1592C58.3127 56.3571 58.2731 56.5353 58.2335 56.6936H53.7502C53.7304 56.819 53.7205 56.9377 53.7205 57.0499C53.7205 57.5579 53.8722 57.9505 54.1757 58.2276C54.4858 58.5047 54.8784 58.6433 55.3535 58.6433C55.8087 58.6433 56.2079 58.5344 56.551 58.3167C56.8941 58.099 57.1448 57.8054 57.3032 57.4359H58.0454C57.8211 57.9637 57.4615 58.3959 56.9667 58.7324C56.4784 59.0623 55.9077 59.2272 55.2545 59.2272C54.5815 59.2272 54.0405 59.0359 53.6314 58.6532C53.2289 58.2639 53.0277 57.7361 53.0277 57.0697C53.0277 56.8718 53.0475 56.6639 53.0871 56.4462C53.186 55.8854 53.384 55.3938 53.6809 54.9715C53.9844 54.5493 54.3572 54.226 54.7992 54.0016C55.2413 53.7773 55.7197 53.66

             51 56.2343 53.6651ZM57.6397 56.179C57.6727 55.9942 57.6891 55.8392 57.6891 55.7138C57.6891 55.2454 57.5407 54.8858 57.2438 54.635C56.9469 54.3843 56.5675 54.259 56.1056 54.259C55.7691 54.259 55.4458 54.3315 55.1357 54.4767C54.8256 54.6218 54.5551 54.8396 54.3242 55.1299C54.0933 55.4202 53.9349 55.7699 53.8491 56.179H57.6397ZM61.134 58.4454L63.7765 53.7443H64.5286L61.4012 59.148H60.5995L59.3921 53.7443H60.1344L61.134 58.4454ZM66.2989 59.2272C65.7513 59.2272 65.306 59.1019 64.9629 58.8511C64.6198 58.5938 64.4482 58.2441 64.4482 57.8021C64.4482 57.7229 64.4515 57.6635 64.4581 57.6239H65.1311C65.1047 57.9406 65.1971 58.1946 65.4082 58.386C65.6194 58.5773 65.9295 58.673 66.3385 58.673C66.7542 58.673 67.0874 58.5872 67.3381 58.4157C67.5888 58.2375 67.7142 58.0033 67.7142 57.713C67.7142 57.5414 67.6614 57.3963 67.5559 57.2775C67.4503 57.1588 67.3183 57.0631 67.16 56.9905C67.0082 56.9113 66.7938 56.8223 66.5167 56.7233C66.1736 56.5979 65.8965 56.4825 65.6853 56.3769C65.4808 56.2647 65.3027 56.113 65.1509 55.9216C65.0057 55.7237 64.9332 55.4763 64.9332 55.1794C64.9332 54.8825 65.0189 54.6185 65.1905 54.3876C65.362 54.1567 65.5963 53.9785 65.8932 53.8532C66.1967 53.7278 66.5398 53.6651 66.9225 53.6651C67.4569 53.6651 67.8924 53.7971 68.2289 54.061C68.5719 54.3249 68.7435 54.6746 68.7435 55.1101C68.7435 55.2025 68.7402 55.2717 68.7336 55.3179H68.0804C68.087 55.2915 68.0903 55.2487 68.0903 55.1893C68.0903 54.899 67.9748 54.6647 67.7439 54.4866C67.5196 54.3084 67.2293 54.2194 66.873 54.2194C66.5167 54.2194 66.2198 54.3051 65.9822 54.4767C65.7513 54.6416 65.6359 54.866 65.6359 55.1497C65.6359 55.341 65.6919 55.5027 65.8041 55.6346C65.9163 55.76 66.0548 55.8623 66.2198 55.9414C66.3847 56.0206 66.6058 56.113 66.8829 56.2186C67.2128 56.3439 67.4767 56.4594 67.6746 56.5649C67.8792 56.6705 68.0507 56.8157 68.1893 57.0004C68.3278 57.1852 68.3971 57.4161 68.3971 57.6932C68.3971 58.1617 68.2025 58.5344 67.8132 58.8116C67.4239 59.0887 66.9192 59.2272 66.2989 59.2272Z" fill="#F0E3E3"/>
             <defs>
             <linearGradient id="paint0_linear" x1="29.4745" y1="9.67457" x2="72.0882" y2="69.2927" gradientUnits="userSpaceOnUse">
             <stop stop-color="#CC2B5E"/>
             <stop offset="0.515625" stop-color="#B41976"/>
             <stop offset="1" stop-color="#753A88"/>
             </linearGradient>
             </defs>
             </svg>
             </div>
               <div className="col-sm-3">
                  <Title>About</Title>
                  <SubTitle className="mt-3 text-light">Handcraft by Reactjs , styled-component , css and Bootstrap</SubTitle>
                  <SubTitle className="mt-3 text-light">&copy; frontedDev 2020</SubTitle>
               </div>
               <div className="col-sm-3">
                  <Title>Explore</Title>
                  <NavLink>
                    <FooterLink to="home" className="nav-link"
                      duration={600} smooth={true} spy={true}>home</FooterLink>
                    <FooterLink to="about" className="nav-link"
                      duration={600} smooth={true} spy={true} delay={600} >about</FooterLink>
                    <FooterLink to="service" className="nav-link"
                      duration={600} smooth={true} spy={true} delay={600} >service</FooterLink>
                    <FooterLink to="portfolio" className="nav-link"
                      duration={600} smooth={true} spy={true} delay={600} >work</FooterLink>
                    <FooterLink to="contact" className="nav-link"
                      duration={600} smooth={true} spy={true} delay={600}>contact</FooterLink>
                  </NavLink>
               </div>
               <div className="col-sm-3">
                  <Title>Follow</Title>
                  <SocialMediaIcon className=" d-flex w-25 justify-content-between align-item-center mt-3">
                      <socialMediaLink href="https://github.com/Rishabh8109"><VscGithub className="icon"/></socialMediaLink>
                      <socialMediaLink href="/"> <FaInstagram className="icon"/></socialMediaLink>                    
                  </SocialMediaIcon>
               </div>
           </div>
       </div>
     </FooterSection>
  );
};