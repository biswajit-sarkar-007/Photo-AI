"use client"

import Layers from "./layers/layers"
import UploadImage from "./upload/UploadImage"

export default function Edior(){
    return(
        <div className="flex h-full">
            

            <UploadImage/>
            <Layers/>
        </div>
    )
}