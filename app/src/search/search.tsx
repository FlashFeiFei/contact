'use client';
import Image from "next/image";
import "./search.css"
import {useEffect, useRef, useState} from "react";


export default function MySearch() {

    const scrollContainerRef = useRef(null);
    const [isSearch, setSearch] = useState(true);


    function myOnScroll(event) {

        //使用getBoundingClientRect方法
        // getBoundingClientRect方法返回元素的大小及其相对于视口的位置。通过读取top属性，可以获取元素相对于视口顶部的距离
        const rect = scrollContainerRef.current.getBoundingClientRect(); // 获取元素的边界信息
        //下拉了
        if(scrollContainerRef.current.matches(".search") && rect.top < 0){
            //切换到固定在顶部的样式
            setSearch(false);
        }

        //窗口的滚动条到达顶部
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if(scrollTop == 0){
            //切换到默认样式
            setSearch(true);
        }


    }

    useEffect(() => {


        //注册滚动事件
        window.addEventListener('scroll', myOnScroll);

        //注销滚动事件
        return () => {
            window.removeEventListener('scroll', myOnScroll);
        };


    }, []);

    return (
        <div className={isSearch ? "search" : "searchByBar"} onScroll={myOnScroll} ref={scrollContainerRef}>
            <Image className={isSearch ? "searchImg" : "searchImgByBar"} src={"/baidu.png"} alt={"dd"} width={270}
                   height={129}/>
            <div className={"SearchContainer"}>
                <input className={"SearchContainerInput"} type={"text"}/>
                <button className={"SearchContainerButton"}>搜索一下</button>
            </div>
        </div>
    );
}