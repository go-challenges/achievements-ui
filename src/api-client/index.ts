import axios from "axios";

class Client {
    endpoint: string;
    baseUrl: string

    constructor() {
        this.baseUrl = 'http://localhost:3000';
        this.endpoint = `${this.baseUrl}/challenges`;
    }

    async getAllData() { // TODO: add type for challenge
        const res = await axios.get(this.endpoint);
  
        return res.data
    }

    async addChallenge(name: string, description: string) {
        const res = await axios.post(this.endpoint, {name: name, description: description});

        if(res.status == 201) {
            return res.data;
        } // TODO: throw exception
    }

    async deleteChallenge(index: number) {
        const res = await axios.delete(`${this.endpoint}/${index}`);

        if(res.status == 204) {
            this.getAllData();
        }// TODO: throw exception
    }
}

const client = new Client();

export default client;
