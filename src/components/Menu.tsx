// @flow 
import * as React from 'react';
import { Dinner } from './Dinner';
import {data} from './DinnerData';

type Props = {
    
};
export const Menu = (props: Props) => {



    return (
        <>
        <section className="about-area pt-60 m-2 p-2" id="home">
         <div className="container mb-5">
            <div className="row">
               <div className="col-xl-12 mb-60">
                  <div className="section-title text-center">
                     <p></p>
                     <h1>Vår meny</h1>
                  </div>
               </div>
            </div>
            
            
            <div className="row">
               <div className="col-xl-12 mb-60">
                  <div className="section-title text-center">
                     <h4>Grytor</h4>
                  </div>
               </div>
            </div>
            <div className="row menu_style1">
            


            <Dinner title={"Gaengphed"} children={"Röd curry, kokosmjölk, bambu, limeblad och söt basilika."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Gaengkeowan"} children={"Grön curry, kokosmjölk, bambu, limeblad och söt basilika."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Gaengpanäng"} children={"Panäng curry, kokosmjölk, limeblad och söt basilika."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Gaengmassaman"} children={"Massaman curry, kokosmjölk, potatis, morötter och jordnötter."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            </div>
            <div className="row">
               <div className="col-xl-12 mb-60">
                  <div className="section-title text-center">
                     <h4>Soppor</h4>
                  </div>
               </div>
            </div>
            <div className="row menu_style1">
            <Dinner title={"Tomyam"} children={"Kokosmjölk kryddstark med champinjoner, lök, limeblad, chili, koriander, kalangar och citronglas."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Tomkha"} children={"Kokosmjölk, champinjoner, lök, chili, tammarin, koriander, kalangar, citronglas och limeblad."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            </div>
            <div className="row">
               <div className="col-xl-12 mb-60">
                  <div className="section-title text-center">
                     <h4>Vegetariska</h4>
                  </div>
               </div>
            </div>
            <div className="row menu_style1">
            <Dinner title={"Geangphedphak"} children={"Röd curry, kokosmjölk, bambu, limeblad, söt basilika och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Gaengkeowanphak"} children={"Grön curry, kokosmjölk, bambu, limeblad, söt basilika och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Gaengpanängphak"} children={"Panäng curry, kokosmjölk, limeblad, söt basilika och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Gaengmassamanphak"} children={"Massam curry, kokosmjölk, potatis, morötter, jordnötter och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Padthaiphak"} children={"Risnudlar, ägg, jordnötter och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Padthaiwunsenphak"} children={"Glasnudlar, ägg, jordnötter och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Thaiwokphak"} children={"Ägg-glasnudlar, ägg, chili och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Padphakruammit"} children={"Grönsaker och chili"} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Vårrullar"} children={"Glasnudlar, grönsaker med sweet chilisås."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Kaopadphak"} children={"Ris med ägg och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            </div>
            <div className="row">
               <div className="col-xl-12 mb-60">
                  <div className="section-title text-center">
                     <h4>Friterat</h4>
                  </div>
               </div>
            </div>
            <div className="row menu_style1">
            <Dinner title={"Räkor och kyckling"} children={"Friterade med sweet chili sås."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Vårrullar"} children={"Glasnudlar, hackat fläsk och grönsaker med sweet chilisås"} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            </div>
            <div className="row">
               <div className="col-xl-12 mb-60">
                  <div className="section-title text-center">
                     <h4>Grillat</h4>
                  </div>
               </div>
            </div>
            <div className="row menu_style1">
            <Dinner title={"Kycklingspett"} children={"Kyckling på spett och jordnötssås med sallad."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            </div>
            <div className="row">
               <div className="col-xl-12 mb-60">
                  <div className="section-title text-center">
                     <h4>Wokat</h4>
                  </div>
               </div>
            </div>
            <div className="row menu_style1">
            <Dinner title={"Padkraphow"} children={"Basilika, chili, paprika, bambu och champinjoner."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Padpreawan"} children={"Sötsur sås, ananas och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Padkhing"} children={"Ingefära och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Padkratiempprikthai"} children={"Vitlök, peppar, koriander och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Padmedmamuang"} children={"Cashewnötter, lök, chili och morötter."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Padthai"} children={"Risnudlar, ägg, jordnötter och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Padthaiwunsen"} children={"Glasnudlar, ägg, jordnötter och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Kaopad"} children={"Ris med grönsaker och ägg."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Padwunsen"} children={"Glasnudlar, ägg och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Thaiwok"} children={"Äggnudlar och grönsaker."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Padpongkari"} children={"Gul curry, ägg, grönsaker och jordnötter."} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            <Dinner title={"Kaijeaw"} children={"Äggomelett"} price={45} image={"https://i.imgur.com/kbpceNv.jpg"} />
            </div>
         </div>
      </section>

    </>
    );
};