describe('get-first-image', function() {
  var getFirstImage = require('../src/get-first-image.js');
  var testTitle = 'Get first image src in img html tags';

  it(`${testTitle} (image tag exist)`, function() {
    expect(getFirstImage('<p><img src="/new/img/works/ekowisata.jpg" alt="" /></p><p>Website yang menyajikan sebuah ekowisata di daerah gunungsari.</p>')).toBe(
      '/new/img/works/ekowisata.jpg'
    );
  });

  it(`${testTitle} (image tag not exist)`, function() {
    expect(getFirstImage('<p></p><p>Website yang menyajikan sebuah ekowisata di daerah gunungsari.</p>')).toBe(
      ''
    );
  });

  it(`${testTitle} (not have slash in the end)`, function() {
    expect(getFirstImage('<p><img src="/new/img/works/ekowisata.jpg" alt="" ></p><p>Website yang menyajikan sebuah ekowisata di daerah gunungsari.</p>')).toBe(
      '/new/img/works/ekowisata.jpg'
    );
  });

  it(`${testTitle} (many image tag exist)`, function() {
    expect(getFirstImage('<p><img src="/new/img/works/ekowisata.jpg" alt="" ><img src="/new/img/works/ekowisata1.jpg" alt="" /><img src="/new/img/works/ekowisata2.jpg" alt="" /></p><p>Website yang menyajikan sebuah ekowisata di daerah gunungsari.</p>')).toBe(
      '/new/img/works/ekowisata.jpg'
    );
  });
});
