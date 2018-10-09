import Datastore = require("@google-cloud/datastore");

export class MatchData {

    public datastore: Datastore;

    constructor(tournament: string) {
        this.datastore = new Datastore({
            projectId : '5119-scouting-app',
            namespace : tournament
        })
    }




}