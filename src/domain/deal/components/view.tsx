import {Category} from "../../category/types";
import Breadcrumb from "./breadcrumb";
import {Deal} from "../../../api/deal/type";

function DealView({deal, category}: { deal:Deal, category: Category}) {

    return (
        <>
            <Breadcrumb category={category} deal={deal}/>
            <h1>Deal</h1>
            <h2>Name : {deal.title}</h2>
            <h3>Slug : {deal.id}</h3>
        </>
    );
};

export default DealView;