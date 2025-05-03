import {makeAutoObservable} from "mobx";

class ReqState{
    newMusic = []
    constructor() {
        makeAutoObservable(this)
    }
}
export default new ReqState()