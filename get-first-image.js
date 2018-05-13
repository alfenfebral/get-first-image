function getFirstImage(data, defaultImage) {
  const regex = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;
  const results = regex.exec(data);
  
  if(results) 
    return results[1];
  else
    return defaultImage;
}

module.exports = getFirstImage;