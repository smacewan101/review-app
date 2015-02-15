module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('review', JSON.stringify([
      {
        id: '1',
        title: 'Ardbeg 10-Year',
        image: '',
        content: 'This is an excellent whiskey from the island Islay. Very smokey, the peat is in great abundance!',
        userId: "1"
      }
    ]));
    localStorage.setItem('user', JSON.stringify([
    {
      id: "1",
      name: "Scott"
    }
    ]));
  }
};