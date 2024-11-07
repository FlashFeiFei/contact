import "./page.css"
import MyList from "@src/list/list"
import MySearch from "@src/search/search"

export default function Home() {
    return (
        <>
            <MySearch/>
            <div className={"myList"}>
                <MyList/>
            </div>
        </>
    );
}
