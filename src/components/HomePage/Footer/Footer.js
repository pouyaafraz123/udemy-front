import React from "react";
import styled from "styled-components";

const Footer = (props) => {
    return (
        <>
            <FooterDiv>
                <div className="container-fluid">
                    <div className="row text-white">
                        <div className="col-lg-6 col-12">
                            <h4>سامانه یادینا</h4>
                            <p>هدف سامانه ارتقا سطح فنی و تخصصی شرکت کنندگان در دوره های پیشنهادی با سناریوهای مختلف
                                آموزشی می
                                باشد. این سامانه آمادگی برگزاری دوره های مختلف آموزش کارمندان سازمان ها و موسسات را
                                دارد</p>
                        </div>
                        <div className="col-lg-1 col-12"></div>
                        <div className="col-lg-5 col-12">
                            <h6>ارتباط با ما</h6>
                            <ul className="list-unstyled">
                                <li>آدرس: تبریز– خ ۲۹ بهمن–دانشگاه تبریز–دانشکده برق–۱۴۰</li>
                                <li>شماره تماس: ۳۳۸۳۰۷۲۸– ۰۴۱</li>
                                <li>ایمیل: info@yadina.ir</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </FooterDiv>
        </>
    );
}

const FooterDiv = styled.div`
  background-color: #29509d;
  padding: 60px 65px;

  h4, h6 {
    font-weight: 800;
  }

  p, li {
    font-weight: 300;
    word-spacing: 5px;
    line-height: 2;
    font-size: 14px;
  }

  li {
    cursor: help;
    color: rgba(255, 255, 255, 0.75);
  }

  li:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export default Footer;