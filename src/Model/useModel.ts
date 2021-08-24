import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string){
    const { registerModel, unregisterModel, getModelByName} =useContext(ModelsContext)

    
useEffect(()=> () => unregisterModel(modelName), [
    modelName,
    unregisterModel,

])
   const getMOdel = useCallback(() => getModelByName(modelName),[
       getModelByName,
       modelName
   ])
   return {registerModel, getMOdel}
}
 

