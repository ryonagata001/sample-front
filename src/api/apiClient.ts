import axios from 'axios';

class ApiClient {
    public async get(url: string) {
        return await axios.get(url);
    }
}

export const apiClient = new ApiClient();
