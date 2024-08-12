interface Tag {
  id: string,
  attributes: {
    name: {
      en: string;
    }
  }
}

interface Attributes {
  title: {
    en: string;
  },
  altTitle: AltTitle[];
  description: {
    en: string;
  }
  status: string,
  year: number | string,
  contentRating: string,
  tags: Tag,
  state: string,
  latestUploadedChapter: string,
}

interface AltTitle {
  [key: string]: string;
}

export const filterAttributes = (attributes: any ): Attributes => {
  console.log("attributes filtering")
  return attributes = {
    title: attributes.title.en,
    description: attributes.description.en,
    altTitle: attributes.altTitles.filter((altTitle: AltTitle) => 
      Object.keys(altTitle).includes(attributes.originalLanguage)
    ).map((altTitle: AltTitle) => altTitle[attributes.originalLanguage]), // Extracting the title based on language
    tags: attributes.tags.map((tag: any) => tag.attributes.name.en), // Accessing the 'en' property of 'name'
    status: attributes.status,
    year: attributes.year,
    contentRating: attributes. contentRating,
    state: attributes.state,
    latestUploadedChapter: attributes.latestUploadedChapter,
  };
};

type Relationship = {
  type: string;
  id: string;
};

type Relationships = {
  author?: string;
  artist?: string;
  cover_art?: string;
};

export const filterRelationships = (relationships: Relationship[]): Relationships => {
  console.log("relationships filtering");

  // Initialize an empty object for the filtered relationships
  const filteredRelationships: Relationships = {};

  // Loop through the array and extract ids for the desired types
  relationships.forEach((relationship) => {
    if (relationship.type === 'author') {
      filteredRelationships.author = relationship.id;
    } else if (relationship.type === 'artist') {
      filteredRelationships.artist = relationship.id;
    } else if (relationship.type === 'cover_art') {
      filteredRelationships.cover_art = relationship.id;
    }
  });

  return filteredRelationships;
};