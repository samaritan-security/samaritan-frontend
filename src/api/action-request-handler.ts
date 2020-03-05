import { APIHandler } from './api-handler'

export class ActionRequestHandler {
    /**
     * authorizes person
     * 
     * @param id: person's id
     */
    async authorize(id : string){
        let data = await APIHandler(`actions/authorize/${id}`, "GET");
        return data;
    }

    /**
     * unauthorizes person
     * 
     * @param id: person's id
     */
    async unauthorize(id : string){
        let data = await APIHandler(`actions/unauthorize/${id}`, "GET");
        return data;
    }

    /**
     * adds name to person and acknowledges they are known
     * 
     * @param id: person's id
     * @param name: person's name
     */
    async makeKnown(id : string, name: string){
        let data = {"name" : name, "_id" : id};
        let response = await APIHandler(`actions/makeknown`, "PUT", data);
        return response;
    }
}