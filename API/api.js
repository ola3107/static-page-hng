const apiKey = import.meta.env.VITE_TIMBU_API_KEY;
const appId = import.meta.env.VITE_TIMBU_APP_ID;
const orgId = import.meta.env.VITE_TIMBU_ORG_ID;

export const getProducts = async () => {
    const response = await fetch(`/api/products?organization_id=${orgId}&reverse_sort=false&page=1&size=16&Appid=${appId}&Apikey=${apiKey}`);
    const data = await response.json();
    const items = data.items;
    if (response.status >= 400) {
        console.log('API Key:', import.meta.env.VITE_TIMBU_API_KEY);
        console.log('App ID:', import.meta.env.VITE_TIMBU_APP_ID);
        console.log('Org ID:', import.meta.env.VITE_TIMBU_ORG_ID);
        throw new Error(data.errors);
    }
    return items;
};

export const getSingleProduct = async (id) => {
    const response = await fetch(`/api/products/${id}?organization_id=${orgId}&Appid=${appId}&Apikey=${apiKey}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

// https://api.timbu.cloud/products/e523a711d8ae4505ae3c53dbf61b8804?organization_id=05f5711a01a14eabba00efa43bfc4610&Appid=B8606M2O0SMB0T5&Apikey=faf205389bf4402a894f401ff29efdb520240712134402740587


    