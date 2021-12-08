export interface Post {
  title: string;
  text: string;
  timestamp: Date;
  version: number;
};

// example data (this normally would be in a database like MySQL but I'm lazy tu fuk with sql lol)
// after the SQL query it would be an object anyway so I just skipped that step
export const examplePost: Post = {
  title: 'Example post REEEEEEEE',
  text: 'This is just an example post, imagine it is sitting in a database haha.',
  timestamp: new Date(),
  version: 0
};

// the collection that holds the posts, again just SQL simulation 
export const posts: Array<Post> = [examplePost]