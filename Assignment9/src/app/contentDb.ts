import {Content} from './content-card/content-card-helper';

export let bandList: Content[];

bandList = [ {
  id: 0,
  author: 'Derek',
  imgUrl: 'https://media.altpress.com/uploads/2019/09/green-day-ap-cover.jpg',
  type: 'Story',
  title: 'Green Day',
  body: 'Green Day\'s big hit when they came back was American Idiot',
  tags: ['Rock', '1990 Band']
},{
  id: 1,
  title: 'Katy Perry',
  author: 'Jack',
  body: `Good thing she isn't married to Russell Brand anymore`,
  type: 'News',
  imgUrl: 'https://i.pinimg.com/474x/fd/b7/bf/fdb7bf03d038de42649cf72af76a51bb--katy-perry-albums-cd-artwork.jpg',
  tags: ['Pop', 'Fireworks']
}, {
  id: 2,
  title: 'Metallica',
  author: 'Stephen',
  body: `They\'ve been making music since the beginning of time and it\'s great!`,
  type: 'Story',
  imgUrl: 'https://www.revolvermag.com/sites/default/files/styles/original_image__844px_x_473px_/public/media/section-media/ridethelightning.jpg?itok=Fd0KtaS2&timestamp=1549044407',
  tags: ['Classic', 'Guitar Hero']
},{
  id: 3,
  title: 'Wu Tang Clan',
  author: 'Jd',
  body: 'They were popular when I was in high school',
  type: 'News',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Wu-TangClanEntertheWu-Tangalbumcover.jpg',
  tags: ['Old School', 'Rap']
}, {
  id: 4,
  title: 'Skrillex',
  author: 'Stephen',
  body: 'He used to be the lead singer of From First to Last',
  type: 'Story',
  imgUrl: 'https://www.billboard.com/files/styles/1536x866/public/media/Skrillex-Scary-Monsters-Nice-Sprites-2019-billboard-1500.jpg',
  tags: ['Guitar Hero']
}, {
  id: 5,
  title: 'Default Image',
  author: 'Matt',
  body: 'Default picture',
  type: 'News',
  imgUrl: '',
  tags: ['Default', 'Image']
}, {
  id: 6,
  title: 'Default Image',
  author: 'Matt',
  body: 'Default picture',
  type: 'Story',
  imgUrl: '',
  tags: ['Default', 'Image']
},
];
