import React from "react";
import styled from "styled-components";

const items = [
    {
        number: 1,
        title: "Student",
        createData: "تاریخ ایجاد : 1401/02/06 - 15:15:13",
        editDate: "آخرین ویرایش : 1401/02/06 - 15:15:13",
        role: []
    },
    {
        number: 2,
        title: "دانشجو",
        createData: "تاریخ ایجاد : 1400/11/14 - 08:26:33",
        editDate: "خرین ویرایش : 1400/11/25 - 12:53:17",
        role: []
    },
    {
        number: 3,
        title: "استاد",
        createData: "تاریخ ایجاد : 1400/11/14 - 08:26:33",
        editDate: "خرین ویرایش : 1400/11/25 - 12:53:29",
        role: ["media-edit", "channel-create", "channel-edit", "channel-delete", "playlist-create", "playlist-edit", "playlist-delete", "media-create", "media-delete", "comment-list", "comment-edit", "comment-delete",]
    },
    {
        number: 4,
        title: "SuperAdmin",
        createData: "تاریخ ایجاد : 1400/11/14 - 08:26:33",
        editDate: "خرین ویرایش : 1400/11/28 - 09:32:20",
        role: ["permission-list", "permission-create", "permission-edit", "permission-delete", "role-list", "role-create", "role-edit", "role-delete", "channel-create", "channel-edit", "channel-delete", "playlist-create", "playlist-edit", "playlist-delete", "media-create", "media-edit", "media-delete", "channel-admin-edit", "channel-admin-delete", "user-list", "user-create", "user-edit", "user-delete", "category-create", "category-edit", "category-delete", "comment-list", "comment-create", "comment-edit", "playlist-admin-edit", "playlist - admin - delete", "media-admin-edit", "media-admin-delete", "comment-delete", "comment-admin-list", "comment-admin-delete", "comment-admin-edit"]
    },
]

const Role = (props) => {
    const identifyRole = (role,index) => {
        let classes = "";
        if (role.includes("edit")) {
            classes = "Role-edit";
        } else if (role.includes("create")) {
            classes = "Role-create";
        } else if (role.includes("delete")) {
            classes = "Role-delete";
        } else if (role.includes("list")) {
            classes = "Role-list";
        }
        return <div className={"mr-1 mb-2 Role " + classes} key={index}>{role}</div>
    }
    return items.map((item,index) => {
        return (
            <RoleCard key={index} className="card mt-3">
                <div className="card-body">
                    <div className="d-flex flex-row pr-3">
                        <span className="Number-Box">{item.number}</span>
                        <div className="pr-3 mr-1">
                            <h6>{item.title}</h6>
                            <p className="text-muted">{item.createData} &nbsp; - &nbsp; {item.editDate}</p>
                        </div>
                    </div>
                    <div className="pr-4 mb-2">
                        {
                            item.role.map((role,index) => {
                                return (
                                    identifyRole(role,index)
                                );
                            })
                        }
                    </div>
                    <div className="pr-4">
                        <button className="BTN purpleBTN">مشاهده و ویرایش</button>
                        <button className="BTN redBTN mr-1">حذف</button>
                    </div>
                </div>
            </RoleCard>
        );
    })
}

const RoleCard = styled.div`
  transition: all ease 0.5s;
  border-radius: 7px;

  &:hover {
    transform: scale(1.04);
  }

  .Number-Box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f4f6;
    width: 38px;
    height: 42px;
    color: rgba(41, 80, 157, 1);
    border-radius: 5px;
  }

  .BTN {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 11px;
    color: white;
    padding: 5px 8px;
    border-radius: 7px;
    font-weight: 700;
    transition: all ease 0.5s;
  }

  .purpleBTN {
    background-color: #a78bfa;
  }

  .purpleBTN:hover {
    background-color: #7c3aed;
  }

  .redBTN {
    background-color: #ef4444;
  }

  .redBTN:hover {
    background-color: #dc2626;
  }

  .Role {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 11px;
    color: white;
    padding: 5px 8px;
    border-radius: 7px;
    font-weight: 600;
    width: fit-content;
    display: inline-block;
  }

  .Role-delete {
    color: rgba(248, 113, 113, 1) !important;
    background-color: rgba(248, 113, 113, 0.1);
  }

  .Role-edit {
    color: rgba(167, 139, 250, 1);
    background-color: rgba(167, 139, 250, 0.1);
  }

  .Role-create {
    color: rgba(41, 80, 157, 1);
    background-color: rgba(41, 80, 157, 0.1);
  }

  .Role-list {
    color: rgba(236, 141, 87, 1);
    background-color: rgba(236, 141, 87, 0.1);
  }

  h6 {
    color: rgba(41, 80, 157, 1) !important;
  }

  p {
    font-size: 12px;
    color: rgba(188, 188, 188, 1) !important;
  }

  span {
    font-family: sans-serif;
  }
`;

export default Role;