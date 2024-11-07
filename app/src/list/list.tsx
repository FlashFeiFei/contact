import Image from "next/image";
import "./list.css"

const data = [
    {id: 1, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
    {id: 2, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
    {id: 3, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
    {id: 4, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
    {id: 5, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
    {id: 6, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
    {id: 7, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
    {id: 8, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
    {id: 9, contacts: 'contacts', phone: 'phone', department: "department", describe: "describe"},
]
export default function MyList() {

    return (
        <div className={"list"}>
            <ul>
                {data.map((value) => (
                    <li key={value.id}>
                        <Image src={"/avatar.svg"} alt={"头像"} width={30} height={30}/>
                        <div className={"describe"}>
                            <p><b>联系人:</b>{value.contacts}</p>
                            <p><b>电话:</b>{value.phone}</p>
                            <p><b>部门:</b>{value.department}</p>
                            <p><b>描述信息:</b>{value.describe}</p>
                        </div>
                        <div className={"operation"}>
                            <ul>
                                <li>编辑</li>
                                <span></span>
                                <li>删除</li>
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}