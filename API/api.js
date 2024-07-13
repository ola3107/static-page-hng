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



    