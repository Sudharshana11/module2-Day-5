import React from "react";
import CustomButton from "../components/CustomButton";

function Products(){
    const Pro = {
        name : "Oneplus",
        p_id : 111,
        p_mrp : "Rs 30000",
        p_qty : 1,
        p_col : "blue"
    }
    return (
        <div>
            <div class="box1">
                <table border = "1">
                    <tr>
                        <td>Name</td>
                        <td>Id</td>
                        <td>MRP</td>
                        <td>Quantity</td>
                        <td>Color</td>
                    </tr>
                    <tr>
                        <td>{Pro.name}</td>
                        <td>{Pro.p_id}</td>
                        <td>{Pro.p_mrp}</td>
                        <td>{Pro.p_qty}</td>
                        <td>{Pro.p_col}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Products