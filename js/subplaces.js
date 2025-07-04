/* script.js */
function showInfo(city, state) {
    const info = `Details about ${city}, ${state}:
    - Famous for its culture and heritage.
    - Well-known tourist attractions.
    - Vibrant economy and lifestyle.`;
    
    alert(info);
}

function showLocation(city, state) {
    const query = `${city}, ${state}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
}

