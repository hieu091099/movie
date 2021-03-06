import React from 'react'
import cgv from './../../asset/images/icons/cgv.png';
import bhd from './../../asset/images/icons/bhd.png';
import galaxycine from './../../asset/images/icons/galaxycine.png';
import cinestar from './../../asset/images/icons/cinestar.png';
import lotte from './../../asset/images/icons/lotte.png';
import megags from './../../asset/images/icons/megags.png';
import bt from './../../asset/images/icons/bt.jpg';
import dongdacinema from './../../asset/images/icons/dongdacinema.png';
import TOUCH from './../../asset/images/icons/TOUCH.png';
import cnx from './../../asset/images/icons/cnx.jpg';
import STARLIGHT from './../../asset/images/icons/STARLIGHT.png';
import VCB from './../../asset/images/icons/VCB.png';
import VIETTINBANK from './../../asset/images/icons/VIETTINBANK.png';
import zalopay_icon from './../../asset/images/icons/zalopay_icon.png';
import zion from './../../asset/images/icons/zion-logo.jpg';
import payoo from './../../asset/images/icons/payoo.jpg';
import laban from './../../asset/images/icons/laban.png';
import AGRIBANK from './../../asset/images/icons/AGRIBANK.png';
import dcine from './../../asset/images/icons/dcine.png';
import IVB from './../../asset/images/icons/IVB.png';
import android from './../../asset/images/icons/android-logo.png';
import apple from './../../asset/images/icons/apple-logo.png';
import facebook from './../../asset/images/icons/facebook-logo.png';
import zalo from './../../asset/images/icons/zalo-logo.png';
import bocongthuong from './../../asset/images/icons/bocongthuong.png';

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="row footer__info">
                    <div className="col-12 col-sm-12 col-md-4 footer__detail">
                        <p id="footerTitleTix" className="footer__title">TIX</p>
                        <div className="row">
                            <div className="col-5 pr-0 hideOnMobile">
                                <a href="#">FAQ</a><br/>
                                <a href="#">Brand Guidelines</a>
                            </div>
                            <div className="col-6 pl-0 hideOnMobile">
                                <a href="#">Th???a thu???n s??? d???ng</a><br/>
                                <a href="#">Ch??nh s??ch b???o m???t</a>
                            </div>
                            <div className="col-12 hideOnPC">
                                <a href="#">FAQ</a><br/>
                                <a href="#">Brand Guidelines</a>
                                <a href="#">Th???a thu???n s??? d???ng</a><br/>
                                <a href="#">Ch??nh s??ch b???o m???t</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 footer__partner hideOnMobile">
                        <p className="footer__title">?????I T??C</p>
                        <div className="col-12 row">
                            <a href="#"><img src={cgv} style={{ backgroundColor: 'white' }} /></a>
                            <a href="#"><img src={bhd} /></a>
                            <a href="#"><img src={galaxycine} /></a>
                            <a href="#"><img src={cinestar} /></a>
                            <a href="#"><img src={lotte} /></a>
                        </div>
                        <div className="col-12 row">
                            <a href="#"><img src={megags} /></a>
                            <a href="#"><img src={bt}/></a>
                            <a href="#"><img src={dongdacinema} /></a>
                            <a href="#"><img src={TOUCH} /></a>
                            <a href="#"><img src={cnx} /></a>
                        </div>
                        <div className="col-12 row">
                            <a href="#"><img src={STARLIGHT} /></a>
                            <a href="#"><img src={VCB} /></a>
                            <a href="#"><img src={VIETTINBANK} /></a>
                            <a href="#"><img src={zalopay_icon} /></a>
                            <a href="#"><img src={zion} /></a>
                        </div>
                        <div className="col-12 row">
                            <a href="#"><img src={payoo} /></a>
                            <a href="#"><img src={laban} /></a>
                            <a href="#"><img src={AGRIBANK} /></a>
                            <a href="#"><img src={dcine} /></a>
                            <a href="#"><img src={IVB} /></a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 footer__app ">
                        <div className="col-6 hideOnMobile">
                            <p className="footer__title ">MOBILE APP</p>
                            <a href="#"><img src={android}/></a>
                            <a href="#"><img src={apple}/></a>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 footer__social">
                            <p className="footer__title hideOnMobile">SOCIAL</p>
                            <a href="#"><img src={facebook}/></a>
                            <a href="#"><img src={zalo}/></a>
                        </div>
                    </div>
                </div>
                <hr id="hrFooter"/>
                <div className="row footer__add">
                    <div className="col-12 col-sm-12 col-md-1 p-0">
                        <img className="imgZion" src={zion} style={{width:'100%', borderRadius:'10px', cursor:'pointer'}}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 pr-0 address__detail">
                        <p className="footer__title">TIX ??? S???N PH???M C???A C??NG TY C??? PH???N ZION</p>
                        <p>?????a ch???: Z06 ???????ng s??? 13, Ph?????ng T??n Thu???n ????ng, Qu???n 7, Tp. H??? Ch?? Minh, Vi???t Nam.</p>
                        <p>Gi???y ch???ng nh???n ????ng k?? kinh doanh s???: 0101659783,</p>
                        <p>????ng k?? thay ?????i l???n th??? 30, ng??y 22 th??ng 01 n??m 2020 do S??? k??? ho???ch v?? ?????u t?? Th??nh ph??? H??? Ch?? Minh c???p.</p>
                        <p>S??? ??i???n Tho???i (Hotline): 1900 545 436 </p>
                        <p>Email: <a href="#" style={{color:'red'}}>support@tix.vn</a></p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 p-0">
                        <img className="imgBoCo" src={bocongthuong} style={{width:'100%', cursor:'pointer'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
