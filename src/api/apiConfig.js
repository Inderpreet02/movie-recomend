const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '26cd3d8a88ad0f8369ba764f4f8c7d53',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;