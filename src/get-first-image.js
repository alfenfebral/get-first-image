/**
 * @param  {string} data - data contains html img tag
 * @param  {string} defaultImage - default image if img tag not found
 */
function getFirstImage(data, defaultImage = "") {
  const regex = /<img[^>]+src="?([^"\s]+)"?[^>]*>/g;
  const results = regex.exec(data);
  
  if(results) 
    return results[1];
  else
    return defaultImage;
}

module.exports = getFirstImage;