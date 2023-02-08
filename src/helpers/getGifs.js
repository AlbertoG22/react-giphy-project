export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KRLTe1azV1PXz8NUCP4RTaVKnyx5nbDm&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) );

    return gifs;
};