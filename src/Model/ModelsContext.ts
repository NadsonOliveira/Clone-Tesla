import React, { ReactFragment, ReactNode } from "react";
//cada modelo coloca uma nova SectionRef
export interface CarModel{
    modelName: string
    overlayNode: ReactNode
    sectionRef: React.RefObject<HTMLElement>
}

//wrapperRef é uma referencia ao Wrapper 
//React.RefObject<HTMLElement> é uma referencia ao HTML
interface ModelsContext{
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: CarModel[]
    registerModel:(model: CarModel) =>
 void
 unregisterModel:(ModelName: string) => void
 getModelByName:(ModelName: string) => CarModel | null
}

//o MODELCONTEXT foi passado como paramentro de tipagem usando <>
export default React.createContext<ModelsContext>({} as ModelsContext)