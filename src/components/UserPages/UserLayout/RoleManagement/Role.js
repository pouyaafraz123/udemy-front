import React from "react";
import styled from "styled-components";

const Role = ({data}) => {

    let roleItem = [];
    let index = 0;
    while (index < data.list.length) {
        const dataIn = {
            number: index + 1,
            title: data.list[index].name,
            createData: data.list[index].created_at,
            editDate: data.list[index].updated_at,
            role: data.list[index].permissions
        }
        index++;
        roleItem.push(dataIn);
    }
    const identifyRole = (role, index) => {
        let classes = "";
        if (role.includes("edit") || role.includes("update")) {
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
    return roleItem.map((item, index) => {
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
                            item.role.map((role, index) => {
                                return (
                                    identifyRole(role.name, index)
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