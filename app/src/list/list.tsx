'use client';
import Image from "next/image";
import "./list.css"
import {useState} from "react";


export default function MyList() {


    const [data, setData] = useState([
        {id: 1, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
        {id: 2, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
        {id: 3, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
        {id: 4, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
        {id: 5, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
        {id: 6, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
        {id: 7, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
        {id: 8, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
        {id: 9, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
    ])


    function handleDelete(id) {
        setData((prevItems) => prevItems.filter((item) => item.id !== id));
    }


    return (
        <div className={"list"}>
            <ul>
                {data.map((value) => (
                    <li key={value.id}>
                        <Image src={"/avatar.svg"} alt={"头像"} width={30} height={30}/>
                        <div className={"describe"}>
                            <p><b>联系人:</b>{value.contacts}{value.id}</p>
                            <p><b>电话:</b>{value.phone}</p>
                            <p><b>部门:</b>{value.department}</p>
                            <p><b>描述信息:</b>{value.describe}</p>
                        </div>
                        <div className={"operation"}>
                            <ul>
                                <li>编辑</li>
                                <span></span>
                                <li onClick={() => handleDelete(value.id)}>删除</li>
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}