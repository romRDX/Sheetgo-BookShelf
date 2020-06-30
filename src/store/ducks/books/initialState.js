import Image from '../../../assets/book.jpg';

const defaultDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a blandit augue, ullamcorper hendrerit nibh. Sed finibus porttitor massa ut ultrices. Nullam at purus arcu. Aenean consectetur urna non lectus malesuada, vel tincidunt dolor venenatis. Curabitur rutrum congue arcu, in luctus est rhoncus sed. Morbi viverra risus risus, vel porttitor est elementum sit amet. Morbi tempor odio eu egestas consequat. Duis quis efficitur mi. Sed ultrices orci quam, ac viverra mi efficitur non. Nulla vestibulum risus vel fermentum volutpat. Donec ac turpis facilisis, gravida diam sit amet, porttitor quam. Donec in odio quis nulla vulputate sodales. Sed interdum sagittis mi a aliquam. Suspendisse in consequat mauris. Sed ac mi sit amet nulla ultricies dictum. Aliquam nec mi quam.'

const books = [
  {
    id: '2835c135-a5a5-4260-9d00-b68430b19f82',
    img: Image,
    created_at: Date.now(),
    title: 'title 1',
    description: defaultDescription,
    author: 'author 1',
    category: 'wantToRead',
    deleted: false,
  },
  {
    id: '531f3e88-8b03-485c-9c84-1cbc9fcd5806',
    img: Image,
    created_at: Date.now(),
    title: 'title 2',
    description: defaultDescription,
    author: 'author 2',
    category: 'wantToRead',
    deleted: false,
  },
  {
    id: 'b898aaa7-a47a-4274-9f22-f17b286aa4d1',
    img: Image,
    created_at: Date.now(),
    title: 'title 3',
    description: defaultDescription,
    author: 'author 3',
    category: 'reading',
    deleted: false,
  },
  {
    id: 'c32c07d2-d2ae-4416-8a2c-1148c829c5a7',
    img: Image,
    created_at: Date.now(),
    title: 'title 4',
    description: defaultDescription,
    author: 'author 4',
    category: 'reading',
    deleted: false,
  },
  {
    id: '4ccde7b5-9be1-4430-b2dd-1cef3d4a8239',
    img: Image,
    created_at: Date.now(),
    title: 'title 5',
    description: defaultDescription,
    author: 'author 5',
    category: 'read',
    deleted: false,
  },
  {
    id: 'f35d4319-a735-41ff-b89a-8eaa72d45982',
    img: Image,
    created_at: Date.now(),
    title: 'title 6',
    description: defaultDescription,
    author: 'author 6',
    category: 'read',
    deleted: false,
  },
];

export default books;
