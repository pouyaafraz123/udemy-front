import React from "react";
import styled from "styled-components";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import PaymentIcon from '@mui/icons-material/Payment';
import InfoIcon from "../../../../../assets/images/i.svg";

const DashboardCard = (props) => {

    const cards = [
        {
            title: "تعداد کانال ها",
            content: 0 + "+",
            footer: "تعداد کانال هایی که من ساختم",
            icon: <SubscriptionsIcon sx={{fontSize: '28px'}} className="text-white"/>
        },
        {
            title: "تعداد لیست پخش ها",
            content: 0 + "+",
            footer: "تعداد لیست پخش هایی که من ساختم",
            icon: <VideoLibraryOutlinedIcon sx={{fontSize: '28px'}} className="text-white"/>
        },
        {
            title: "تعداد محتوا ها",
            content: 0 + "+",
            footer: "تعداد کل محتواهایی که تاکنون ساختم",
            icon: <VideoFileIcon sx={{fontSize: '28px'}} className="text-white"/>
        },
        {
            title: "اعتبار حساب من",
            content: <>
                0
                <span className="pr-3">تومان</span>
            </>,
            footer: "اعتبار من در سیستم",
            icon: <PaymentIcon sx={{fontSize: '28px'}} className="text-white"/>
        },
    ]

    return (
        cards.map(card => {
            return (
                <CardDiv key={card.title} className="card mb-5 pt-4 pb-1 d-flex flex-row">
                    <div className="Card-Icon-Box">
                        <div className="Card-Icon">
                            {card.icon}
                        </div>
                    </div>
                    <div className="mt-n2 mr-n3 w-100 d-flex flex-column align-items-start">
                        <h6 className="text-muted">{card.title}</h6>
                        <h3 className="text-muted" style={{fontFamily: 'sans-serif'}}>{card.content}</h3>
                        <hr className="mt-n1 mr-n1"/>
                        <div className="d-flex align-items-center">
                            <img src={InfoIcon} alt="InfoIcon" className="img-fluid mt-n1"/>
                            <small className="text-muted pr-2">{card.footer}</small>
                        </div>
                    </div>
                </CardDiv>
            );
        })
    );
}


const CardDiv = styled.div`
  border-radius: 8px !important;

  .Card-Icon-Box {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 70px;
    height: 70px;
    transform: translateX(50%);
  }

  .Card-Icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #29509d;
    border-radius: 5px;
    width: 55px;
    height: 55px;
    transition: all ease-in-out 0.3s;
  }

  .Card-Icon:hover {
    background-color: #eb5254;
  }

  h6 {
    font-size: 14px;
  }

  span {
    font-size: 20px;
  }

  hr {
    width: 98%;
  }

  small {
    font-size: 12px !important;
    color: rgba(160, 165, 174, 1) !important;
  }
`;

export default DashboardCard;