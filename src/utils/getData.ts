export const getData = async ({endpoint}: {endpoint: string}) => {

           const response = await fetch(`http://localhost:3000/${endpoint}/`);
        if(!response.ok){
            throw new Error(`Failed to fetch data from ${endpoint}`);
        }
        return response.json();


}