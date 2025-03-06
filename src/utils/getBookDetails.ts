export const getBookDetails = async ({endpoint, param}: {endpoint: string, param?: string | number}) => {
    const response = await fetch(`http://localhost:3000/${endpoint}/${param}`);
    if(!response.ok){
        throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    return response.json();

}