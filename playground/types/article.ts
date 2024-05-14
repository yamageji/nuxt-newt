export interface Article {
  _id: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder: number;
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    };
  };
  title: string;
  slug: string;
  meta: {
    title: string;
    description: string;
    ogImage: {
      _id: string;
      src: string;
      fileName: string;
      fileType: string;
      fileSize: number;
      width: number;
      height: number;
      title: string;
      altText: string;
      description: string;
      metadata: object;
    };
  };
  body: string;
  coverImage: {
    _id: string;
    src: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    width: number;
    height: number;
    title: string;
    altText: string;
    description: string;
    metadata: object;
  };
  author: {
    _id: string;
    _sys: {
      createdAt: string;
      updatedAt: string;
      customOrder: number;
      raw: {
        createdAt: string;
        updatedAt: string;
        firstPublishedAt: string;
        publishedAt: string;
      };
    };
    fullName: string;
    slug: string;
    biography: string;
    profileImage: object;
  };
}
