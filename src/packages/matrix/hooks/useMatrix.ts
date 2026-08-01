import { useState } from "react";
import { MatrixData } from "../types/matrix";
import { createMatrix } from "../utils/createMatrix";
import { resizeMatrix } from "../utils/resizeMatrix";
import {
    updateCell,
    updateXAxis,
    updateYAxis
} from "../utils/updateMatrix";

export function useMatrix() {
    const [matrix,setMatrix] = useState<MatrixData>(
        createMatrix()
    );

    return {
        matrix,
        setMatrix,
        resize:(r:number,c:number)=>{
            setMatrix(m=>resizeMatrix(m,r,c));
        },

        updateCell:(id:string,data:any)=>{
            setMatrix(m=>updateCell(m,id,data));
        },

        updateXAxis:(data:any)=>{

            setMatrix(m=>updateXAxis(m,data));

        },

        updateYAxis:(data:any)=>{
            setMatrix(m=>updateYAxis(m,data));
        },

        reset:()=>{
            setMatrix(createMatrix());
        }
    };
}