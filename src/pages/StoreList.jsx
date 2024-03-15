import React from "react";
import { useSelector} from "react-redux";


const StoreList = () => {
// const dispatch = useDispatch();
const products = useSelector((state) => state.products.item.products);
console.log(products);

// const category = useSelector((state) => state.category.item.category);
// console.log(category);



    return(
        <div>
            <p>{products[0].title}</p>
            {/* <p>{category}</p> */}
        </div>
    )
    }





    export default StoreList;